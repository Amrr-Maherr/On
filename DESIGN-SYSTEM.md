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

### What MCPDS is NOT
- ❌ NOT Apple-like minimalism — we don't hide in soft whitespace
- ❌ NOT glassmorphism-heavy — no frosted layers or heavy blur
- ❌ NOT weak contrast — no washed-out pastels or timid grays
- ❌ NOT soft or quiet — this is a performance brand, not a meditation app

### Emotional Target
The interface should make users feel: **energized, confident, driven, and ready to perform** — like walking into an Adidas flagship store or seeing a Nike campaign.

---

## 2. Typography System

### Font Stack
- **Body (Primary)**: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif` — Clean, readable sans-serif for all body text
- **Headings**: `"Oswald Variable", "Inter", system-ui, sans-serif` — Bold, condensed sport font (Adidas-inspired) applied globally to all `h1`–`h4` elements
- **No mixed font systems** — Dual-font strategy: Oswald for display/headings, Inter for body

### Heading Hierarchy (MCPDS Bold)
| Level | Size (Desktop) | Weight | Line Height | Letter Spacing |
|-------|---------------|--------|-------------|----------------|
| `h1` (Campaign) | `text-6xl md:text-8xl lg:text-9xl` | `font-black (900)` | `leading-none` | `tracking-tight` |
| `h2` (Section) | `text-4xl md:text-5xl` | `font-black (900)` | `leading-none` | `tracking-tight` |
| `h3` (Card) | `text-2xl md:text-3xl` | `font-bold (700)` | `leading-tight` | `tracking-normal` |
| `h4` | `text-xl md:text-2xl` | `font-bold (700)` | `leading-tight` | `tracking-normal` |
| `h5` | `text-lg md:text-xl` | `font-semibold (600)` | `leading-snug` | — |
| `h6` | `text-base md:text-lg` | `font-semibold (600)` | `leading-snug` | — |

### Body Text
| Usage | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Body large | `text-lg` | `font-normal (400)` | `leading-relaxed` |
| Body default | `text-base` | `font-normal (400)` | `leading-relaxed` |
| Body small | `text-sm` | `font-normal (400)` | `leading-normal` |
| Caption | `text-xs` | `font-medium (500)` | `leading-normal` |
| Meta/Label | `text-xs` | `font-semibold (600)` | `uppercase tracking-[0.2em]` |

### Editorial / Campaign Text
- **Campaign headline**: `text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight`
- **Section label**: `text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60`
- **Price display**: `text-2xl font-bold tracking-tight`
- **Stat numbers**: `text-2xl md:text-4xl font-black`
- **Campaign subtext**: `text-lg md:text-xl leading-relaxed text-white/70`

---

## 3. Color System

### Light Mode
| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.985 0.003 85)` | Page background |
| `--foreground` | `oklch(0.12 0.008 85)` | Primary text (near-black) |
| `--card` | `oklch(1 0 0)` | Card surface |
| `--card-foreground` | `oklch(0.12 0.008 85)` | Card text |
| `--muted` | `oklch(0.955 0.004 85)` | Muted bg (section alternation) |
| `--muted-foreground` | `oklch(0.55 0.01 85)` | Secondary text |
| `--primary` | `oklch(0.12 0.008 85)` | Primary (near-black) |
| `--primary-foreground` | `oklch(0.985 0.003 85)` | Primary text on dark |
| `--accent` | `oklch(0.94 0.005 85)` | Subtle accent bg |
| `--accent-foreground` | `oklch(0.12 0.008 85)` | Accent text |
| `--border` | `oklch(0.92 0.004 85)` | Borders, dividers |
| `--destructive` | `oklch(0.577 0.245 27.325)` | Destructive actions |
| `--radius` | `0.75rem` | Border radius base |

### Dark Mode
| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.13 0.004 85)` | Soft dark surface |
| `--foreground` | `oklch(0.96 0.003 85)` | Primary text (off-white) |
| `--card` | `oklch(0.16 0.004 85)` | Card surface |
| `--card-foreground` | `oklch(0.96 0.003 85)` | Card text |
| `--border` | `oklch(1 0 0 / 6%)` | Subtle borders |

### Usage Guidelines
- **High contrast** is the default — dark text on light backgrounds, light text on dark sections
- **Campaign sections** use `bg-neutral-950` (fixed near-black, NOT theme-dependent) with white text for maximum impact in both light and dark modes
- **Section alternation**: `bg-background` ↔ `bg-muted/30` for rhythm
- **CTAs on dark**: `rounded-full bg-white text-neutral-950 text-sm font-bold uppercase tracking-widest`
- **CTAs on light**: `rounded-full bg-foreground text-background text-sm font-bold uppercase tracking-wider`
- **Always use CSS variable tokens** — no inline hex/rgb colors (except campaign dark sections which use Tailwind fixed tokens)

---

## 4. Spacing & Layout System

### Section Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `section-py` | `py-24 md:py-32` | Major page sections |
| `container-layout` | `max-w-1440px`, `px-6 md:px-10 lg:px-16` | Content container |
| `gap-6 md:gap-8` | Grid gaps | Between grid items |

### Campaign Section Spacing
- **Hero campaign**: `min-h-[80vh]` with full-width backgrounds
- **Banner sections**: `py-28 md:py-36` for promotional banners
- **Card height**: `h-[500px]` for collection cards, `h-[320px]` for category tiles

### Responsive Behavior
| Screen | Padding-X | Section Py | Grid Columns |
|--------|-----------|------------|--------------|
| Mobile (<640px) | `px-6` | `py-24` | 1 col / 2 cols |
| Tablet (768px) | `px-10` | `py-32` | 2-3 cols |
| Desktop (1024px+) | `px-16` | `py-32` | 3-4 cols |

---

## 5. Grid System

### Multi-Column Grids
- **3-col grid**: `.grid gap-6 md:grid-cols-3` — Featured collections
- **4-col grid**: `.grid gap-6 sm:grid-cols-2 lg:grid-cols-4` — Trending products grid
- **2-col editorial**: `.grid items-center gap-12 lg:grid-cols-2 lg:gap-16` — Brand story
- **2-col categories**: `.grid gap-5 sm:grid-cols-2 lg:grid-cols-4` — Category highlights

### Card Ratios & Sizes
- Collection cards: `h-[500px]` with `object-cover` images
- Category tiles: `h-[320px]` with `object-cover` images
- Product cards: Aspect-ratio containers (handled by ProductCard)

---

## 6. Component System

### Buttons (ShadCN + MCPDS Extensions)
| Variant | Style | Usage |
|---------|-------|-------|
| Campaign Primary | `h-14 rounded-full bg-white text-foreground px-10 md:px-12 text-sm font-bold uppercase tracking-widest` | Hero CTAs on dark bg |
| Campaign Outline | `h-14 rounded-full border-white/30 bg-transparent text-white px-10 text-sm font-bold uppercase tracking-widest` | Secondary CTAs on dark |
| Default Primary | `h-12 rounded-full bg-foreground text-background px-8 text-sm font-semibold` | Standard CTAs |
| Default ShadCN | ShadCN button variants as-is | UI actions, forms |
| Ghost | ShadCN ghost variant | Icon buttons, subtle actions |

### Cards (MCPDS Visual)
- **Collection cards**: Full-bleed image with gradient overlay + text
- **Category tiles**: Full-bleed image with bottom gradient + label
- **Product cards**: See Product Card section below

### Image Treatments
- **Campaign images**: `object-cover` with gradient overlays (`from-foreground/90` → `to-transparent`)
- **Collection cards**: Gradient overlays per theme (`from-emerald-900/80`, `from-orange-900/80`, etc.)
- **Category tiles**: `bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent`
- **Hover effects**: `group-hover:scale-110` on images, `group-hover:scale-[1.02]` on cards

---

## 7. Motion & Animation

### ScrollReveal (Existing Component)
- **Direction**: `"up"` for most sections, `"left"` / `"right"` for editorial splits
- **Distance**: `40` for standard, `60` for editorial
- **Stagger delay**: `0.1s` - `0.15s` between items
- **Duration**: `0.7s`
- **Easing**: `[0.25, 0.1, 0.25, 1]`

### Hover Behaviors
- **Cards**: `hover:scale-[1.02]`, `active:scale-[0.98]`
- **Images (inside cards)**: `group-hover:scale-110` with `duration-700`
- **Buttons**: `active:scale-[0.97]`
- **Links**: Underline or arrow translation (`group-hover:translate-x-1`)
- **Gradient underlines**: `h-px w-0 bg-white/40 group-hover:w-full transition-all duration-300`

### Performance Rules
- Use `transform` and `opacity` only (GPU-accelerated)
- Never animate `width`, `height`, `top`, `left`
- `loading="lazy"` on all below-fold images
- Respect `prefers-reduced-motion` via ScrollReveal

---

## 8. ShadCN Usage Guidelines

### Allowed Components
- **Button** — Primary CTA system, form actions
- **Card** — Content containers
- **Sheet** — Mobile menus, filter panels
- **Badge** — Status indicators
- **Breadcrumb** — Navigation hierarchy
- **Input** — Form fields, search

### Customization Rules
- ShadCN is a **tool**, not the design authority — MCPDS overrides when needed
- Custom button variants (campaign styles) use direct Tailwind classes
- Existing ShadCN primitives remain as-is
- New ShadCN components can be added when useful

---

## 9. Home Page Section Strategy

### Section Architecture
The Home page uses a campaign-driven storytelling structure with clear hierarchy:

```
1. HERO (video)              → Existing: Full-viewport brand intro
2. HERO CAMPAIGN (new)       → Bold commercial banner, stats, CTAs
3. PRODUCTS                  → Existing: Featured products carousel
4. FEATURED COLLECTIONS (new)→ Grid-based collection cards
5. CATEGORIES                → Existing: Categories carousel
6. CATEGORY HIGHLIGHTS (new) → Visual sport category tiles
7. BANNER                    → Existing: Promotional banner
8. TRENDING PRODUCTS (new)   → Bold product grid
9. BRANDS                    → Existing: Brands carousel
10. PROMOTIONAL BANNER (new) → Full-width sale banner
11. TESTIMONIALS             → Existing: Customer reviews
12. BRAND STORY (new)        → Editorial split layout
13. VALUES                   → Existing: Brand values
14. FEATURES                 → Existing: Store features
15. TEAM                     → Existing: Team section
16. CTA                      → Existing: Call to action
17. BLOG                     → Existing: Latest stories
```

### Placement Rules
- New sections interleave BETWEEN existing sections
- Never remove, replace, or hide existing sections
- New sections use the same `section-py` / `container-layout` utilities
- ScrollReveal animations applied to all new sections

---

## 10. CDN Image Rules

### Image Sources
- All new visual sections use **high-quality external CDN images only**
- No local assets (unless already existing)
- Preferred source: `images.unsplash.com` with `auto=format&fit=crop` params

### Image Requirements
- Sport / athletic / fashion commercial style
- Adidas/Nike campaign-like visuals
- High-end product photography
- Minimum width: 800px for cards, 1920px for banners

### Loading Strategy
- `loading="lazy"` on all images
- `object-cover` for consistent cropping
- Responsive sizes via CDN `w=` parameter:
  - Cards: `w=800&q=80`
  - Banners: `w=1920&q=80`
  - Editorial: `w=1200&q=80`

---

## 11. Safe Enhancement Rules

### Cardinal Rules
1. **NEVER delete** existing pages, components, or sections
2. **NEVER remove or replace** existing functionality
3. **NEVER break** routing, API calls, or state management
4. **NEVER refactor** backend logic
5. **ALWAYS keep** existing features intact

### Adding New Sections
- Place above or between existing sections
- Use same utilities (`section-py`, `container-layout`, `ScrollReveal`)
- Follow existing code patterns for consistency
- Import at top of HomePage, render in sequence
- All new components use `memo` for performance

### What To Do When in Doubt
- ADD rather than modify
- EXTEND rather than replace
- ENHANCE rather than refactor

---

## 12. Product Card Design (Adidas Style)

### Visual Identity
Product cards follow an Adidas/Nike commercial eCommerce style with bold imagery, clear pricing, and minimal but powerful information display.

### Card Structure
```
┌──────────────────────┐
│                      │
│     [Product Image]  │  ← aspect-[4/5], object-cover, group-hover:scale-[1.05]
│                      │
│  ┌────────────────┐  │  ← overlay CTA (opacity-0 → group-hover:opacity-100)
│  │  Add to Cart   │  │
│  └────────────────┘  │
│  ★ Favorites (top-R) │  ← always visible heart icon
└──────────────────────┘
│ Product Title         │  ← text-base font-semibold line-clamp-1
│ $89.99  $129.99       │  ← text-xl font-bold + line-through discount
│ ★ 4.5  ·  234 sold    │  ← text-xs text-muted-foreground
└───────────────────────┘
```

### Design Rules
| Element | Class | Rule |
|---------|-------|------|
| Image ratio | `aspect-[4/5]` | Vertical product focus |
| Image hover | `group-hover:scale-[1.05] duration-700` | Subtle zoom |
| Overlay CTA | `rounded-full bg-white text-neutral-950 text-xs font-bold uppercase tracking-wider` | Appears on hover at image bottom |
| Wishlist icon | `rounded-full bg-white/90 shadow-sm h-8 w-8` | Always visible, top-right corner |
| Title | `text-base font-semibold leading-tight` | Single line, truncated |
| Price (current) | `text-xl font-bold tracking-tight` | Always bold, highest hierarchy |
| Price (original) | `text-sm text-muted-foreground/40 line-through` | Only shown when discounted |
| Rating | `text-xs font-medium text-muted-foreground` | Star + numeric value |
| Sold count | `text-xs text-muted-foreground/50` | Meta information |

### CTA Overlay Animation
- `opacity-0` → `opacity-100` on `group-hover`
- Duration: `duration-300`
- The CTA uses the "overlay" variant of AddToCart, which renders as a full-width button with text

### Grid Layout
- 4-column grid on `lg`, 2-column on `sm`, 1-column on mobile
- `gap-6` between cards
- Cards wrapped in a `<Link>` for navigation to product details

---

## 13. Cart Design (Conversion-Focused)

### Visual Identity
The Cart is designed as a modern Adidas-style checkout experience — clean, structured, with bold pricing and a clear conversion path.

### Cart Layout
```
┌──────────────────────────────────────┬────────────────┐
│  Campaign Header                     │                │
│  "Your Cart." / "Review"             │                │
├──────────────────────────────────────┤                │
│  Breadcrumb                          │                │
│  "Cart" label                        │                │
│  "Shopping Cart" h1                  │                │
│  Items count + Delete All            │                │
│                                      │  CartSummary   │
│  ┌──────────────────────────┐        │  ┌──────────┐  │
│  │ CartItemCard             │        │  │Total:    │  │
│  │ [img] Title              │        │  │$299.97   │  │
│  │       $89.99 EGP         │        │  │          │  │
│  │       [-] 3 [+] $269.97  │        │  │[Checkout]│  │
│  └──────────────────────────┘        │  └──────────┘  │
│                                      │                │
│  (repeat for each item)              │                │
└──────────────────────────────────────┴────────────────┘
```

### CartItemCard Design Rules
| Element | Class | Rule |
|---------|-------|------|
| Container | `rounded-2xl border border-border/30 bg-card p-5` | Card-like appearance |
| Image | `h-28 w-28 rounded-xl md:h-32 md:w-32` | Large product thumbnail |
| Title | `text-base font-semibold truncate` | Bold product name |
| Price/unit | `text-sm text-muted-foreground` | Unit price reference |
| Quantity controls | `border border-border/50 rounded-xl h-9 w-9 hover:border-foreground/20` | Clear +/- buttons |
| Quantity display | `text-sm font-bold tabular-nums w-12 text-center` | Bold count |
| Item total | `text-base font-bold tabular-nums` | Right-aligned, bold |
| Remove button | `text-muted-foreground/40 hover:bg-destructive/10 hover:text-destructive` | Clean trash icon |

### CartSummary Design Rules
| Element | Class | Rule |
|---------|-------|------|
| Container | `sticky top-24 rounded-2xl border border-border/30 bg-card` | Sidebar card |
| Title | `text-lg font-bold tracking-tight` | Bold section heading |
| Item count | `text-muted-foreground text-sm` + `font-semibold tabular-nums` | Clean row |
| Subtotal | `text-muted-foreground text-sm` + `font-semibold tabular-nums` | Clean row |
| Shipping | `text-muted-foreground text-sm` + `text-xs font-medium` | Informational |
| Divider | `border-border/40` | Subtle split |
| Total label | `text-base font-bold` | Strong label |
| Total price | `text-2xl font-black tracking-tight tabular-nums` | Highest visual weight |
| Checkout CTA | `rounded-full bg-foreground text-background w-full py-3.5 text-sm font-bold uppercase tracking-wider` | Full-width, bold |

### Empty Cart Design
- Centered layout with shopping cart icon in circle
- `text-2xl font-bold` heading
- "Shop Now" CTA with arrow icon

### Loading / Error States
- Loading: Animated pulse skeleton matching exact component layout
- Error: Icon + bold heading + retry button

---

## 15. Feature Differentiation

| Page | MCPDS Approach |
|------|----------------|
| **Home** | Campaign-driven landing + storytelling sections |
| **Products** | Structured high-performance product grid |
| **Product Details** | Strong commercial showcase page |
| **Categories** | Visual discovery gallery |
| **Brands** | Clean brand grid |
| **Cart** | Fast utility with clear checkout path |
| **Checkout** | Conversion-focused flow |
| **Auth** | Minimal but bold login experience |
| **Profile** | Structured dashboard layout |
| **Orders** | Clean order history |

---

## 16. Dark Mode

### Principles
- Soft dark surfaces (never pure black `#000`)
- High contrast remains — text is `oklch(0.96 0.003 85)` on `oklch(0.13 0.004 85)`
- All components support both modes seamlessly
- CSS variables handle the heavy lifting

### Dark Mode Specifics
- Background: `oklch(0.13 0.004 85)` — soft charcoal
- Cards: `oklch(0.16 0.004 85)` — slightly lighter
- Borders: `oklch(1 0 0 / 6%)` — semi-transparent white
- Campaign dark sections: Use `bg-neutral-950` (fixed near-black) to stay dark in both modes — NOT `bg-foreground` which would flip to white in dark mode

---

## Maintenance

This document must be updated whenever:
- A new section type is added to the Home page
- New component patterns are established
- Spacing/typography/color tokens change
- New ShadCN components are integrated
- Image sourcing strategy changes

**MCPDS is the ONLY design system. All UI must conform.**

---

*Last updated: May 2026*
