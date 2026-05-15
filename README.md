# On — Production-Grade High-Performance eCommerce Platform

**On** is a comprehensive, high-performance eCommerce application built with **React 19**, **TypeScript**, and **Vite**. This project represents a radical frontend transformation, designed to mirror the bold and powerful visual identity of global sports brands like **Adidas** and **Nike**.

---

## 🧐 Deep Analysis

The **On** project is more than just an online store; it is a visual and engineering experience aimed at merging "Power" with "Technical Efficiency." We analyzed the needs of athletes and high-performance seekers to build a unique design system called **MCPDS** (Motion Commerce Performance Design System).

### Visual Philosophy: Brutalist Athletic Design
- **Sharp Edges (Zero Radius)**: We intentionally removed all curves from buttons, images, and cards to provide a sharp, direct, and powerful feel that conveys precision and professionalism.
- **High Contrast**: A color palette based on White, Black, and Amber with thick borders (2px) ensures element clarity and readability under any lighting conditions (full Dark Mode support).
- **Typography**: Utilization of heavy fonts (Bold/Black) and wide letter spacing (Tracking) gives visual weight to headings and Calls to Action (CTAs).

---

## ✨ Key Features

### 🔐 Advanced Auth System
- Seamless sign-in and sign-up experience with a bold "Brutalist" design.
- Social Login support.
- Full password recovery flow (Forgot/Reset Password).
- Real-time interactive validation messages.

### 🛍️ Dynamic Storefront
- **Hero Section**: High-definition video background with full audio control, designed to capture user attention immediately.
- **Smart Discovery**: Advanced filtering system (Search, Price Range, Categories, Brands) with instant result updates.
- **Product Gallery**: Professional image gallery supporting Lightbox, Zoom, and smooth slider navigation.

### 🛒 Cart & Wishlist Management
- Quick product addition with instant quantity updates.
- Wishlist for saving favorite products.
- Full synchronization with Local Storage and API to ensure no data loss.

### 📊 Social Proof & Engagement
- Integrated review system with star ratings.
- Q&A section for direct interaction.
- "What our customers say" and "Our Ethos" sliders with attractive interactive designs.

### 👤 User Profile & Orders
- User dashboard to track order status and purchase history.
- Ability to edit personal data (Name, Phone, Email) via interactive sheets.

---

## 🛠 Tech Stack

| Layer | Technology |
|---|---|
| **Core Library** | React 19 (Latest) |
| **Language** | TypeScript 6 (Type Safety) |
| **Build Tool** | Vite 8 (Ultra-fast performance) |
| **Styling** | Tailwind CSS v4 |
| **Data Management** | TanStack Query (React Query) |
| **Form Management** | React Hook Form + Zod |
| **Animations** | Framer Motion |
| **Carousels** | Swiper.js |
| **Icons** | Lucide React |

---

## 🏗 Project Architecture

The project follows a **Feature-Based Architecture**, making it scalable and easy to maintain:

```
src/
├── app/                      # Global configurations (Router, State)
├── components/               # General UI components
│   ├── layout/               # Global structure (Navbar, Footer, Hero)
│   ├── shared/               # Reusable components
│   └── ui/                   # Primitive components (Buttons, Inputs)
├── features/                 # Functional modules (each feature in a separate folder)
│   ├── auth/                 # Authentication system
│   ├── cart/                 # Shopping cart
│   ├── products/             # Product display and filtering
│   └── profile/              # User profile
├── hooks/                    # General custom hooks
├── lib/                      # External library configurations (Axios)
└── shared/                   # Global styles and types
```

---

## 🚀 Performance & UX

- **Lazy Loading**: Heavy features and sections are loaded only when needed to reduce initial load time.
- **Scroll Reveal**: Element appearance effects on scroll to increase engagement.
- **Mobile First**: Fully responsive design ensuring a premium experience on all devices.
- **Optimized Assets**: Compressed and optimized images and videos for fast browsing.

---

## 🛠 Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

---

This project was developed to be a benchmark for quality in athletic eCommerce applications. 🚀🏁
