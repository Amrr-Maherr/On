# Motion Commerce Performance Design System (MCPDS)

> **SINGLE SOURCE OF TRUTH** — The ONLY design system for this project.
> Adidas/Nike-inspired · Bold performance commerce · High-contrast UI · Conversion-focused

---

## 1. Design Philosophy

### MCPDS Vision
A bold, energetic, and conversion-driven eCommerce experience inspired by Adidas and Nike's commercial design language. The UI commands attention through strong typography, high contrast, structured grids, and impactful visual storytelling. Every pixel is engineered for performance — both in aesthetics and conversion.

### Core Values
- **Bold typography** — Type is the primary visual weapon. Large, heavy weights, tight tracking.
- **High contrast** — Light/dark extremes. No muddy mid-tones. Black and white dominance.
- **Structured grids** — Clean, muscular layouts. No floating ambiguity.
- **Conversion-focused** — Every section drives action. CTAs are prominent and plentiful.
- **Energetic commercial feel** — Campaign-driven, sport/lifestyle aesthetic.
- **Sharp and modern** — Clean edges, intentional whitespace, no decorative fluff.

---

## 2. Global Design Tokens (index.css)

All tokens are defined as CSS variables in `src/index.css`. **Hardcoded colors are strictly prohibited.**

### Light Mode (Default)
| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.985 0.003 85)` | Page background |
| `--foreground` | `oklch(0.12 0.008 85)` | Primary text (near-black) |
| `--primary` | `oklch(0.12 0.008 85)` | Main brand color (near-black) |
| `--muted` | `oklch(0.955 0.004 85)` | Muted background sections |
| `--accent` | `oklch(0.94 0.005 85)` | Subtle UI accents |
| `--border` | `oklch(0.92 0.004 85)` | Dividers and borders |

### Dark Mode
| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.13 0.004 85)` | Deep athletic background |
| `--card` | `oklch(0.16 0.004 85)` | Surface for cards and panels |
| `--foreground` | `oklch(0.96 0.003 85)` | Primary text (off-white) |
| `--border` | `oklch(1 0 0 / 6%)` | Subtle borders for dark surfaces |

---

## 3. Typography System

- **Headings**: `"Oswald Variable"`. Bold, condensed, uppercase for high-impact commercial feel.
- **Body**: `"Inter"`. Clean, readable, and professional.

| Element | Style |
|---------|-------|
| `h1` (Campaign) | `text-6xl md:text-9xl font-black uppercase leading-none tracking-tight` |
| `h2` (Section) | `text-4xl md:text-6xl font-black uppercase tracking-tight` |
| `h3` (Card) | `text-xl md:text-2xl font-bold tracking-tight` |
| `CTA` | `text-sm font-bold uppercase tracking-widest` |

---

## 4. Layout & Grid System

### Grid Principles
- **Product Grids**: 4 columns on desktop (`lg:grid-cols-4`), 2 columns on tablet (`sm:grid-cols-2`), 1 column on mobile.
- **Editorial Layouts**: 2-column split for brand storytelling and campaign highlights.
- **Container**: `max-w-1440px` with responsive padding (`px-6` mobile, `px-16` desktop).

### Section Strategy
- **Alternating Backgrounds**: Use `bg-background` and `bg-muted/30` to create visual rhythm.
- **Campaign Sections**: Fixed `bg-neutral-950` with `text-white` for maximum impact in both modes.

---

## 5. Component System

### Product Cards (Critical)
- **Visuals**: Large, high-quality images with minimal padding.
- **Hover**: Subtle scale effect (`hover:scale-[1.02]`) and instant CTA overlay.
- **Typography**: Price must be bold and highly visible.

### Cart UI (Critical)
- **Layout**: Clean list items with high-contrast quantity controls.
- **Summary**: Sticky summary panel with a primary "CHECKOUT" CTA.

### Buttons
- **Primary**: Rounded-full, high contrast (`bg-foreground text-background`).
- **Campaign**: Rounded-full, white on dark backgrounds (`bg-white text-neutral-950`).
- **Ghost**: Minimalist icons or text-only links for secondary actions.

---

## 6. Motion & Animation

- **Timing**: Fast transitions (`duration-300` or `duration-500`).
- **Easing**: Sharp, energetic cubic-bezier `[0.25, 0.1, 0.25, 1]`.
- **Interaction**: Scale and opacity feedback on all clickable elements.

---

## 7. CDN Image Policy

Only high-quality commercial assets from reliable CDNs are allowed.
- **Hero/Campaign**: Unsplash / Pexels (Sports/Lifestyle).
- **Product Placeholders**: High-resolution studio shots only.

---

## 8. ShadCN Usage Rules

- ShadCN components are tools for structure, not design.
- **Customization**: Every ShadCN component must be styled using MCPDS tokens.
- **Accessibility**: Preserve all Radix/Base UI accessibility features.
