/**
 * SynaptixLabs Design Tokens
 *
 * Single source of truth for all design values.
 * Use in JS/Canvas contexts. For Tailwind classes, use the
 * corresponding utilities configured via @theme in globals.css.
 */

export const tokens = {
  colors: {
    void: "#09090B",
    surface: "#111113",
    surfaceRaised: "#18181B",
    border: "#27272A",
    borderActive: "#3F3F46",
    textPrimary: "#FAFAFA",
    textSecondary: "#A1A1AA",
    textTertiary: "#71717A",
    textMuted: "#52525B",
    accentWarm: "#F97316",
    accentCore: "#FB923C",
    accentCool: "#38BDF8",
    success: "#22C55E",
    warning: "#EAB308",
    error: "#EF4444",
  },
  fonts: {
    mono: "'JetBrains Mono', 'Fira Code', monospace",
    sans: "'Inter', system-ui, sans-serif",
  },
  gradient: {
    brand: "linear-gradient(135deg, #F97316, #FB923C, #38BDF8)",
    brandCSS: "from-accent-warm via-accent-core to-accent-cool",
  },
} as const;

export type Tokens = typeof tokens;
export type TokenColors = typeof tokens.colors;
export type TokenColorKey = keyof TokenColors;
