"use client";

import { useState, useRef, useCallback, useEffect, type FormEvent } from "react";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/components/providers/ContactProvider";

interface Message {
  role: "user" | "assistant";
  content: string;
}

const QUICK_ACTIONS = [
  "What does SynaptixLabs do?",
  "Tell me about Papyrus",
  "What advisory services do you offer?",
  "How can I get in touch?",
] as const;

const MAX_MESSAGES = 10;

export function SynaptixChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const messagesContainerRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const { openContact } = useContactModal();
  const [canScrollUp, setCanScrollUp] = useState(false);
  const [canScrollDown, setCanScrollDown] = useState(false);

  const userMessageCount = messages.filter((m) => m.role === "user").length;
  const isAtLimit = userMessageCount >= MAX_MESSAGES;

  const scrollToBottom = useCallback(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages, scrollToBottom]);

  // Track scroll position to show/hide navigation arrows
  const updateScrollState = useCallback(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    const threshold = 8;
    setCanScrollUp(el.scrollTop > threshold);
    setCanScrollDown(el.scrollTop + el.clientHeight < el.scrollHeight - threshold);
  }, []);

  useEffect(() => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.addEventListener("scroll", updateScrollState, { passive: true });
    updateScrollState();
    return () => el.removeEventListener("scroll", updateScrollState);
  }, [updateScrollState, messages, isOpen]);

  const scrollBy = useCallback((direction: "up" | "down") => {
    const el = messagesContainerRef.current;
    if (!el) return;
    el.scrollBy({ top: direction === "up" ? -160 : 160, behavior: "smooth" });
  }, []);

  // Auto-grow textarea
  useEffect(() => {
    const textarea = textareaRef.current;
    if (!textarea) return;
    textarea.style.height = "auto";
    textarea.style.height = Math.min(textarea.scrollHeight, 120) + "px";
  }, [input]);

  const sendMessage = useCallback(
    async (text: string) => {
      if (!text.trim() || isLoading || isAtLimit) return;

      const userMsg: Message = { role: "user", content: text.trim() };
      const newMessages = [...messages, userMsg];
      setMessages(newMessages);
      setInput("");
      setIsLoading(true);

      try {
        const res = await fetch("/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            messages: newMessages.map((m) => ({
              role: m.role,
              content: m.content,
            })),
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to get response");
        }

        const data = await res.json();
        setMessages((prev) => [
          ...prev,
          { role: "assistant", content: data.message },
        ]);
      } catch {
        setMessages((prev) => [
          ...prev,
          {
            role: "assistant",
            content: "Sorry, I encountered an error. Please try again.",
          },
        ]);
      } finally {
        setIsLoading(false);
      }
    },
    [messages, isLoading, isAtLimit]
  );

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      sendMessage(input);
    },
    [input, sendMessage]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input);
      }
    },
    [input, sendMessage]
  );

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full shadow-lg transition-all hover:scale-105",
          isOpen
            ? "bg-surface border border-border"
            : "bg-gradient-to-r from-accent-warm to-accent-core"
        )}
        aria-label={isOpen ? "Close chat" : "Open AI chat"}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-text-primary"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 64 64"
            className="animate-pulse"
          >
            <defs>
              <radialGradient id="agent-glow-btn" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFFBE6" />
                <stop offset="30%" stopColor="#FFD97A" />
                <stop offset="60%" stopColor="#FFB83C" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
              </radialGradient>
            </defs>
            <circle cx="32" cy="32" r="28" fill="url(#agent-glow-btn)" opacity="0.5" />
            <circle cx="32" cy="32" r="16" fill="url(#agent-glow-btn)" opacity="0.7" />
            <circle cx="32" cy="32" r="8" fill="#FFFBE6" />
            <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
          </svg>
        )}
      </button>

      {/* Chat popup */}
      {isOpen && (
        <div className="fixed bottom-24 left-3 right-3 z-50 mx-auto flex h-[500px] max-w-[400px] flex-col overflow-hidden rounded-xl border border-border bg-surface shadow-2xl sm:left-auto sm:right-6 sm:mx-0">
          {/* Header */}
          <div className="flex items-center gap-3 border-b border-border px-4 py-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-void/60 shadow-[0_0_12px_rgba(255,180,60,0.4)]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 64 64"
              >
                <defs>
                  <radialGradient id="agent-glow-hdr" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#FFFBE6" />
                    <stop offset="30%" stopColor="#FFD97A" />
                    <stop offset="60%" stopColor="#FFB83C" stopOpacity="0" />
                    <stop offset="100%" stopColor="#FF8C00" stopOpacity="0" />
                  </radialGradient>
                </defs>
                <circle cx="32" cy="32" r="28" fill="url(#agent-glow-hdr)" opacity="0.4" />
                <circle cx="32" cy="32" r="16" fill="url(#agent-glow-hdr)" opacity="0.6" />
                <circle cx="32" cy="32" r="8" fill="#FFFBE6" />
                <circle cx="32" cy="32" r="5" fill="#FFFFFF" />
              </svg>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text-primary">
                SynaptixLabs AI
              </h3>
              <p className="text-xs text-text-muted">Ask me anything</p>
            </div>
          </div>

          {/* Messages */}
          <div className="relative min-h-0 flex-1 overflow-hidden">
            {/* Scroll up arrow */}
            {canScrollUp && (
              <button
                onClick={() => scrollBy("up")}
                className="absolute top-1 left-1/2 z-10 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 border border-border shadow-sm transition-opacity hover:bg-surface"
                aria-label="Scroll up"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
                  <path d="m18 15-6-6-6 6" />
                </svg>
              </button>
            )}

            {/* Scroll down arrow */}
            {canScrollDown && (
              <button
                onClick={() => scrollBy("down")}
                className="absolute bottom-1 left-1/2 z-10 -translate-x-1/2 flex h-7 w-7 items-center justify-center rounded-full bg-surface/90 border border-border shadow-sm transition-opacity hover:bg-surface"
                aria-label="Scroll down"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </button>
            )}

          <div ref={messagesContainerRef} className="h-full overflow-y-auto px-4 py-3">
            {messages.length === 0 && (
              <div className="flex flex-col gap-3">
                <p className="text-center text-sm text-text-muted">
                  Hi! I&apos;m the SynaptixLabs AI assistant. How can I help?
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  {QUICK_ACTIONS.map((q) => (
                    <button
                      key={q}
                      onClick={() => sendMessage(q)}
                      className="rounded-lg border border-border bg-void px-3 py-1.5 text-xs text-text-secondary transition-colors hover:border-accent-warm hover:text-text-primary"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {messages.map((msg, i) => (
              <div
                key={i}
                className={cn(
                  "mb-3 max-w-[85%] rounded-lg px-3 py-2 text-sm",
                  msg.role === "user"
                    ? "ml-auto bg-accent-warm/10 text-text-primary"
                    : "mr-auto bg-void text-text-secondary"
                )}
              >
                <p className="whitespace-pre-wrap">{msg.content}</p>
              </div>
            ))}

            {isLoading && (
              <div className="mr-auto mb-3 flex max-w-[85%] gap-1 rounded-lg bg-void px-4 py-3">
                <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted [animation-delay:-0.3s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted [animation-delay:-0.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-text-muted" />
              </div>
            )}

            {isAtLimit && (
              <div className="mb-3 rounded-lg border border-border bg-void p-3 text-center text-sm text-text-secondary">
                You&apos;ve reached the question limit.{" "}
                <button
                  onClick={() => {
                    setIsOpen(false);
                    openContact();
                  }}
                  className="text-accent-warm underline hover:text-accent-core"
                >
                  Contact us
                </button>{" "}
                for more!
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>
          </div>

          {/* Input */}
          <form
            onSubmit={handleSubmit}
            className="flex items-end gap-2 border-t border-border p-3"
          >
            <textarea
              ref={textareaRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder={isAtLimit ? "Limit reached" : "Ask a question…"}
              disabled={isLoading || isAtLimit}
              rows={1}
              className="flex-1 resize-none rounded-lg border border-border bg-void px-3 py-2 text-sm text-text-primary placeholder:text-text-muted focus:border-accent-warm focus:outline-none focus:ring-1 focus:ring-accent-warm disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim() || isAtLimit}
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent-warm text-void transition-opacity hover:opacity-90 disabled:opacity-30"
              aria-label="Send message"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m22 2-7 20-4-9-9-4Z" />
                <path d="M22 2 11 13" />
              </svg>
            </button>
          </form>
        </div>
      )}
    </>
  );
}
