# On — E-Commerce Web Application

A modern, feature-rich e-commerce front-end built with **React 19**, **TypeScript**, and **Vite**. It connects to a headless e-commerce API to provide a complete shopping experience including product browsing, cart management, wishlist, checkout, order tracking, and user authentication.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **UI Library** | React 19 |
| **Language** | TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Bundler** | Rolldown (via Vite) |
| **Package Manager** | npm |

### Core Dependencies

| Purpose | Library |
|---|---|
| **Routing** | react-router-dom v7 |
| **Server State** | @tanstack/react-query v5 |
| **HTTP Client** | axios |
| **Global State** | @reduxjs/toolkit (configured, not actively used) |
| **Forms** | react-hook-form |
| **Styling** | Tailwind CSS v4 |
| **UI Primitives** | shadcn/ui (base-nova style) + @base-ui/react |
| **Icons** | lucide-react |
| **Animations** | framer-motion |
| **Carousels** | swiper |
| **Notifications** | react-hot-toast |
| **SEO / Meta** | react-helmet-async |
| **Internationalization** | i18next + react-i18next + i18next-browser-languagedetector |
| **Font** | @fontsource-variable/geist |
| **Smooth Scroll** | lenis (installed) |
| **Lightbox** | yet-another-react-lightbox |
| **Utilities** | clsx, tailwind-merge, class-variance-authority |

### Dev Tools

| Purpose | Library |
|---|---|
| **Type Checking** | TypeScript 6 |
| **Linting** | ESLint 10 + typescript-eslint |
| **Lint Plugins** | eslint-plugin-react-hooks, eslint-plugin-react-refresh |
| **React Compiler** | babel-plugin-react-compiler |
| **Babel** | @babel/core + @rolldown/plugin-babel |

---

## Project Architecture

The project follows a **feature-based architecture** with clear separation of concerns.

```
src/
├── app/                      # App-level configuration
│   ├── i18n.ts               # Internationalization setup
│   ├── store.ts              # Redux store (empty)
│   ├── providers/            # Global providers
│   │   └── AppProviders.tsx
│   └── routes/               # Route definitions
│       └── index.tsx
│
├── components/               # Shared UI components
│   ├── layout/               # Layout components
│   │   ├── Hero/
│   │   └── Navbar/
│   ├── shared/               # Shared feature components
│   │   ├── components/       # (e.g. Section.tsx)
│   │   ├── Error/
│   │   ├── Loader/
│   │   ├── logo/
│   │   ├── ScrollReveal/
│   │   ├── Slider/
│   │   ├── ThemeToggle/
│   │   └── filters/
│   └── ui/                   # shadcn/ui primitives
│       ├── breadcrumb.tsx
│       ├── button.tsx
│       ├── card.tsx
│       ├── input.tsx
│       └── sheet.tsx
│
├── features/                 # Feature modules
│   ├── all-brands/
│   ├── all-categories/
│   ├── all-products/
│   ├── auth/
│   ├── brand-details/
│   ├── brands/
│   ├── cart/
│   ├── categories/
│   ├── category-details/
│   ├── checkout/
│   ├── footer-pages/
│   ├── home/
│   ├── not-found/
│   ├── orders/
│   ├── product-details/
│   ├── products/
│   ├── profile/
│   └── wishlist/
│
├── hooks/                    # Global hooks
│   └── use-intersection-observer.ts
│
├── lib/                      # Core library configuration
│   ├── axios.ts              # Axios instance with interceptors
│   ├── index.ts              # Barrel exports
│   └── utils.ts              # cn() utility
│
├── shared/                   # Shared domain-agnostic code
│   ├── components/
│   │   ├── PageHelmet.tsx
│   │   └── ScrollToTopButton.tsx
│   ├── hooks/
│   │   └── useLocalSearch.ts
│   ├── layout/
│   │   └── Footer.tsx
│   ├── providers/
│   │   └── theme-provider.tsx
│   └── types/
│       └── api.ts
│
├── assets/                   # Static assets
├── App.tsx                   # Root component
├── main.tsx                  # Entry point
├── index.css                 # Global styles + Tailwind
└── env.d.ts                  # TypeScript env declarations
```

---

## Folder Structure Explained

### Feature Modules (`src/features/`)

Each feature is a self-contained module with its own API layer, components, hooks, pages, and types.

```
src/features/<feature-name>/
├── api/            # API request functions (one file per endpoint)
├── components/     # Feature-specific UI components
├── hooks/          # React Query hooks (useQuery / useMutation wrappers)
├── pages/          # Page components (lazy-loaded in routes)
├── types/          # TypeScript interfaces and types
├── schemas/        # (optional) Validation schemas
├── utils/          # (optional) Utility functions
└── .gitkeep
```

Example — `src/features/cart/`:

```
src/features/cart/
├── api/
│   ├── ClearCart.ts
│   ├── GetCart.ts
│   ├── PostAddToCart.ts
│   ├── RemoveCartItem.ts
│   └── UpdateCartItem.ts
├── components/
│   ├── CartEmpty.tsx
│   ├── CartError.tsx
│   ├── CartItemCard.tsx
│   ├── CartLoader.tsx
│   └── CartSummary.tsx
├── hooks/
│   ├── useAddToCart.ts
│   ├── useCart.ts
│   ├── useClearCart.ts
│   ├── useRemoveCartItem.ts
│   └── useUpdateCartItem.ts
├── pages/
│   └── CartPage.tsx
└── types/
    └── cart.ts
```

### Shared Components (`src/components/`)

- **`components/ui/`** — shadcn/ui primitives (Button, Card, Input, Sheet, Breadcrumb). These follow the shadcn pattern with Radix UI / Base UI under the hood, styled with `cva()` (class-variance-authority) and the `cn()` utility.
- **`components/shared/`** — Reusable feature-agnostic components (Error, Loader, ScrollReveal, Slider, filters, ThemeToggle, Logo).
- **`components/layout/`** — App-level layout components (Hero, Navbar).

### App Configuration (`src/app/`)

- **`providers/AppProviders.tsx`** — Wraps the app with all global providers in the correct nesting order.
- **`routes/index.tsx`** — All route definitions with lazy-loaded pages.
- **`store.ts`** — Redux store (configured but currently empty).
- **`i18n.ts`** — i18next initialization with language detection.

---

## Main Application Flow

### Entry Point

```
index.html → src/main.tsx → AppProviders → BrowserRouter → App
```

**`src/main.tsx`** mounts the React tree with `StrictMode`, wrapping the app in `AppProviders` and `BrowserRouter`.

### Provider Hierarchy (order matters)

```
Redux Provider (store)
└── TanStack Query Provider (QueryClient)
    └── i18next Provider (i18n)
        └── Helmet Provider (react-helmet-async)
            └── Theme Provider (light/dark/system)
```

Defined in `src/app/providers/AppProviders.tsx`.

### Root Component (`src/App.tsx`)

```
App
├── Toaster (react-hot-toast, top-right)
├── Navbar (sticky)
├── <main>
│   └── AppRoutes (all lazy-loaded pages)
├── Footer
└── ScrollToTopButton (FAB)
```

---

## Authentication Flow

1. **Login / Register** — User submits credentials via react-hook-form.
2. **On success**, the JWT token and user ID are stored in `localStorage`.
3. **Axios interceptor** automatically attaches the token to every request via the `token` header.
4. **On 401**, the interceptor clears `localStorage` (token + userId).
5. **Protected routes** redirect to `/login` if no token exists (checked via `useEffect` in page components like `CartPage`, `CheckoutPage`).

Auth features:
- **`src/features/auth/`** — Login, Register, Forgot Password, Reset Password pages
- **`src/features/auth/api/PostLogin.ts`** — `POST /api/v1/auth/signin`
- **`src/features/auth/api/PostRegister.ts`** — `POST /api/v1/auth/signup`
- Token stored as `token` in localStorage
- User ID stored as `userId` in localStorage

---

## Routing

All pages are **lazy-loaded** using `React.lazy()` with a `<Suspense>` boundary that shows a full-screen `<Loader />` spinner.

```
/                           → HomePage
/auth                       → redirects to /login
/login                      → LoginPage
/register                   → RegisterPage
/forgot-password            → ForgotPasswordPage
/reset-password             → ResetPasswordPage
/products                   → AllProductsPage
/products/:slug/:id         → ProductDetailsPage
/categories                 → AllCategoriesPage
/categories/:slug/:id       → CategoryDetailsPage
/brands                     → AllBrandsPage
/brands/:slug/:id           → BrandDetailsPage
/cart                       → CartPage
/checkout                   → CheckoutPage
/orders                     → OrdersPage
/profile                    → ProfilePage
/wishlist                   → WishlistPage
/fave                       → WishlistPage (alias)
/about, /contact, /privacy, /terms, /faq,
/shipping, /returns, /size-guide, /help,
/support-policy, /policies  → Static pages
*                           → NotFoundPage
```

---

## State Management

### Server State (Primary)

All data fetching and caching is handled by **TanStack React Query v5**.

**Query Client defaults** (`src/app/providers/AppProviders.tsx`):
- `staleTime: 5 * 60 * 1000` (5 minutes)
- `retry: 1`

**Pattern** — Each feature has a custom hook that wraps `useQuery` or `useMutation`:

```typescript
// Query example (src/features/cart/hooks/useCart.ts)
export const useCart = () => {
  return useQuery<CartResponse>({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 1_000 * 60 * 2,  // 2 minutes
  });
};
```

```typescript
// Mutation example (src/features/cart/hooks/useRemoveCartItem.ts)
export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();
  return useMutation<CartResponse, Error, string>({
    mutationFn: (itemId) => removeCartItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
```

**Query keys used across the app**: `["cart"]`, `["wishlist"]`, `["orders"]`, product queries.

### Redux (Configured but Inactive)

The Redux store is configured at `src/app/store.ts` with an empty reducer. It is included in the provider tree but no slices are currently registered.

### Local State

Component-level state is managed with React hooks (`useState`, `useEffect`, `useCallback`, `useMemo`).

---

## API Layer

**`src/lib/axios.ts`** — A pre-configured Axios instance:

1. **Base URL**: Read from `VITE_API_URL` environment variable (falls back to `http://localhost:3000/api`).
2. **Request Interceptor**: Reads `token` from localStorage and attaches it as `config.headers.token`.
3. **Response Interceptor**: On 401 responses, clears `token` and `userId` from localStorage.

**Pattern** — Each API endpoint is a standalone async function:

```typescript
// src/features/cart/api/GetCart.ts
import { api } from "@/lib";
import type { CartResponse } from "@/features/cart/types/cart";

export async function getCart(): Promise<CartResponse> {
  const response = await api.get<CartResponse>("/api/v1/cart");
  return response.data;
}
```

API functions are called by React Query hooks, never directly from components.

---

## Styling System

### Tailwind CSS v4 + shadcn/ui

- **Framework**: Tailwind CSS v4 with the `@tailwindcss/vite` plugin.
- **shadcn/ui Style**: `base-nova` (newest shadcn style) with CSS variables.
- **Dark Mode**: Class-based strategy (`.dark` class on `<html>`).
- **Icon Library**: lucide-react.

### Custom Theme Variables

Defined in `src/index.css` using CSS custom properties in the `oklch` color space:

```css
@theme inline {
  --font-sans: "Geist Variable", sans-serif;
  --color-background: var(--background);
  --color-foreground: var(--foreground);
  --color-primary: var(--primary);
  /* ... */
}
```

### Utility Class

```typescript
// src/lib/utils.ts
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
```

### The `container-layout` Utility

```css
@utility container-layout {
  padding-inline: 24px;
  @media (width >= theme(--breakpoint-lg)) {
    padding-inline: 120px;
  }
}
```

### Theme Provider

`src/shared/providers/theme-provider.tsx` implements a Context-based theme system:
- Supports `light`, `dark`, and `system` themes.
- Persists preference in localStorage under `vite-ui-theme`.
- Toggles the `.dark` class on `<html>`.

---

## Styling and Design Patterns

### Component Styling

The project uses **shadcn/ui v4 (base-nova)**, which defines components with Tailwind CSS classes using `class-variance-authority` (cva) for variant management:

```typescript
const buttonVariants = cva(
  "base-classes-here",
  {
    variants: {
      variant: { default: "...", outline: "...", ghost: "...", destructive: "..." },
      size: { default: "...", sm: "...", lg: "..." },
    },
  }
);
```

### Animation Patterns

| Pattern | Location |
|---|---|
| **Scroll-triggered reveals** | `ScrollReveal` component using IntersectionObserver + framer-motion |
| **Page transitions** | framer-motion AnimatePresence (used in ScrollToTopButton) |
| **Carousels** | swiper with custom `Slider` wrapper (autoplay, pagination, navigation, fade) |
| **Reduced motion** | Respects `prefers-reduced-motion` via framer-motion's `useReducedMotion()` |
| **Smooth scrolling** | Lenis (installed) |

---

## Performance Optimizations

1. **Code Splitting** — All page components are lazy-loaded with `React.lazy()`.
2. **Suspense Boundary** — A single `<Suspense fallback={<Loader />}>` wraps all routes.
3. **React.memo** — Used on performance-critical components (`CartItemCard`, `Slider`, `NavigationButton`, `ScrollReveal`).
4. **useMemo / useCallback** — Used for expensive computations and callback stability.
5. **`loading="lazy"`** — Images use native lazy loading.
6. **Virtualized Swiper** — The `Virtual` module is enabled in the Slider component.
7. **Passive Scroll Listeners** — Scroll events use `{ passive: true }`.
8. **React Compiler** — `babel-plugin-react-compiler` is integrated via the Vite Babel plugin for automatic memoization.
9. **TypeScript `verbatimModuleSyntax`** — Ensures tree-shakeable imports.

---

## Reusable Patterns and Components

### Shared Components

| Component | Description |
|---|---|
| **`Loader`** | Full-screen loading spinner with size variant and optional text |
| **`ErrorState`** | Consistent error display with retry button |
| **`ScrollReveal`** | Framer Motion animation on scroll via IntersectionObserver |
| **`Slider`** | Swiper wrapper with responsive breakpoints, autoplay, navigation |
| **`ScrollToTopButton`** | FAB that appears after scrolling 300px |
| **`PageHelmet`** | react-helmet-async wrapper for per-page meta tags |
| **`Section`** | Reusable home page section combining ScrollReveal + Slider |
| **`ThemeToggle`** | Light/dark theme toggle button |

### Filter System (`src/components/shared/filters/`)

A composable filter system with:
- `FilterSearchInput` — Search text input
- `FilterSortDropdown` — Sort selector
- `FilterCheckboxGroup` — Multi-select checkbox group
- `FilterPriceRange` — Min/max price inputs
- `FilterSection` — Collapsible filter wrapper
- `FiltersPanel` — Combines all filters in a sidebar panel

### State Pattern: Loading / Error / Empty / Data

Every page follows a consistent pattern:

```typescript
if (isLoading) return <Loader />;
if (error) return <ErrorState message={...} onRetry={...} />;
if (!data || data.length === 0) return <EmptyState />;
return <DataView />;
```

### Internationalization

i18next is configured with browser language detection but no translation files are added yet. The app currently uses hardcoded English strings.

---

## Coding Conventions

### Naming

- **Files**: PascalCase for components (`CartItemCard.tsx`), camelCase for utilities (`useCart.ts`)
- **Exports**: Default export for page components and feature components, named exports for hooks
- **Hooks**: Prefix with `use` (e.g., `useCart`, `useAddToCart`, `useClearCart`)
- **API Functions**: Verb-prefixed (e.g., `getCart`, `postAddToCart`, `removeCartItem`)
- **Types**: PascalCase interfaces with `Props` suffix for component props

### Import Organization

1. React / library imports
2. Third-party library imports (lucide, framer-motion, etc.)
3. Local UI components (`@/components/ui/...`)
4. Feature hooks (`@/features/.../hooks/...`)
5. Feature components (`@/features/.../components/...`)
6. Shared components (`@/shared/components/...`)
7. Types (`@/features/.../types/...`)

---

## Setup and Installation

### Prerequisites

- Node.js >= 20
- npm

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=https://ecommerce.routemisr.com
```

### Install Dependencies

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts the Vite dev server on `http://localhost:5173`.

### Build

```bash
npm run build
```

Runs TypeScript type-checking (`tsc -b`) followed by Vite production build.

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

Runs ESLint across the entire project.

---

## Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite dev server |
| `npm run build` | TypeScript check + Vite production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | ESLint across the project |

---

## Build and Deployment

### Build Output

The production build outputs to `dist/` with:
- Minified CSS and JS bundles
- Code-split chunks per page (lazy-loaded features)
- TypeScript declarations removed

### TypeScript Configuration

- **Target**: ES2023
- **Module**: ESNext with bundler resolution
- **Strict**: No unused locals/parameters, strict fallthrough checks
- **Path Aliases**: `@/*` maps to `./src/*`
- **JSX**: `react-jsx` transform

### ESLint Configuration

- TypeScript strict rules
- React Hooks plugin (exhaustive-deps enforcement)
- React Refresh plugin (Vite HMR compatibility)

---

## Best Practices Followed

1. **Feature-based architecture** for scalability and separation of concerns
2. **Server state management** with TanStack Query instead of Redux for API data
3. **Lazy loading** all route pages for optimal initial bundle size
4. **Consistent error/loading/empty states** across all features
5. **Composable filter system** rather than monolithic filter components
6. **Accessibility** — `aria-label`, `role`, semantic HTML, keyboard navigation
7. **Performance** — memoization, virtualized sliders, passive event listeners
8. **TypeScript strict mode** with comprehensive type definitions
9. **Dark mode support** with system preference detection
10. **Reduced motion** respect for accessibility
11. **Interceptor-based auth** via Axios for automatic token management
