"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const PAPYRUS_URL = "https://papyrus.synaptixlabs.ai";
const FOUNDER_AVATAR = "/media/my-avatar.png";

export function About() {
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
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      data-testid="about"
      ref={sectionRef}
      className="border-t border-border bg-surface py-24"
    >
      <div
        className={`animate-fade-up mx-auto max-w-2xl px-6 text-center ${visible ? "is-visible" : ""}`}
      >
        <h2 className="mb-6 font-mono text-2xl font-bold text-text-primary">
          About SynaptixLabs
        </h2>
        <div className="space-y-4 text-base leading-relaxed text-text-secondary">
          <div className="mb-6 flex items-center justify-center gap-3">
            <Image
              src={FOUNDER_AVATAR}
              alt="Avidor Rabinovich"
              width={48}
              height={48}
              className="rounded-full ring-2 ring-border"
            />
            <div className="text-left">
              <div className="font-mono text-sm font-semibold text-text-primary">
                Avidor Rabinovich
              </div>
              <div className="text-xs text-text-muted">Founder</div>
            </div>
          </div>
          <p>
            SynaptixLabs was founded in 2025 by Avidor Rabinovich with a simple
            belief: software should think, adapt, and evolve. We build AI-native
            products and advise teams on bringing intelligence into everything
            they ship.
          </p>
          <p>
            Our flagship product,{" "}
            <a
              href={PAPYRUS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent-warm underline underline-offset-4 transition-colors hover:text-accent-core"
            >
              Papyrus
            </a>
            , is a living example of what agentic AI can do — research,
            write, and refine content autonomously. Everything we learn
            building it feeds back into our advisory practice.
          </p>
          <p>
            We share our research and frameworks openly because intelligence
            compounds when it&apos;s shared. If you&apos;re building something
            that thinks, we&apos;d love to talk.
          </p>
        </div>
      </div>
    </section>
  );
}
