"use client";

import { useEffect, useRef, useState } from "react";
import { useContactModal } from "@/components/providers/ContactProvider";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

export function CTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const { openContact } = useContactModal();

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta"
      data-testid="cta"
      ref={sectionRef}
      className="border-t border-border bg-void py-24"
    >
      <div
        className={`animate-fade-up mx-auto max-w-2xl px-6 text-center ${visible ? "is-visible" : ""}`}
      >
        <h2 className="mb-6 font-mono text-3xl font-bold text-text-primary sm:text-4xl">
          Ready to build something
          <br />
          <span className="text-gradient">that thinks?</span>
        </h2>
        <p className="mb-8 text-base text-text-secondary">
          Whether you&apos;re exploring AI for the first time or scaling
          agentic systems — let&apos;s talk.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={openContact}
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-warm to-accent-core px-6 py-3 font-mono text-sm font-semibold text-void shadow-md transition-all hover:-translate-y-px hover:opacity-90 cursor-pointer"
          >
            Get in Touch
          </button>
          {BOOKING_URL && (
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-border-active bg-transparent px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-accent-warm hover:text-text-primary"
            >
              Book a Call
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
