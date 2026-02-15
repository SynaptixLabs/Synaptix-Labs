import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import { ContactProvider } from "@/components/providers/ContactProvider";
import { ContactModal } from "@/components/contact/ContactModal";
import { SynaptixChat } from "@/components/ai/SynaptixChat";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { AccessibilityMenu } from "@/components/ui/AccessibilityMenu";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const SITE_URL = "https://synaptixlabs.ai";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "SynaptixLabs — AI-Native Products & Advisory",
  description:
    "We create products that think & evolve. AI-native products and transformation advisory from SynaptixLabs.",
  keywords: [
    "AI agents",
    "agentic AI",
    "AI products",
    "AI advisory",
    "AI consulting",
    "memory systems",
    "SynaptixLabs",
    "Papyrus",
  ],
  authors: [{ name: "SynaptixLabs" }],
  creator: "SynaptixLabs",
  openGraph: {
    title: "SynaptixLabs — AI-Native Products & Advisory",
    description:
      "We create products that think & evolve. Intelligence that lives, learns, and creates.",
    url: SITE_URL,
    siteName: "SynaptixLabs",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "SynaptixLabs — AI-Native Products & Advisory",
    description:
      "We create products that think & evolve. Intelligence that lives, learns, and creates.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: SITE_URL,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: "SynaptixLabs",
      url: SITE_URL,
      description:
        "AI-native products and transformation advisory. We create products that think & evolve.",
      foundingDate: "2026",
      sameAs: [
        "https://github.com/Synaptix-Labs",
        "https://linkedin.com/company/synaptixlabs",
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "Papyrus",
      url: "https://papyrus.synaptixlabs.ai",
      applicationCategory: "BusinessApplication",
      description:
        "Agentic AI content platform that researches, writes, and refines autonomously.",
      operatingSystem: "Web",
      offers: {
        "@type": "Offer",
        availability: "https://schema.org/InStock",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ContactProvider>
          {children}
          <ContactModal />
          <SynaptixChat />
          <AccessibilityMenu />
          <ScrollToTop />
        </ContactProvider>
      </body>
    </html>
  );
}
