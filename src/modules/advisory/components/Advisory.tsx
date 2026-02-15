"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui";

const BOOKING_URL = process.env.NEXT_PUBLIC_BOOKING_URL;

const SERVICES = [
  {
    title: "AI Readiness Assessment",
    description:
      "Evaluate your team's AI maturity, identify quick wins, and build a roadmap from today to production-grade intelligence.",
  },
  {
    title: "Architecture & Strategy",
    description:
      "Design agentic systems, multi-model pipelines, and data architectures that scale — before you write a line of code.",
  },
  {
    title: "Hands-on Workshops",
    description:
      "Intensive sessions with your engineering team on prompt engineering, RAG patterns, evaluation frameworks, and deployment.",
  },
  {
    title: "Fractional AI Leadership",
    description:
      "Embedded AI strategy and technical leadership for teams that need senior guidance without a full-time hire.",
  },
] as const;

export function Advisory() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

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
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="advisory"
      data-testid="advisory"
      ref={sectionRef}
      className="border-t border-border bg-void py-24"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Framing */}
        <p
          className={`animate-fade-up mb-12 text-center text-sm text-text-muted ${visible ? "is-visible" : ""}`}
        >
          We don&apos;t build your product — we teach your team to build with
          intelligence.
        </p>

        {/* 2x2 grid */}
        <div className="grid gap-6 sm:grid-cols-2">
          {SERVICES.map((service, i) => (
            <Card
              key={service.title}
              className={`animate-fade-up p-8 ${visible ? "is-visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <h3 className="mb-2 font-mono text-base font-bold text-text-primary">
                {service.title}
              </h3>
              <p className="text-sm leading-relaxed text-text-secondary">
                {service.description}
              </p>
            </Card>
          ))}
        </div>

        {/* CTA */}
        {BOOKING_URL && (
          <div
            className={`animate-fade-up mt-10 flex justify-center ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: "500ms" }}
          >
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-warm to-accent-core px-6 py-3 font-mono text-sm font-semibold text-void shadow-md transition-all hover:-translate-y-px hover:opacity-90"
            >
              Book a Call &rarr;
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
