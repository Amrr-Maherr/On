# Design System Documentation

> Single source of truth for the On Storefront UI system.
> Apple-inspired minimalism · Premium SaaS aesthetic · Editorial composition

---

## 1. Design Philosophy

### Vision
A premium, calm, and sophisticated eCommerce experience inspired by Apple's design language. The UI should feel spacious, elegant, and refined — never loud, cluttered, or aggressive.

### Core Values
- **Clarity over complexity** — Every element has purpose
- **Whitespace as luxury** — Generous spacing communicates premium quality
- **Typography-led hierarchy** — Content is the hero
- **Subtle motion** — Animation enhances, never distracts
- **Neutral calmness** — Color recedes, content advances

### Emotional Target
The interface should make users feel: calm, sophisticated, confident, and comfortable.

---

## 2. Core Principles

### Spacing
- Use `py-24` / `py-32` for major section separations
- Internal section padding: `px-6 md:px-12 lg:px-16`
- Max content width: `max-w-7xl` (1280px)
- Component gaps: `gap-6` / `gap-8` / `gap-12`
- Text block spacing: `space-y-2` / `space-y-4` / `space-y-6`

### Typography
- Single typeface with weight variation
- Generous line-height for readability
- Editorial heading sizes (large, refined)
- Minimal font-weight usage (300, 400, 500, 600)

### Color
- Neutral-dominant palette (gray-based)
- Accent used sparingly for primary actions
- Backgrounds: soft white / off-white
- Text: near-black for primary, warm gray for secondary
- Borders: ultra-light gray

### Motion
- Duration: 300–600ms for most transitions
- Easing: `cubic-bezier(0.25, 0.1, 0.25, 1)` — Apple-like
- Stagger delays: 100ms intervals
- Reduced motion respected via `prefers-reduced-motion`

### Component Consistency
- Border radius scale: `rounded-sm` (4px) → `rounded-2xl` (16px) → `rounded-full`
- Shadows: very subtle, never heavy
- Hover states: opacity/transform shifts, no color jumps

### Accessibility
- Minimum contrast ratio 4.5:1 for text
- Focus-visible rings on all interactive elements
- ARIA labels on icon-only buttons
- Respects `prefers-reduced-motion`
- Semantic HTML structure

### Responsiveness
- Mobile-first approach
- Tablet as adaptation, not breakpoint crisis
- Desktop as spacious editorial layout
- Never compress — stack gracefully

---

## 3. Spacing System

| Token | Value | Usage |
|-------|-------|-------|
| `section-py` | `py-24 md:py-32` | Major page sections |
| `section-px` | `px-6 md:px-12 lg:px-16` | Container padding |
| `max-w-content` | `max-w-7xl` | Content container |
| `gap-section` | `gap-16 md:gap-24` | Between sections |
| `gap-grid` | `gap-6 md:gap-8` | Grid item gaps |
| `gap-stack` | `space-y-4` | Vertical text rhythm |
| `gap-inline` | `gap-3 md:gap-4` | Horizontal element spacing |

### Container Widths
- **Default**: `max-w-7xl mx-auto px-6 md:px-12 lg:px-16`
- **Narrow**: `max-w-4xl` (editorial content)
- **Wide**: `max-w-[90rem]` (full product grids)
- **Full**: edge-to-edge (hero backgrounds)

---

## 4. Typography System

### Font Family
- **Primary**: `"Geist Variable", sans-serif` (already in project)
- **Fallback**: `system-ui, -apple-system, sans-serif`

### Heading Hierarchy

| Level | Size (Desktop) | Weight | Line Height | Letter Spacing |
|-------|---------------|--------|-------------|----------------|
| `h1` | `text-6xl md:text-7xl lg:text-8xl` | `font-light` | `leading-[1.05]` | `tracking-tight` |
| `h2` | `text-4xl md:text-5xl lg:text-6xl` | `font-light` | `leading-[1.1]` | `tracking-tight` |
| `h3` | `text-2xl md:text-3xl` | `font-medium` | `leading-[1.2]` | `tracking-normal` |
| `h4` | `text-xl md:text-2xl` | `font-medium` | `leading-[1.3]` | `tracking-normal` |
| `h5` | `text-lg md:text-xl` | `font-semibold` | `leading-[1.4]` | — |

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
- Section labels: `text-xs font-medium uppercase tracking-widest text-muted-foreground`
- Price: `text-2xl font-medium tracking-tight`

---

## 5. Color System

### Neutral Palette (Light Mode)

| Token | Value (oklch) | Usage |
|-------|---------------|-------|
| `--background` | `oklch(0.98 0.005 85)` | Page background (warm off-white) |
| `--foreground` | `oklch(0.13 0.01 85)` | Primary text |
| `--card` | `oklch(1 0 0)` | Card surface |
| `--card-foreground` | `oklch(0.13 0.01 85)` | Card text |
| `--muted` | `oklch(0.95 0.005 85)` | Muted background |
| `--muted-foreground` | `oklch(0.55 0.01 85)` | Secondary text |
| `--border` | `oklch(0.92 0.005 85)` | Borders, dividers |
| `--primary` | `oklch(0.13 0.01 85)` | Primary (near-black) |
| `--primary-foreground` | `oklch(0.98 0.005 85)` | Primary text on dark |
| `--accent` | `oklch(0.92 0.01 85)` | Subtle accent bg |
| `--accent-foreground` | `oklch(0.13 0.01 85)` | Accent text |

### Usage Guidelines
- **Backgrounds**: Use the warm off-white for main sections, pure white for cards
- **Text**: Near-black for headings, warm gray (`--muted-foreground`) for body/secondary
- **Borders**: Ultra-light gray, `1px` or `0.5px`
- **Accent**: Use sparingly — only for primary CTAs and key interactive elements
- **Never use**: Fully saturated colors, heavy gradients, or high-contrast borders

---

## 6. Component Standards

### Buttons

| Variant | Style | Usage |
|---------|-------|-------|
| Primary | `bg-foreground text-background rounded-full px-8 py-4` | Main CTAs |
| Outline | `border border-border bg-transparent rounded-full px-8 py-4` | Secondary actions |
| Ghost | `hover:bg-muted/50 rounded-full` | Icon buttons |
| Link | `text-foreground underline-offset-4 hover:underline` | Text links |

**States**: `hover:opacity-80`, `active:scale-[0.97]`, `focus-visible:ring-2`
**Transitions**: `duration-300 ease-out`

### Cards
- **Border radius**: `rounded-2xl` or `rounded-3xl`
- **Shadow**: `shadow-sm` or `shadow-md` for elevation
- **Padding**: `p-6 md:p-8`
- **Hover**: `hover:-translate-y-0.5 hover:shadow-md` with `duration-500`

### Product Cards
- Clean image presentation with subtle zoom on hover
- Minimal info: name, price, quick-add
- No badges or ribbons unless necessary
- `group` pattern for hover interactions

### Inputs
- **Border**: `border border-border rounded-2xl`
- **Padding**: `px-5 py-3.5`
- **Focus**: `focus:border-foreground focus:ring-0`
- **Placeholder**: `text-muted-foreground/60`

### Sections
- Section heading pattern: label + title + optional description
- `py-24 md:py-32` vertical rhythm
- ScrollReveal wrapper for entry animation

### Navbar
- Fixed/sticky top, backdrop blur
- Height: `h-16 md:h-20`
- Clean dividers, minimal color
- Icon buttons with badge indicators

### Footer
- Multi-column layout, generous spacing
- Small meta text for links
- Clean bottom bar with copyright

### Loaders
- Skeleton approach preferred over spinners
- Spinner only for page-level loading
- `motion` fade-in/out for transitions

### Empty States
- Centered illustration or icon
- Clear heading + description
- Single CTA button

---

## 7. Motion Rules

### Transition Defaults
```css
transition: all 300ms cubic-bezier(0.25, 0.1, 0.25, 1);
```

### Hover Behaviors
- **Buttons**: opacity shift + subtle scale
- **Cards**: slight translateY + shadow elevation
- **Images**: gentle scale (105%) on zoom
- **Links**: underline or opacity

### Fade Animations (ScrollReveal)
- **Initial**: `opacity: 0, y: 24`
- **Animate**: `opacity: 1, y: 0`
- **Duration**: `0.6s`
- **Easing**: `easeOut`
- **Stagger delay**: `0.1s` between elements

### Micro Interactions
- Badge count changes: subtle scale bounce
- Cart/Wishlist heart: gentle pop on add
- Button click: `scale(0.97)` feedback

### Performance Rules
- Use `transform` and `opacity` only (GPU-accelerated)
- Avoid animating `width`, `height`, `top`, `left`
- `will-change: transform` on animated elements
- Respect `prefers-reduced-motion`

---

## 8. Feature-Specific UI Direction

### Home
- **Personality**: Cinematic, spacious, editorial landing
- **Hero**: Full-viewport, large typography, atmospheric imagery
- **Sections**: Large vertical rhythm, alternating layouts
- **Content**: Story-driven, magazine-like editorial feel

### Products (Coming)
- **Personality**: Clean, editorial product grid
- **Grid**: Generous gutters, gallery-style presentation
- **Cards**: Minimal, image-forward, price as typography

### Product Details (Coming)
- **Personality**: Premium showcase
- **Layout**: Two-column, large image + refined details
- **Content**: Editorial description, elegant options

### Auth (Coming)
- **Personality**: Centered, calm, minimal
- **Layout**: Single-column, focused, distraction-free
- **Design**: Soft card, large inputs, clear hierarchy

### Cart (Coming)
- **Personality**: Clean utility
- **Layout**: List-based with clear totals
- **Design**: Minimal rows, prominent checkout CTA

### Checkout (Coming)
- **Personality**: Ultra-clean, distraction-free flow
- **Layout**: Step-based, wide and airy
- **Design**: Focus on form clarity

### Profile / Orders (Coming)
- **Personality**: Refined dashboard
- **Layout**: Card-based summaries, list details
- **Design**: Clean table/list patterns

---

## 9. Responsive Rules

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

### Spacing Adaptation

| Screen | Padding-X | Section Py | Grid |
|--------|-----------|------------|------|
| Mobile | `px-6` | `py-16` | 1 col |
| Tablet | `px-10` | `py-20` | 2 cols |
| Desktop | `px-16` | `py-32` | 3-4 cols |

### Typography Scaling
- Mobile: headings 75% of desktop size
- Fluid via `clamp()` or responsive classes
- Line-height increases on mobile for readability

---

## 10. Code/UI Consistency Rules

### Naming Conventions
- Components: PascalCase
- Files: kebab-case
- CSS classes: Tailwind utility classes
- Variant props: descriptive strings

### Reusable Patterns
- `Section` wrapper for consistent section structure
- `ScrollReveal` for entry animations
- `cn()` utility for conditional class merging
- `memo` for pure presentation components
- `useCallback` for event handlers passed as props

### Variant Strategy
- Use `cva` (class-variance-authority) for multi-variant components
- Default variants for common cases
- Variants: `size`, `variant`, `color` where applicable

### Tailwind Conventions
- Always use Tailwind utility classes over custom CSS
- Custom CSS only for: animations, keyframes, complex gradients
- Use `@apply` sparingly (prefer utility classes in JSX)
- Group related utilities logically

### Animation Consistency
- All animations via `framer-motion` or `motion` library
- Consistent duration/easing across similar interactions
- ScrollReveal as the standard scroll-triggered animation
- Reduced motion hook: `useReducedMotion()` from framer-motion

### Import Order
1. React/external libraries
2. Internal components (relative/`@/`)
3. Hooks
4. Utilities
5. Types
6. Assets/styles

---

## Maintenance

This document should be updated whenever:
- A new component pattern is established
- Spacing/typography/color tokens change
- A feature gets redesigned
- New motion patterns are introduced

**Keep this as the single source of truth.**
