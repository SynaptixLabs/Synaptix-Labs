# SynaptixLabs Brand Kit

## The Mark: Neural Arc

Two luminous nodes — warm (orange, `#F97316`) and cool (sky blue, `#38BDF8`) — connected by a flowing S-curved neural pathway. The warm node anchors bottom-left, the cool node top-right. An energy pulse glows at the center crossing point. A faint echo arc suggests depth and continuous signal.

**Font:** JetBrains Mono (700/800 weight)
**Palette:** `#F97316` → `#FB923C` → `#38BDF8`

---

## Contents

### `/logomark/` — Standalone mark (square)
| File | Description |
|------|-------------|
| `color-transparent` | Full gradient on transparent — use over dark photos/videos |
| `color-on-dark` | Full gradient on `#09090B` void |
| `color-on-white` | Deeper saturation gradient on `#FAFAFA` |
| `white-transparent` | White monochrome on transparent |
| `white-on-dark` | White monochrome on dark |
| `black-transparent` | Black monochrome on transparent |
| `black-on-white` | Black monochrome on white |

SVGs in `/svg/`, PNGs at 512, 256, 128, 64px in `/png/`.

### `/wordmark/` — Mark + "SynaptixLabs" lockup
| File | Description |
|------|-------------|
| `color-on-dark` | For dark backgrounds |
| `color-on-white` | For light backgrounds |
| `color-transparent` | Transparent background |
| `mark-only-transparent` | Just the mark, no text, transparent |
| `mark-only-on-dark` | Just the mark, no text, on dark |

SVGs in `/svg/`, PNGs at h112 and h64 in `/png/`.

### `/banner/` — Wide horizontal format
| File | Description |
|------|-------------|
| `dark-with-text` | Mark + "SynaptixLabs" on dark |
| `white-with-text` | Mark + "SynaptixLabs" on white |
| `dark-no-text` | Mark only, centered, on dark |
| `white-no-text` | Mark only, centered, on white |

SVGs in `/svg/`, PNGs in `/png/`.

### `/favicon/` — App icons & browser favicons
| File | Size | Notes |
|------|------|-------|
| `favicon-64.svg/png` | 64px | Full detail, rounded corners |
| `favicon-48.png` | 48px | Full detail |
| `favicon-32.svg/png` | 32px | Simplified (no gradient, solid core) |
| `favicon-16.svg/png` | 16px | Maximum simplification |
| `favicon.ico` | Multi | 16+32+48px combined |

---

## Usage Guidelines

- **Dark backgrounds preferred** — the glow effects shine on dark surfaces
- **Minimum clear space:** 50% of mark width on all sides
- **Don't** rotate, stretch, recolor nodes, or add drop shadows
- **Monochrome versions** exist for single-color contexts (print, embossing, watermarks)
- **Favicon progressive simplification:** gradient drops at 32px, echo drops at 16px
