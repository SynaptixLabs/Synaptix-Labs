"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

const FONT_SIZES = [
  { label: "A-", value: 0.85 },
  { label: "A", value: 1 },
  { label: "A+", value: 1.15 },
  { label: "A++", value: 1.3 },
] as const;

export function AccessibilityMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const [highContrast, setHighContrast] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Load saved preferences
  useEffect(() => {
    try {
      const saved = localStorage.getItem("sl-a11y");
      if (saved) {
        const prefs = JSON.parse(saved);
        if (prefs.fontScale) setFontScale(prefs.fontScale);
        if (prefs.highContrast) setHighContrast(prefs.highContrast);
        if (prefs.reducedMotion) setReducedMotion(prefs.reducedMotion);
      }
    } catch {
      // Ignore parse errors
    }
  }, []);

  // Apply font scale
  useEffect(() => {
    document.documentElement.style.fontSize = `${fontScale * 100}%`;
  }, [fontScale]);

  // Apply high contrast
  useEffect(() => {
    document.documentElement.classList.toggle("high-contrast", highContrast);
  }, [highContrast]);

  // Apply reduced motion
  useEffect(() => {
    document.documentElement.classList.toggle("reduce-motion", reducedMotion);
  }, [reducedMotion]);

  // Persist preferences
  useEffect(() => {
    try {
      localStorage.setItem(
        "sl-a11y",
        JSON.stringify({ fontScale, highContrast, reducedMotion })
      );
    } catch {
      // Ignore storage errors
    }
  }, [fontScale, highContrast, reducedMotion]);

  // Close on click outside
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen]);

  const resetAll = useCallback(() => {
    setFontScale(1);
    setHighContrast(false);
    setReducedMotion(false);
  }, []);

  return (
    <div ref={panelRef} className="fixed bottom-20 left-6 z-40">
      {/* Toggle button */}
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className={cn(
          "flex h-10 w-10 items-center justify-center rounded-full border shadow-lg transition-all",
          isOpen
            ? "bg-accent-warm border-accent-warm text-void"
            : "bg-surface/90 border-border backdrop-blur-sm text-text-secondary hover:bg-surface hover:border-border-active"
        )}
        aria-label={isOpen ? "Close accessibility menu" : "Open accessibility menu"}
        aria-expanded={isOpen}
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
        >
          <circle cx="12" cy="4.5" r="2.5" />
          <path d="m4.5 9.5 3 1 4.5 1 4.5-1 3-1" />
          <path d="M8 14.5 7 22" />
          <path d="m16 14.5 1 7.5" />
          <path d="M12 12.5v2" />
        </svg>
      </button>

      {/* Panel */}
      {isOpen && (
        <div className="absolute bottom-14 left-0 w-64 rounded-xl border border-border bg-surface p-4 shadow-2xl">
          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold text-text-primary">
              Accessibility
            </h3>
            <button
              onClick={resetAll}
              className="text-xs text-text-muted hover:text-accent-warm transition-colors"
            >
              Reset
            </button>
          </div>

          {/* Font Size */}
          <div className="mb-4" role="group" aria-label="Font Size">
            <span className="mb-2 block text-xs text-text-muted">
              Font Size
            </span>
            <div className="flex gap-1">
              {FONT_SIZES.map((size) => (
                <button
                  key={size.value}
                  onClick={() => setFontScale(size.value)}
                  className={cn(
                    "flex-1 rounded-lg py-1.5 text-xs font-medium transition-colors",
                    fontScale === size.value
                      ? "bg-accent-warm/20 text-accent-warm border border-accent-warm/40"
                      : "bg-void border border-border text-text-secondary hover:border-border-active"
                  )}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>

          {/* High Contrast */}
          <div className="mb-3 flex items-center justify-between">
            <span id="a11y-contrast-label" className="text-xs text-text-muted">High Contrast</span>
            <button
              role="switch"
              aria-checked={highContrast}
              aria-labelledby="a11y-contrast-label"
              onClick={() => setHighContrast((prev) => !prev)}
              className={cn(
                "relative h-5 w-9 rounded-full transition-colors",
                highContrast ? "bg-accent-warm" : "bg-void border border-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm",
                  highContrast && "translate-x-4"
                )}
              />
            </button>
          </div>

          {/* Reduced Motion */}
          <div className="flex items-center justify-between">
            <span id="a11y-motion-label" className="text-xs text-text-muted">Reduced Motion</span>
            <button
              role="switch"
              aria-checked={reducedMotion}
              aria-labelledby="a11y-motion-label"
              onClick={() => setReducedMotion((prev) => !prev)}
              className={cn(
                "relative h-5 w-9 rounded-full transition-colors",
                reducedMotion ? "bg-accent-warm" : "bg-void border border-border"
              )}
            >
              <span
                className={cn(
                  "absolute top-0.5 left-0.5 h-4 w-4 rounded-full bg-white transition-transform shadow-sm",
                  reducedMotion && "translate-x-4"
                )}
              />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
