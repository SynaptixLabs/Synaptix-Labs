"use client";

import { useContactModal } from "@/components/providers/ContactProvider";

const PAPYRUS_URL = "https://papyrus.synaptixlabs.ai";
const CONTACT_EMAIL = "hello@synaptixlabs.ai";

const COLUMNS = [
  {
    heading: "Products",
    links: [
      { label: "Papyrus", href: PAPYRUS_URL, external: true },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", href: "#about" },
      { label: "Blog", href: `${PAPYRUS_URL}/articles`, external: true },
      { label: "Research", href: `${PAPYRUS_URL}/articles`, external: true },
    ],
  },
  {
    heading: "Connect",
    links: [
      { label: "Contact Us", href: "#contact", action: "contact" as const },
      { label: CONTACT_EMAIL, href: `mailto:${CONTACT_EMAIL}` },
      { label: "LinkedIn", href: "https://linkedin.com/company/synaptixlabs", external: true },
      { label: "GitHub", href: "https://github.com/Synaptix-Labs", external: true },
    ],
  },
] as const;

export function Footer() {
  const { openContact } = useContactModal();

  return (
    <footer
      data-testid="footer"
      className="border-t border-border bg-void py-12"
    >
      <div className="mx-auto max-w-6xl px-6">
        {/* Link grid */}
        <div className="grid gap-8 sm:grid-cols-3">
          {COLUMNS.map((col) => (
            <div key={col.heading}>
              <h4 className="mb-3 font-mono text-xs font-semibold uppercase tracking-wider text-text-muted">
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"action" in link && link.action === "contact" ? (
                      <button
                        onClick={openContact}
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ) : (
                      <a
                        href={link.href}
                        {...("external" in link && link.external
                          ? {
                              target: "_blank",
                              rel: "noopener noreferrer",
                            }
                          : {})}
                        className="text-sm text-text-secondary transition-colors hover:text-text-primary"
                      >
                        {link.label}
                        {"external" in link && link.external && (
                          <span className="ml-0.5 text-text-muted">
                            &#8599;
                          </span>
                        )}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="mt-10 border-t border-border pt-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-xs text-text-muted">
              &copy; 2025 SynaptixLabs &middot; Built with &#9824; by
              SynaptixLabs
            </p>
            <div className="flex gap-4">
              <a
                href="/privacy"
                className="text-xs text-text-muted transition-colors hover:text-text-secondary"
              >
                Privacy
              </a>
              <a
                href="/terms"
                className="text-xs text-text-muted transition-colors hover:text-text-secondary"
              >
                Terms
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
