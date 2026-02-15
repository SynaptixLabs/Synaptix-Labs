"use client";

import { useState, useEffect, useCallback } from "react";
import { cn } from "@/lib/utils";

export function ScrollToTop() {
  const [showUp, setShowUp] = useState(false);
  const [showDown, setShowDown] = useState(false);

  useEffect(() => {
    const handler = () => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const viewHeight = window.innerHeight;
      const threshold = 400;

      setShowUp(scrollY > threshold);
      setShowDown(scrollY + viewHeight < docHeight - threshold);
    };
    window.addEventListener("scroll", handler, { passive: true });
    window.addEventListener("resize", handler, { passive: true });
    handler();
    return () => {
      window.removeEventListener("scroll", handler);
      window.removeEventListener("resize", handler);
    };
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const scrollToBottom = useCallback(() => {
    window.scrollTo({ top: document.documentElement.scrollHeight, behavior: "smooth" });
  }, []);

  return (
    <div className="fixed bottom-34 left-6 z-40 flex flex-col gap-2">
      {/* Scroll to top */}
      <button
        onClick={scrollToTop}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/90 shadow-lg backdrop-blur-sm transition-all hover:bg-surface hover:border-border-active",
          showUp
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-4 pointer-events-none"
        )}
        aria-label="Scroll to top"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-secondary"
        >
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>

      {/* Scroll to bottom */}
      <button
        onClick={scrollToBottom}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/90 shadow-lg backdrop-blur-sm transition-all hover:bg-surface hover:border-border-active",
          showDown
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        )}
        aria-label="Scroll to bottom"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-secondary"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  );
}
