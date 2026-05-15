# Liquid Glass Commerce Design System (LGCDS)

> **Single Source of Truth** for the On Storefront UI system.
> Apple Store-inspired · Premium minimal · Editorial layout · Subtle glass enhancement

---

## 1. Design Philosophy

### LGCDS Vision
A premium, calm, and sophisticated eCommerce experience inspired by Apple's design language and modern SaaS dashboards. The UI should feel spacious, elegant, and refined — never loud, cluttered, or aggressive. Glassmorphism is used as a **subtle enhancement layer**, not the dominant design choice.

### Core Values
- **Clarity over complexity** — Every element has purpose
- **Whitespace as luxury** — Generous spacing communicates premium quality
- **Typography-led hierarchy** — Content is the hero
- **Subtle motion** — Animation enhances, never distracts
- **Neutral calmness** — Color recedes, content advances
- **Glass as accent** — Used sparingly for depth, never for decoration

### Emotional Target
The interface should make users feel: **calm, sophisticated, confident, and comfortable** — like browsing the Apple Store online.

### Apple Store-Inspired Direction
- Product-first design philosophy
- Large whitespace sections
- Strong visual hierarchy
- Minimal text density
- Grid-based clean layouts
- Story-driven sections
- Smooth scroll experience
- Focus on product imagery

---

## 2. Spacing System

### Section Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `section-py` | `py-24 md:py-32` | Major page sections |
| `section-px` | `px-6 md:px-10 lg:px-16` | Container padding |
| `max-w-content` | `max-w-7xl` | Default content container |
| `gap-section` | `gap-16 md:gap-24` | Between sections |
| `gap-grid` | `gap-6 md:gap-8` | Grid item gaps |
| `gap-stack` | `space-y-4` | Vertical text rhythm |
| `gap-inline` | `gap-3 md:gap-4` | Horizontal element spacing |

### Container Widths
- **Default**: `max-w-7xl mx-auto px-6 md:px-10 lg:px-16`
- **Narrow**: `max-w-4xl` (editorial content, auth)
- **Wide**: `max-w-[90rem]` (full product grids)
- **Full**: edge-to-edge (hero backgrounds)

### Responsive Spacing
| Screen | Padding-X | Section Py | Grid Columns |
|--------|-----------|------------|--------------|
| Mobile | `px-6` | `py-16` | 1 col |
| Tablet | `px-10` | `py-20` | 2 cols |
| Desktop | `px-16` | `py-32` | 3-4 cols |

---

## 3. Typography System

### Font Stack
- **Primary**: `"Inter", system-ui, -apple-system, BlinkMacSystemFont, sans-serif`
- **Unified across entire app** — No mixed font systems

### Heading Hierarchy
| Level | Size (Desktop) | Weight | Line Height | Letter Spacing |
|-------|---------------|--------|-------------|----------------|
| `h1` | `text-5xl md:text-6xl lg:text-7xl` | `font-light` | `leading-[1.05]` | `tracking-tight` |
| `h2` | `text-4xl md:text-5xl` | `font-light` | `leading-[1.1]` | `tracking-tight` |
| `h3` | `text-2xl md:text-3xl` | `font-medium` | `leading-[1.2]` | `tracking-normal` |
| `h4` | `text-xl md:text-2xl` | `font-medium` | `leading-[1.3]` | `tracking-normal` |
| `h5` | `text-lg md:text-xl` | `font-medium` | `leading-[1.4]` | — |
| `h6` | `text-base md:text-lg` | `font-medium` | `leading-[1.4]` | — |

### Body Text
| Usage | Size | Weight | Line Height |
|-------|------|--------|-------------|
| Body large | `text-lg` | `font-normal (400)` | `leading-relaxed` |
| Body default | `text-base` | `font-normal (400)` | `leading-relaxed` |
| Body small | `text-sm` | `font-normal (400)` | `leading-normal` |
| Caption | `text-xs` | `font-normal (400)` | `leading-normal` |
| Meta | `text-xs` | `font-medium (500)` | — |

### Editorial Text
- Pull quotes: `text-2xl md:text-3xl font-light italic`
- Section labels: `text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60`
- Price: `text-2xl font-medium tracking-tight`
- Feature headings: `text-3xl md:text-4xl font-light tracking-tight`

---

## 4. Color System

### Light Mode
| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.985 0.003 85)` | Page background (warm off-white) |
| `--foreground` | `oklch(0.12 0.008 85)` | Primary text (near-black) |
| `--card` | `oklch(1 0 0)` | Card surface (pure white) |
| `--card-foreground` | `oklch(0.12 0.008 85)` | Card text |
| `--muted` | `oklch(0.955 0.004 85)` | Muted background |
| `--muted-foreground` | `oklch(0.55 0.01 85)` | Secondary text (warm gray) |
| `--border` | `oklch(0.92 0.004 85)` | Borders, dividers (ultra-light) |
| `--primary` | `oklch(0.12 0.008 85)` | Primary (near-black) |
| `--primary-foreground` | `oklch(0.985 0.003 85)` | Primary text on dark |
| `--accent` | `oklch(0.94 0.005 85)` | Subtle accent bg |
| `--accent-foreground` | `oklch(0.12 0.008 85)` | Accent text |

### Dark Mode
| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.13 0.004 85)` | Soft dark surface |
| `--foreground` | `oklch(0.96 0.003 85)` | Primary text (off-white) |
| `--card` | `oklch(0.16 0.004 85)` | Card surface (dark) |
| `--border` | `oklch(1 0 0 / 6%)` | Subtle border |

### Usage Guidelines
- **Backgrounds**: Warm off-white for main sections, pure white for cards
- **Text**: Near-black for headings, muted-foreground for body/secondary
- **Borders**: Ultra-light gray, 1px or 0.5px
- **Accent**: Use sparingly — only for primary CTAs and key interactive elements
- **Never use**: Fully saturated colors, heavy gradients, or high-contrast borders
- **Consistency**: Use existing CSS variable tokens ONLY — no inline hex/rgb colors

---

## 5. Glassmorphism Rules (LGCDS Enhancement)

### Where to Use Glass
- **Navbar backdrop**: `bg-background/80 backdrop-blur-xl` — subtle blur
- **Modals/Overlays**: Soft backdrop blur for depth
- **Hero overlays**: Gradient transparency overlays
- **Mobile menus**: Backdrop blur for context preservation

### Where NOT to Use Glass
- **Product cards**: Keep clean and solid (Apple Store style)
- **Buttons**: Solid or outline only
- **Input fields**: Clean bordered fields
- **Main content areas**: Solid backgrounds
- **Footers**: Solid clean backgrounds

### Blur Limitations
- Max blur: `backdrop-blur-xl` (24px)
- Standard blur: `backdrop-blur-lg` (16px)
- Light blur: `backdrop-blur-sm` (8px)
- Glass opacity: never below 80% background visibility
- Glass should enhance readability, never reduce it

---

## 6. Component System

### Buttons
| Variant | Style | Usage |
|---------|-------|-------|
| Primary | `bg-foreground text-background rounded-full px-8 py-3 text-sm font-medium` | Main CTAs |
| Outline | `border border-border bg-transparent rounded-full px-8 py-3 text-sm font-medium` | Secondary actions |
| Ghost | `hover:bg-muted/50 rounded-xl` | Icon buttons |
| Link | `text-foreground underline-offset-4 hover:underline` | Text links |
| Destructive | `text-destructive bg-destructive/10 hover:bg-destructive/20 rounded-full` | Delete actions |

**States**: `hover:opacity-80`, `active:scale-[0.97]`, `focus-visible:ring-2`
**Transitions**: `duration-300 ease-out`
**Sizing**: `h-8` (default), `h-7` (sm), `h-9` (lg), `size-8` (icon)

### Cards
- **Border radius**: `rounded-2xl` or `rounded-xl`
- **Background**: `bg-card`
- **Border**: `ring-1 ring-foreground/10` or `border border-border/50`
- **Padding**: `p-6 md:p-8`
- **Hover**: `hover:-translate-y-0.5` with `duration-500`

### Product Cards (Apple-Style)
- Clean image presentation with subtle zoom on hover (`group-hover:scale-105`)
- Minimal info: image, name, price, quick-add
- No badges or ribbons unless necessary
- `group` pattern for hover interactions
- Aspect-ratio container for images

### Inputs
- **Border**: `border border-input rounded-2xl`
- **Height**: `h-12`
- **Padding**: `px-4 py-3`
- **Focus**: `focus:border-foreground/40 focus:ring-0`
- **Placeholder**: `placeholder:text-muted-foreground/40`
- **Background**: `bg-transparent`

### Modals / Dialogs
- Centered clean overlays
- Soft backdrop blur
- Minimal padding, clean typography
- Close button: top-right ghost icon

### Navbar (Apple-Style)
- Sticky top, `backdrop-blur-xl` with background transparency
- Height: `h-16 md:h-20`
- Border bottom: `border-border/40`
- Clean dividers, minimal color
- Icon buttons with badge indicators (round, bg-foreground/text-background)
- Search: subtle bordered field, centered

### Footer (Apple-Style)
- Clean structured layout with border-top
- `bg-muted/20` background
- Multi-column grid `gap-12`
- Small meta text for links
- Clean bottom bar with copyright + payment methods

### Loaders
- **Preferred**: Skeleton approach (shimmer animation)
- **Fallback**: Minimal spinner for page-level loading
- **Transitions**: Fade in/out for content changes

### Empty States
- Centered layout with icon
- Clear heading + description
- Single CTA button (clean ghost or outline)
- No excessive illustration

---

## 7. Feature-Specific UI Rules

### Home → Storytelling Editorial Landing
- Full-viewport hero with gradient overlay
- Editorial section pattern: label + spacious heading + description
- ScrollReveal animations throughout
- Generous whitespace between sections
- Product carousel with clean card design
- Testimonial section with subtle card design
- **Apple Store vibe**: Cinematic, spacious, story-driven

### Products → Clean Product Grid Browsing
- Sidebar filters (desktop) + product grid
- `gap-8` grid spacing, 4 columns max
- Editorial header with count
- Clean pagination
- Mobile filter sheet (bottom drawer)
- **Apple Store vibe**: Browse-focused, image-forward

### Product Details → Immersive Product Showcase
- Two-column layout: sticky gallery + product info
- Image gallery with thumbnails and lightbox
- Clean info card: price, rating, description
- Quantity selector + add to cart actions
- Reviews section with rating breakdown
- **Apple Store vibe**: Premium showcase, detailed

### Categories & Brands → Spacious Gallery Grid
- Gallery grid with `gap-8`
- Aspect-ratio card containers
- Gradient overlays on hover (subtle)
- Clean grid layout, minimal text
- **Apple Store vibe**: Visual discovery

### Cart → Clean Utility
- Two-column: items + summary sidebar
- Item cards: image, details, quantity controls, price
- Summary: subtotal, total, checkout CTA
- Clear cart option (ghost destructive)
- **Apple Store vibe**: Clean, functional, minimal

### Checkout → Ultra-Minimal Distraction-Free
- Two-column: form + order summary
- Large clean input fields
- Payment method toggle buttons
- Sticky order summary sidebar
- Single primary CTA
- **Apple Store vibe**: Focused, trust-building

### Profile → Structured Dashboard
- Centered `max-w-4xl` layout
- Editorial header with user info
- Info card with clean data display
- Action buttons (logout/edit) as clean links
- **Apple Store vibe**: Personal, organized

### Auth → Centered Clean Minimal Panel
- Centered single-column form
- No card wrapper — clean unboxed layout
- `max-w-sm` form width
- Large elegant heading
- Muted description text
- Clean inputs with labels
- **Apple Store vibe**: Minimal, welcoming

### Orders → Clean List History
- Single column order cards
- Clean card per order with status badge
- Status color-coded indicators
- Minimal actions per order
- **Apple Store vibe**: Straightforward, organized

---

## 8. Dark Mode Rules (Apple-Level Quality)

### Principles
- **Soft dark surfaces**: `oklch(0.13 0.004 85)` — never pure black `#000`
- **Eye-friendly contrast**: Text at `oklch(0.96 0.003 85)` on dark surfaces
- **Smooth transitions**: CSS `transition` on color properties
- **Consistent tokens**: Same variable names as light mode, just different values

### Dark Mode Specifics
- Background: Soft charcoal (not black)
- Cards: Slightly lighter than background (`oklch(0.16 0.004 85)`)
- Borders: Semi-transparent white (`oklch(1 0 0 / 6%)`)
- Muted text: Warm gray at `oklch(0.65 0.005 85)`
- No pure white elements (reduces eye strain)
- All components must support both modes seamlessly

### Implementation
- Use Tailwind's `dark:` variant for overrides
- CSS variables handle the heavy lifting
- Components automatically adapt via variable-based classes
- Theme toggle must animate smoothly (no instant flash)

---

## 9. Motion & Animation System

### Transition Defaults
```css
transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Hover Behaviors
- **Buttons**: Opacity shift + subtle scale (`active:scale-[0.97]`)
- **Cards**: Slight translateY (`hover:-translate-y-0.5`) + shadow elevation
- **Images**: Gentle scale (`group-hover:scale-105` on product images)
- **Links**: Opacity or underline transition

### Fade Animations (ScrollReveal)
- **Initial**: `opacity: 0, y: 24`
- **Animate**: `opacity: 1, y: 0`
- **Duration**: `0.6s`
- **Easing**: `easeOut`
- **Stagger delay**: `0.1s` between elements

### Performance Rules
- Use `transform` and `opacity` only (GPU-accelerated)
- Never animate `width`, `height`, `top`, `left`
- `will-change: transform` on animated elements
- Respect `prefers-reduced-motion`

---

## 10. Consistency Rules

### Naming Conventions
- Components: PascalCase
- Files: kebab-case
- CSS: Tailwind utility classes only
- Variant props: descriptive strings

### Reusable Patterns
- `Section` wrapper for consistent section structure
- `ScrollReveal` for entry animations
- `cn()` utility for conditional class merging
- `memo` for pure presentation components
- `useCallback` for event handlers passed as props
- `useMemo` for computed values

### Tailwind Conventions
- Always use Tailwind utility classes over custom CSS
- Custom CSS only for: keyframes, complex animations
- Group related utilities logically
- Never use `@apply` in component files

### Import Order
1. React/external libraries
2. Internal components (`@/`)
3. Hooks
4. Utilities
5. Types
6. Assets/styles

### Quality Checklist
- [ ] Dark mode supported and polished
- [ ] Responsive (mobile → desktop)
- [ ] Smooth hover/active states
- [ ] No hardcoded colors
- [ ] Uses CSS variable tokens
- [ ] Accessible (focus-visible, aria-labels)
- [ ] Proper spacing per LGCDS
- [ ] Inter font used consistently

---

## 11. Responsive Rules

### Breakpoints (Tailwind Default)
- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

### Mobile-First Approach
- Single-column on mobile
- Two-column on tablet
- Multi-column on desktop
- Never horizontal scroll (except carousels)
- Stack gracefully, never compress

### Typography Scaling
- Mobile: headings ~75% of desktop size
- Fluid via responsive classes
- Line-height increases on mobile for readability

---

## Maintenance

This document should be updated whenever:
- A new component pattern is established
- Spacing/typography/color tokens change
- A feature gets redesigned
- New motion patterns are introduced

**Keep this as the single source of truth.**
