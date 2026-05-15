# On — Production-Grade eCommerce Rebuild

A high-performance, production-ready eCommerce front-end built with **React 19**, **TypeScript**, and **Vite**. This project represents a **full systematic frontend transformation** inspired by the commercial design language of **Adidas** and **Nike**.

---

## 📌 The Mission: Production-Grade Rebuild

This application has undergone a **complete UI/UX rebuild** using the **Motion Commerce Performance Design System (MCPDS)**. Every page and component has been systematically redesigned to provide a bold, athletic, and conversion-optimized experience while preserving all existing backend logic and features.

### Core Objectives
- ✔ **Full Redesign**: 100% UI coverage across all pages and components.
- ✔ **Performance First**: Lazy loading, optimized asset delivery, and minimized re-renders.
- ✔ **Consistency**: A unified design language (MCPDS) as the single source of truth.
- ✔ **Production Ready**: Scalable architecture, clean code, and production-grade UI/UX.

---

## 🎨 Design System: MCPDS

**Motion Commerce Performance Design System (MCPDS)** is the exclusive design system for this project.

- **Inspiration**: Adidas & Nike digital platforms.
- **Visual Identity**: Bold, high-contrast, grid-based, and athletic.
- **Single Source of Truth**: All design tokens are centralized in `src/index.css` using CSS variables.
- **Full Documentation**: See [DESIGN-SYSTEM.md](./DESIGN-SYSTEM.md) for detailed design specifications.

> **Note on the "Team" Section**: As per architectural constraints, the "Team" section remains exactly as it was, integrated visually into the new system without structural changes.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **UI Library** | React 19 |
| **Language** | TypeScript 6 |
| **Build Tool** | Vite 8 |
| **Styling** | Tailwind CSS v4 |
| **UI Primitives** | shadcn/ui + @base-ui/react |
| **Icons** | lucide-react |
| **Animations** | framer-motion |
| **Carousels** | swiper |

---

## 🏗 Project Architecture

The project follows a **feature-based architecture** designed for scalability and clear separation of concerns.

```
src/
├── app/                      # App-level configuration (Routes, Store, i18n)
├── components/               # UI components
│   ├── layout/               # Global layout (Navbar, Hero)
│   ├── shared/               # Reusable feature-agnostic components
│   └── ui/                   # shadcn/ui primitives (styled for MCPDS)
├── features/                 # Self-contained feature modules (Cart, Products, Auth, etc.)
├── hooks/                    # Global React hooks
├── lib/                      # Core library configuration (Axios, Utils)
├── shared/                   # Domain-agnostic code (Theme, Global Types)
└── assets/                   # Static assets
```

---

## 🚀 Performance & UX

- **Stage-based Rendering**: Critical paths are optimized for instant feel.
- **Lazy Loading**: All features and heavy sections are loaded on demand.
- **Conversion-Focused**: UX is engineered to drive users toward checkout with minimal friction.
- **Responsive**: Mobile-first approach ensuring a premium experience on all devices.
