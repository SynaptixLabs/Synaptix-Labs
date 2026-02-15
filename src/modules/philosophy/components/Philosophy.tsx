"use client";

import { useEffect, useRef, useState } from "react";
import { Card } from "@/components/ui";

const PILLARS = [
  {
    title: "We Build",
    description:
      "Products that think autonomously. From agentic architectures to adaptive interfaces — software that evolves with its users.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-warm"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5z" />
        <path d="M2 17l10 5 10-5" />
        <path d="M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    title: "We Advise",
    description:
      "Strategic AI guidance for teams building with intelligence. Readiness assessments, architecture reviews, and hands-on workshops.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-warm"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
  },
  {
    title: "We Open Source",
    description:
      "Knowledge should compound. Our research, frameworks, and learnings are shared openly to accelerate the ecosystem.",
    icon: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-accent-warm"
      >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
      </svg>
    ),
  },
] as const;

export function Philosophy() {
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
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="philosophy"
      data-testid="philosophy"
      ref={sectionRef}
      className="border-t border-border bg-void py-24"
    >
      <div className="mx-auto grid max-w-6xl gap-8 px-6 md:grid-cols-3">
        {PILLARS.map((pillar, i) => (
          <Card
            key={pillar.title}
            className={`animate-fade-up p-8 ${visible ? "is-visible" : ""}`}
            style={{ transitionDelay: `${i * 100}ms` }}
          >
            <div className="mb-4">{pillar.icon}</div>
            <h3 className="mb-2 font-mono text-lg font-bold text-text-primary">
              {pillar.title}
            </h3>
            <p className="text-sm leading-relaxed text-text-secondary">
              {pillar.description}
            </p>
          </Card>
        ))}
      </div>
    </section>
  );
}
