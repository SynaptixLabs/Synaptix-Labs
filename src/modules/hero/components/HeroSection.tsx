"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { LifeSim } from "./HeroLifeSim";
import type { MouseState } from "./HeroLifeSim";
import { Badge } from "@/components/ui";
import { useContactModal } from "@/components/providers/ContactProvider";

interface ObstacleRect {
  left: number;
  top: number;
  right: number;
  bottom: number;
}

const PAPYRUS_URL = "https://papyrus.synaptixlabs.ai";

const FOUNDER_AVATAR = "/media/my-avatar.png";

const STATS = [
  { value: "Papyrus", label: "Flagship product" },
  { value: "Agentic", label: "Architecture" },
  { value: "2025", label: "Founded" },
] as const;

export function HeroSection() {
  const { openContact } = useContactModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const mouseRef = useRef<MouseState>({ x: -100, y: -100, clicking: false });
  const obstaclesRef = useRef<ObstacleRect[]>([]);
  const badgeRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const subRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Check reduced motion preference
  const [reducedMotion, setReducedMotion] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const updateObstacles = useCallback(() => {
    const container = containerRef.current;
    if (!container) return;
    const cRect = container.getBoundingClientRect();
    const rects: ObstacleRect[] = [];
    for (const ref of [badgeRef, headlineRef, subRef, ctaRef]) {
      const el = ref.current;
      if (!el) continue;
      const r = el.getBoundingClientRect();
      rects.push({
        left: r.left - cRect.left,
        top: r.top - cRect.top,
        right: r.right - cRect.left,
        bottom: r.bottom - cRect.top,
      });
    }
    obstaclesRef.current = rects;
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const obs = new ResizeObserver((entries) => {
      const { width, height } = entries[0].contentRect;
      setDims({ w: Math.floor(width), h: Math.floor(height) });
      requestAnimationFrame(updateObstacles);
    });
    obs.observe(el);
    const iv = setInterval(updateObstacles, 500);
    return () => {
      obs.disconnect();
      clearInterval(iv);
    };
  }, [updateObstacles]);

  const onMove = useCallback((e: React.MouseEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (r) {
      mouseRef.current.x = e.clientX - r.left;
      mouseRef.current.y = e.clientY - r.top;
    }
  }, []);
  const onDown = useCallback(() => {
    mouseRef.current.clicking = true;
  }, []);
  const onUp = useCallback(() => {
    mouseRef.current.clicking = false;
  }, []);
  const onLeave = useCallback(() => {
    mouseRef.current.clicking = false;
    mouseRef.current.x = -100;
  }, []);
  const onTouchStart = useCallback((e: React.TouchEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseRef.current.x = e.touches[0].clientX - r.left;
    mouseRef.current.y = e.touches[0].clientY - r.top;
    mouseRef.current.clicking = true;
  }, []);
  const onTouchMove = useCallback((e: React.TouchEvent) => {
    const r = containerRef.current?.getBoundingClientRect();
    if (!r) return;
    mouseRef.current.x = e.touches[0].clientX - r.left;
    mouseRef.current.y = e.touches[0].clientY - r.top;
  }, []);
  const onTouchEnd = useCallback(() => {
    mouseRef.current.clicking = false;
  }, []);

  return (
    <section
      id="hero"
      data-testid="hero"
      aria-label="Hero — hold to bloom nectar"
    >
      {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
      <div
        ref={containerRef}
        className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden select-none bg-void"
        onMouseMove={onMove}
        onMouseDown={onDown}
        onMouseUp={onUp}
        onMouseLeave={onLeave}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
      {/* Canvas layer */}
      <div className="absolute inset-0" aria-hidden="true">
        {dims.w > 0 && dims.h > 0 && !reducedMotion && (
          <LifeSim
            width={dims.w}
            height={dims.h}
            mouseRef={mouseRef}
            obstaclesRef={obstaclesRef}
          />
        )}
      </div>

      {/* Vignette overlay */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 20%, rgba(9,9,11,0.5) 65%, rgb(9,9,11) 100%)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex max-w-4xl flex-col items-center px-6 text-center">
        {/* Badge */}
        <div ref={badgeRef} className="mb-8 flex w-full items-center justify-center">
          <Badge variant="default">
            &#9670; AI-NATIVE PRODUCTS &amp; ADVISORY
          </Badge>
        </div>

        {/* Headline */}
        <div ref={headlineRef} className="mb-6 w-full">
          <h1 className="font-mono text-4xl font-extrabold leading-none tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            We create products{" "}
            <span className="text-gradient">that think &amp; evolve.</span>
          </h1>
        </div>

        {/* Subtitle */}
        <div ref={subRef} className="mb-10 w-full">
          <p className="mx-auto max-w-lg text-base leading-relaxed text-text-secondary sm:text-lg">
            Intelligence that lives, learns, and creates.
            <br />
            <span className="text-sm text-text-muted">
              Each light is born, seeks, mates, and fades — just like our
              agents.
            </span>
          </p>
        </div>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-wrap justify-center gap-4">
          <a
            href={PAPYRUS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-lg bg-gradient-to-r from-accent-warm to-accent-core px-6 py-3 font-mono text-sm font-semibold text-void shadow-md transition-all hover:-translate-y-px hover:opacity-90"
          >
            See Papyrus &rarr;
          </a>
          <button
            onClick={openContact}
            className="inline-flex items-center justify-center rounded-lg border border-border-active bg-transparent px-6 py-3 text-sm font-medium text-text-secondary transition-all hover:border-accent-warm hover:text-text-primary cursor-pointer"
          >
            Talk to Us
          </button>
        </div>

        {/* Hint */}
        <p className="mt-8 text-xs text-text-muted">
          Hold to bloom nectar and draw them near
        </p>
      </div>

      {/* Stats bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-void to-transparent px-4 py-6 sm:py-8">
        <div className="mx-auto flex max-w-4xl flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-12 md:gap-x-20">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-gradient font-mono text-base font-bold sm:text-xl">
                {s.value}
              </div>
              <div className="mt-1 text-[10px] text-text-muted sm:text-xs">{s.label}</div>
            </div>
          ))}

          {/* Founder */}
          <div className="flex items-center gap-2.5">
            <Image
              src={FOUNDER_AVATAR}
              alt="Avidor Rabinovich"
              width={36}
              height={36}
              className="rounded-full ring-1 ring-border"
            />
            <div className="text-left">
              <div className="text-gradient font-mono text-sm font-bold sm:text-base">
                Avidor Rabinovich
              </div>
              <div className="text-[10px] text-text-muted sm:text-xs">Founder</div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
