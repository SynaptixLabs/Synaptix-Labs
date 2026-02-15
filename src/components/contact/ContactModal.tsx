"use client";

import { useState, useCallback, type FormEvent } from "react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { useContactModal } from "@/components/providers/ContactProvider";
import { Turnstile } from "./Turnstile";

const OCCUPATIONS = [
  "Startup Founder",
  "CTO",
  "CEO",
  "VP Engineering",
  "Product Manager",
  "Developer",
  "Other",
] as const;

const COMPANY_SIZES = [
  "1-10",
  "11-50",
  "51-200",
  "201-500",
  "500+",
] as const;

interface FormState {
  name: string;
  email: string;
  phone: string;
  companyName: string;
  occupation: string;
  companySize: string;
  message: string;
}

const INITIAL_STATE: FormState = {
  name: "",
  email: "",
  phone: "",
  companyName: "",
  occupation: "",
  companySize: "",
  message: "",
};

export function ContactModal() {
  const { isOpen, closeContact } = useContactModal();
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [turnstileToken, setTurnstileToken] = useState<string>("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
      setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    },
    []
  );

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      e.preventDefault();
      setStatus("submitting");
      setErrorMsg("");

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ...form, turnstileToken }),
        });

        if (!res.ok) {
          const data = await res.json().catch(() => ({}));
          throw new Error(data.error || "Something went wrong. Please try again.");
        }

        setStatus("success");
        setForm(INITIAL_STATE);
        setTimeout(() => {
          closeContact();
          setStatus("idle");
        }, 3000);
      } catch (err) {
        setStatus("error");
        setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
      }
    },
    [form, turnstileToken, closeContact]
  );

  const handleOpenChange = useCallback(
    (open: boolean) => {
      if (!open) {
        closeContact();
        if (status !== "submitting") {
          setStatus("idle");
          setErrorMsg("");
        }
      }
    },
    [closeContact, status]
  );

  const inputCls =
    "w-full rounded-lg border border-border bg-void px-3 py-2 text-sm text-text-primary placeholder:text-text-muted transition-colors focus:border-accent-warm focus:outline-none focus:ring-1 focus:ring-accent-warm";
  const selectCls =
    "w-full rounded-lg border border-border bg-void px-3 py-2 text-sm text-text-primary transition-colors focus:border-accent-warm focus:outline-none focus:ring-1 focus:ring-accent-warm appearance-none";
  const labelCls = "mb-1.5 block text-xs font-medium text-text-secondary";

  return (
    <Modal open={isOpen} onOpenChange={handleOpenChange} maxWidth="md" title="Get in Touch">
      {status === "success" ? (
        <div className="flex flex-col items-center gap-4 py-8 text-center">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-warm/10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-accent-warm"
            >
              <path d="M20 6 9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-text-primary">
            Thank you!
          </h3>
          <p className="text-sm text-text-secondary">
            We&apos;ll be in touch shortly.
          </p>
        </div>
      ) : (
        <>
          <h2 className="mb-1 pr-8 text-lg font-semibold text-text-primary">
            Get in Touch
          </h2>
          <p className="mb-5 text-sm text-text-secondary">
            Tell us about yourself and we&apos;ll reach out.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name + Email row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-name" className={labelCls}>
                  Name <span className="text-accent-warm">*</span>
                </label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="contact-email" className={labelCls}>
                  Email <span className="text-accent-warm">*</span>
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={handleChange}
                  placeholder="you@company.com"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Phone + Company row */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-phone" className={labelCls}>
                  Phone <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+1 (555) 000-0000"
                  className={inputCls}
                />
              </div>
              <div>
                <label htmlFor="contact-company" className={labelCls}>
                  Company <span className="text-text-muted">(optional)</span>
                </label>
                <input
                  id="contact-company"
                  name="companyName"
                  type="text"
                  value={form.companyName}
                  onChange={handleChange}
                  placeholder="Company name"
                  className={inputCls}
                />
              </div>
            </div>

            {/* Occupation + Company Size */}
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="contact-occupation" className={labelCls}>
                  Occupation <span className="text-accent-warm">*</span>
                </label>
                <select
                  id="contact-occupation"
                  name="occupation"
                  required
                  value={form.occupation}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="" disabled>
                    Select role
                  </option>
                  {OCCUPATIONS.map((o) => (
                    <option key={o} value={o}>
                      {o}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor="contact-size" className={labelCls}>
                  Company Size <span className="text-accent-warm">*</span>
                </label>
                <select
                  id="contact-size"
                  name="companySize"
                  required
                  value={form.companySize}
                  onChange={handleChange}
                  className={selectCls}
                >
                  <option value="" disabled>
                    Select size
                  </option>
                  {COMPANY_SIZES.map((s) => (
                    <option key={s} value={s}>
                      {s} employees
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="contact-message" className={labelCls}>
                Message <span className="text-text-muted">(optional)</span>
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={3}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us what you're working on…"
                className={inputCls + " resize-none"}
              />
            </div>

            {/* Turnstile */}
            <Turnstile onVerify={setTurnstileToken} />

            {/* Error */}
            {status === "error" && errorMsg && (
              <p className="text-sm text-red-400">{errorMsg}</p>
            )}

            {/* Submit */}
            <Button
              type="submit"
              variant="primary"
              size="md"
              className="w-full"
              isLoading={status === "submitting"}
              disabled={status === "submitting"}
            >
              {status === "submitting" ? "Sending…" : "Send Message"}
            </Button>
          </form>
        </>
      )}
    </Modal>
  );
}
