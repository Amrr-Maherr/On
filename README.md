# On — Production-Grade High-Performance eCommerce Platform

**On** is a comprehensive, high-performance eCommerce application built with **React 19**, **TypeScript 6**, and **Vite 8**. The frontend follows a feature-based architecture with full internationalization (English/Arabic, RTL support), server-state caching via TanStack Query, and a brutalist athletic design system (MCPDS) inspired by global sports brands.

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Core** | React 19, TypeScript 6 |
| **Build** | Vite 8 |
| **PWA** | vite-plugin-pwa 1 (service worker, manifest, offline support) |
| **Routing** | React Router 7 |
| **Server State** | TanStack Query 5 (React Query) |
| **Client State** | Redux Toolkit (configured, extensible) |
| **HTTP Client** | Axios 1 (interceptors for auth token) |
| **Styling** | Tailwind CSS 4 |
| **UI Primitives** | shadcn/ui (base-nova style) + @base-ui/react |
| **Icons** | Lucide React 1 |
| **Animations** | Framer Motion 12, Swiper 12, @animbits (ThemeToggleCircular, LoaderMorphing, ExpandingCard) |
| **Forms** | React Hook Form 7 |
| **i18n** | i18next 26, react-i18next 17 |
| **SEO** | React Helmet Async |
| **Notifications** | React Hot Toast |
| **OAuth** | @react-oauth/google (Google Login) |
| **Image Lightbox** | yet-another-react-lightbox |
| **Maps** | React Simple Maps |
| **Product Tour** | driver.js |
| **Fonts** | Geist Variable, Oswald Variable (@fontsource) |
| **Lint** | ESLint 10 |
| **React Compiler** | Babel plugin for automatic memoization |

---

## Architecture

### Feature-Based Architecture

The project is organized around **feature modules**, each encapsulating its own API layer, hooks, components, pages, types, and utilities. This structure enforces separation of concerns, improves discoverability, and scales predictably as the application grows.

```
src/
├── app/                       # Global configuration
│   ├── providers/             # App-wide providers (Redux, Query, i18n, Theme, Helmet)
│   ├── routes/                # Lazy-loaded route definitions (35+ routes)
│   └── store.ts               # Redux store (typed, extensible)
│
├── components/                # UI Components
│   ├── layout/                # Global layout (Navbar, Hero, Footer)
│   │   └── Navbar/            # Navbar with sub-components, hooks, constants, utils
│   ├── shared/                # Reusable components (ErrorState, EmptyState, ScrollReveal,
│   │                          # ThemeToggle, LanguageSwitcher, Logo, Slider, Filters,
│   │                          # PageLoader, QuickViewDialog, ExpandingCard)
│   └── ui/                    # shadcn/ui primitives (button, card, input, badge,
│                              # select, sheet, breadcrumb, radio-group)
│
├── features/                  # Feature modules (22 modules)
│   ├── auth/                  # Login, Register, Password Reset (container/presentational)
│   ├── cart/                  # Cart CRUD, summary (container/presentational)
│   ├── checkout/              # Checkout session, cash-on-delivery
│   ├── products/              # Product listing, filtering, pagination, quick view
│   ├── product-details/       # Product gallery, reviews, actions (container/presentational)
│   ├── categories/            # Category listing (container/presentational)
│   ├── category-details/      # Category detail (container/presentational)
│   ├── brands/                # Brand listing (container/presentational)
│   ├── brand-details/         # Brand detail (container/presentational)
│   ├── wishlist/              # Wishlist CRUD (container/presentational)
│   ├── orders/                # Order history (container/presentational)
│   ├── profile/               # User profile management (container/presentational)
│   ├── home/                  # Homepage sections
│   ├── footer-pages/          # Static pages (About, Contact, FAQ, Terms, etc.)
│   ├── platform/              # Features page (24 feature cards across 5 categories)
│   ├── tour/                  # Guided product tour
│   ├── not-found/             # 404 page
│   ├── all-brands/            # All brands grid
│   ├── all-categories/        # All categories grid
│   └── branches/              # Store locator with map
│
├── hooks/                     # Global hooks (useIntersectionObserver)
├── i18n/                      # i18next configuration
├── lib/                       # Library config (Axios instance, utils, path helpers)
├── locales/                   # Translation files (en, ar)
└── shared/                    # Shared components, hooks, providers, types
```

### Component Hierarchy

```
<AppProviders>                  # Redux, Query, i18n, Theme, Helmet
  <BrowserRouter>
    <TourProvider>              # driver.js guided tour
      <App>
        <Toaster />             # react-hot-toast
        <Navbar />              # Sticky, responsive, with search dropdown
        <main>
          <Suspense fallback={<PageLoader />}>
            <AppRoutes />       # 35+ lazy-loaded routes
        <Footer />              # Static pages links, social, newsletter
        <ScrollToTopButton />
```

### Module Convention

Every feature module follows a consistent internal structure:

```
feature/
├── api/            # Axios API functions
├── components/     # Feature-specific components
├── hooks/          # TanStack Query hooks (useQuery/useMutation wrappers)
├── pages/          # Page components (consumed by router)
├── types/          # TypeScript interfaces
├── utils/          # Helper utilities
└── schemas/        # Form field constants (where applicable)
```

---

## State Management

| Concern | Tool | Rationale |
|---|---|---|
| **Server state** | TanStack Query 5 | Automatic caching, background refetching, stale-while-revalidate |
| **Client state** | Redux Toolkit | Configured store ready for cross-cutting state (user session, UI preferences) |
| **Form state** | React Hook Form | Uncontrolled inputs with minimal re-renders |
| **Theme** | React Context + localStorage | Persisted dark/light/system preference |
| **Auth token** | Axios interceptor + localStorage | Token attached to all requests; auto-cleared on 401 |

### TanStack Query Configuration

```
defaults:
  staleTime: 5 minutes
  retry: 1
per-query overrides: staleTime varies (e.g., products: 2 minutes)
```

---

## Data Fetching & API Layer

### Axios Instance (`src/lib/axios.ts`)

- Base URL from `VITE_API_URL` environment variable
- **Request interceptor**: Attaches `token` header from `localStorage`
- **Response interceptor**: Clears credentials on 401

### API Function Pattern

Each API function is a standalone async function. Features own their API files and hooks.

```
// Example pattern
export const getAllProducts = (filters: ProductFilters): Promise<ApiResponse<Product>> =>
  api.get("/products", { params: filters }).then((res) => res.data);
```

Wrapped in a custom hook:

```
export const useAllProducts = (filters: ProductFilters) =>
  useQuery({
    queryKey: ["products", "all", filters],
    queryFn: () => getAllProducts(filters),
    staleTime: 1_000 * 60 * 2,
  });
```

### Shared API Types

```typescript
interface ApiResponse<T> {
  results: number;
  metadata: PaginationMetadata;
  data: T[];
}

interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number | null;
}
```

---

## Internationalization (i18n)

- **Languages**: English (`en`) and Arabic (`ar`)
- **Detection**: localStorage > navigator language
- **URL Prefix**: All routes prefixed with `/:lang` (e.g., `/en/products`, `/ar/products`)
- **RTL Support**: Document direction auto-syncs with language; Arabic font weight adjustments
- **Utilities**: `useCurrentLang()`, `useLocalizedNavigate()`, `buildLocalizedPath()`
- **Coverage**: 1300+ translation keys across all features

---

## Routing

- **Library**: React Router 7
- **Lazy Loading**: All 35+ page components loaded via `React.lazy()` + `Suspense`
- **Language Layout**: `LangLayout` wraps all routes, synchronizing i18n language and document direction
- **Default Redirect**: `/` → `/en`

### Route Map

| Route | Feature |
|---|---|
| `/:lang` | Home |
| `/:lang/auth` / `login` / `register` | Authentication |
| `/:lang/forgot-password` / `reset-password` | Password recovery |
| `/:lang/products` | Product listing with filters |
| `/:lang/products/:slug/:id` | Product details |
| `/:lang/categories` / `categories/:slug/:id` | Category browsing |
| `/:lang/brands` / `brands/:slug/:id` | Brand browsing |
| `/:lang/cart` | Shopping cart |
| `/:lang/checkout` | Checkout |
| `/:lang/wishlist` | Wishlist |
| `/:lang/orders` | Order history |
| `/:lang/profile` | User profile |
| `/:lang/about`, `contact`, `privacy`, `terms`, `faq`, `shipping`, `returns`, `size-guide`, `help`, `support-policy`, `policies` | Footer static pages |
| `/:lang/features` | Platform features showcase |
| `/:lang/branches` | Store locator |
| `/:lang/*` | 404 Not Found |

---

## Features

### Authentication (`features/auth`)
- Login, registration, forgot/reset password flows
- Token-based auth persisted in `localStorage`
- Axios interceptor for automatic token attachment
- Google OAuth login via `@react-oauth/google` with JWT decoding (`jwt-decode`)

### Product Listing & Details (`features/products`, `features/product-details`)
- Server-side pagination with query parameter filters
- Advanced filtering: keyword search, price range, categories, brands, sort order
- Product gallery with image lightbox (yet-another-react-lightbox)
- Review system with star ratings
- Stock status indicators (sold percentage, low stock badge)
- Quick view dialog on product cards (eye icon, horizontal layout, mobile-responsive)

### Cart (`features/cart`)
- Full CRUD: add, update quantity, remove items, clear cart
- Cart summary with totals
- Responsive CartItemCard component

### Wishlist (`features/wishlist`)
- Add/remove products
- Empty state and error handling

### Checkout (`features/checkout`)
- Checkout session query
- Cash-on-delivery mutation
- Order confirmation flow

### Orders (`features/orders`)
- Order history listing with pagination
- Order card component with status display

### Search System
- Search input in Navbar with dropdown results
- Uses server-side search via `keyword` query parameter
- `useSearchDropdown` hook for search behavior

### Footer Static Pages (`features/footer-pages`)
13 static content pages: About, Contact, FAQ, Privacy Policy, Terms & Conditions, Shipping Policy, Returns & Exchanges, Size Guide, Help Center, Support Policy, Policies, Branches (store locator with map)

### Profile (`features/profile`)
- View and edit personal information (name, phone, email)
- EditProfileSheet with React Hook Form
- Google profile data display (name, email, avatar from Google JWT)

### Homepage
- Hero section with video background
- Product showcase sections
- Brand and category grids
- Campaign banners

### Progressive Web App (PWA)
- Installable via browser prompt with web manifest (`manifest.webmanifest`)
- Auto-updating service worker via `vite-plugin-pwa` (`registerType: 'autoUpdate'`)
- SVG-based manifest icon using the existing brand icon
- Offline-ready with workbox precaching of all static assets
- Type-safe `virtual:pwa-register` integration with full TypeScript declarations
- Lighthouse-optimized meta tags and manifest configuration

### Guided Tour (`features/tour`)
- Route-aware product tour using driver.js
- Persists completion status in `localStorage`
- RTL-aware popover positioning

### Brands & Categories
- Dedicated listing pages with pagination
- Detail pages showing associated products
- Consistent data fetching pattern

---

## Performance Patterns

| Pattern | Implementation |
|---|---|
| **Code Splitting** | `React.lazy()` on all 35+ page components |
| **Caching** | TanStack Query (5 min default stale time) |
| **Memoization** | 138 `React.memo()` wrappers; 113+ `useMemo`/`useCallback` instances |
| **React Compiler** | Babel plugin auto-memoizes components at build time |
| **Animation Efficiency** | `ScrollReveal` respects `prefers-reduced-motion`; `IntersectionObserver`-driven |
| **Image Optimization** | `CardImage` with lazy loading, skeleton placeholder, error fallback |
| **Loading UX** | `PageLoader` (LoaderMorphing) as Suspense fallback; per-feature skeleton loaders |

---

## UI System: MCPDS (Motion Commerce Performance Design System)

### Design Principles
- **Zero Radius**: All elements use `--radius: 0` for sharp, angular aesthetics
- **High Contrast**: Black/white dominant palette with 2px borders
- **Bold Typography**: Heavy font weights (Bold/Black), wide letter spacing
- **Conversion Focused**: Prominent CTAs with high visual weight

### Container/Presentational Pattern

All feature pages follow a container/presentational split:
- **Containers** (e.g., `ProductsPage.tsx`): Data fetching, hooks, event handlers, side effects
- **Views** (e.g., `ProductsView.tsx`): Pure UI rendering, receives props from container

This pattern is applied to: auth, cart, orders, profile, wishlist, products, product-details, categories, category-details, brands, brand-details.

### Loading & Error States

- **PageLoader**: Full-screen morphing loader (`@animbits/loaders-morphing`) as Suspense fallback
- **ErrorState**: Retry-capable error display with localized messages
- **EmptyState**: Empty list states with actionable CTAs
- **Skeleton components**: Per-feature skeleton loaders (CartPageSkeleton, OrdersPageSkeleton, etc.)

### Theming

- Full dark/light mode with `localStorage` persistence
- CSS custom properties with oklch color space
- View Transitions API via `@animbits/theme-toggle-circular` for smooth theme switching
- RTL-aware typography adjustments (Arabic font weight reductions)

### Key Components
- **shadcn/ui primitives**: button, card, input, badge, select, sheet, breadcrumb, radio-group, dialog (styled with zero radius)
- **Shared components**: ErrorState, EmptyState, ScrollReveal (IntersectionObserver + Framer Motion), Swiper-based Slider, filter widgets, PageLoader (LoaderMorphing)
- **Product actions**: AddToCart, AddToFav, QuickViewDialog (eye icon with horizontal dialog)
- **Layout**: Sticky Navbar with search dropdown and mobile drawer, responsive Footer with 13+ link pages
- **Animations**: @animbits (ThemeToggleCircular, LoaderMorphing, ExpandingCard)

---

## Developer Experience

### Code Quality
- **ESLint 10** with strict TypeScript rules (`noUnusedLocals`, `noUnusedParameters`, `noFallthroughCasesInSwitch`)
- **TypeScript 6** in strict mode across all files
- Consistent feature module conventions enforced across 21 modules

### Type Safety
- Every API response typed with `ApiResponse<T>` generic wrapper
- Feature-specific types (Product, CartItem, Order, AuthUser, etc.)
- Shared `MongoDoc` base interface for all document types
- Form field schemas as typed constants

### Environment Handling
- Single `.env` file with `VITE_API_URL` for API base URL
- Vite's `import.meta.env` for type-safe env access
- Vercel deployment configuration (`vercel.json`)

### Reusability Patterns
- **cn() utility**: `clsx` + `tailwind-merge` for conditional class composition
- **Custom hooks per feature**: Encapsulate TanStack Query logic, expose loading/error/data states
- **Shared components**: ErrorState, Loader, ScrollReveal, filters composable across features
- **DX utilities**: `useLocalizedNavigate()` for language-aware routing, `useCurrentLang()` for active language

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server (default: http://localhost:5173)
npm run dev

# Build for production
npm run build

# Lint
npm run lint
```

### Environment Variables

Create a `.env` file in the project root:

```env
VITE_API_URL=http://localhost:3000/api
```

---

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server |
| `npm run build` | Type-check + production build |
| `npm run lint` | ESLint across all source files |
| `npm run preview` | Preview production build locally |
