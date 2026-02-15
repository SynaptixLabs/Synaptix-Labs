"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useContactModal } from "@/components/providers/ContactProvider";

const NAV_LINKS = [
  { label: "Products", href: "#products" },
  { label: "Advisory", href: "#advisory" },
  { label: "About", href: "#about" },
  {
    label: "Blog",
    href: "https://papyrus.synaptixlabs.ai/articles",
    external: true,
  },
] as const;

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { openContact } = useContactModal();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    const handler = () => {
      if (window.innerWidth >= 1024) setMobileOpen(false);
    };
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);

  const handleNavClick = useCallback(() => {
    setMobileOpen(false);
  }, []);

  return (
    <nav
      data-testid="nav"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 px-4 md:px-8 transition-all duration-400",
        scrolled || mobileOpen
          ? "bg-void/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between h-16">
        {/* Logo wordmark */}
        <Link href="/" className="flex items-center no-underline">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo/wordmark/svg/wordmark-color-transparent.svg"
            alt="SynaptixLabs"
            className="h-7 w-auto sm:h-8"
          />
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) =>
            "external" in link && link.external ? (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
                <span className="ml-0.5 text-text-muted">&#8599;</span>
              </a>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-text-secondary hover:text-text-primary transition-colors"
              >
                {link.label}
              </a>
            )
          )}

          <button
            onClick={openContact}
            className="inline-flex items-center justify-center rounded-lg font-mono font-semibold text-xs h-8 px-3 bg-gradient-to-r from-accent-warm to-accent-core text-void hover:opacity-90 transition-all cursor-pointer"
          >
            Get in Touch
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={cn(
            "flex lg:hidden w-10 h-10 items-center justify-center rounded-lg border-none cursor-pointer",
            mobileOpen
              ? "bg-accent-warm/10 text-text-primary"
              : "bg-transparent text-text-primary"
          )}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          >
            {mobileOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </>
            ) : (
              <>
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </>
            )}
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileOpen && (
        <div className="lg:hidden border-t border-border pb-5 pt-2">
          <div className="flex flex-col gap-1">
            {NAV_LINKS.map((link) =>
              "external" in link && link.external ? (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleNavClick}
                  className="text-base text-text-secondary py-3 px-4 rounded-lg transition-colors hover:bg-surface no-underline"
                >
                  {link.label}
                  <span className="ml-1 text-text-muted">&#8599;</span>
                </a>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={handleNavClick}
                  className="text-base text-text-secondary py-3 px-4 rounded-lg transition-colors hover:bg-surface no-underline"
                >
                  {link.label}
                </a>
              )
            )}

            <div className="mt-3 px-4">
              <button
                onClick={() => { handleNavClick(); openContact(); }}
                className="flex w-full items-center justify-center rounded-lg font-mono font-semibold text-sm h-10 px-4 bg-gradient-to-r from-accent-warm to-accent-core text-void hover:opacity-90 transition-all cursor-pointer"
              >
                Get in Touch
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
