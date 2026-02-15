"use client";

import { useEffect, useRef, useState } from "react";
import { Card, Badge } from "@/components/ui";

const PAPYRUS_URL = "https://papyrus.synaptixlabs.ai";
const PAPYRUS_PAPER_URL =
  "https://papyrus.synaptixlabs.ai//docs/animation-packs";

const FEATURES = [
  "Agentic AI pipelines that research, write, and refine autonomously",
  "Adaptive content engine with multi-model orchestration",
  "Built for teams shipping knowledge at scale",
] as const;

export function Products() {
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
      id="products"
      data-testid="products"
      ref={sectionRef}
      className="border-t border-border bg-surface py-24"
    >
      <div className="mx-auto max-w-4xl px-6">
        <Card
          className={`animate-fade-up p-10 ${visible ? "is-visible" : ""}`}
        >
          <div className="flex flex-col gap-6">
            {/* Header row */}
            <div className="flex items-center gap-3">
              <h2 className="font-mono text-2xl font-bold text-text-primary">
                Papyrus
              </h2>
              <Badge variant="live">Live</Badge>
            </div>

            {/* Description */}
            <p className="max-w-2xl text-base leading-relaxed text-text-secondary">
              Our flagship agentic content platform. Papyrus transforms how
              teams create, research, and publish — powered by autonomous AI
              pipelines that think before they write.
            </p>

            {/* Feature bullets */}
            <ul className="flex flex-col gap-2">
              {FEATURES.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-text-secondary"
                >
                  <span className="mt-1 text-accent-warm">&#9670;</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 pt-2">
              <a
                href={PAPYRUS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-warm to-accent-core px-5 py-2.5 font-mono text-sm font-semibold text-void shadow-md transition-all hover:-translate-y-px hover:opacity-90"
              >
                Try Papyrus &rarr;
              </a>
              <a
                href={PAPYRUS_PAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-lg border border-border-active bg-transparent px-5 py-2.5 text-sm font-medium text-text-secondary transition-all hover:border-accent-warm hover:text-text-primary"
              >
                Read the Paper &#8599;
              </a>
            </div>
          </div>
        </Card>

        {/* Teaser */}
        <p
          className={`animate-fade-up mt-10 text-center text-sm text-text-muted ${visible ? "is-visible" : ""}`}
          style={{ transitionDelay: "200ms" }}
        >
          More is coming. From software to hardware — intelligence doesn&apos;t
          stop at the screen.
        </p>
      </div>
    </section>
  );
}
