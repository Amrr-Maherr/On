import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "@/components/shared/Loader";

// Lazy loading all feature pages
const HomePage = lazy(() => import("@/features/home/pages/HomePage"));
const AuthPage = lazy(() => import("@/features/auth/pages/AuthPage"));
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const ForgotPasswordPage = lazy(() => import("@/features/auth/pages/ForgotPasswordPage"));
const ResetPasswordPage = lazy(() => import("@/features/auth/pages/ResetPasswordPage"));
const AllProductsPage = lazy(() => import("@/features/all-products/pages/AllProductsPage"));
const ProductDetailsPage = lazy(() => import("@/features/product-details/pages/ProductDetailsPage"));
const AllCategoriesPage = lazy(() => import("@/features/all-categories/pages/AllCategoriesPage"));
const CategoryDetailsPage = lazy(() => import("@/features/category-details/pages/CategoryDetailsPage"));
const AllBrandsPage = lazy(() => import("@/features/all-brands/pages/AllBrandsPage"));
const BrandDetailsPage = lazy(() => import("@/features/brand-details/pages/BrandDetailsPage"));
const CartPage = lazy(() => import("@/features/cart/pages/CartPage"));
const CheckoutPage = lazy(() => import("@/features/checkout/pages/CheckoutPage"));
const OrdersPage = lazy(() => import("@/features/orders/pages/OrdersPage"));
const ProfilePage = lazy(() => import("@/features/profile/pages/ProfilePage"));
const WishlistPage = lazy(() => import("@/features/wishlist/pages/WishlistPage"));
const AboutPage = lazy(() => import("@/features/footer-pages/pages/AboutPage"));
const ContactPage = lazy(() => import("@/features/footer-pages/pages/ContactPage"));
const PrivacyPage = lazy(() => import("@/features/footer-pages/pages/PrivacyPage"));
const TermsPage = lazy(() => import("@/features/footer-pages/pages/TermsPage"));
const FaqPage = lazy(() => import("@/features/footer-pages/pages/FaqPage"));
const ShippingPage = lazy(() => import("@/features/footer-pages/pages/ShippingPage"));
const ReturnsPage = lazy(() => import("@/features/footer-pages/pages/ReturnsPage"));
const SizeGuidePage = lazy(() => import("@/features/footer-pages/pages/SizeGuidePage"));
const HelpPage = lazy(() => import("@/features/footer-pages/pages/HelpPage"));
const SupportPolicyPage = lazy(() => import("@/features/footer-pages/pages/SupportPolicyPage"));
const PoliciesPage = lazy(() => import("@/features/footer-pages/pages/PoliciesPage"));
const NotFoundPage = lazy(() => import("@/features/not-found/pages/NotFoundPage"));

const AllProductsPage = lazy(() => import("@/features/all-products/pages/AllProductsPage"));
const ProductDetailsPage = lazy(() => import("@/features/product-details/pages/ProductDetailsPage"));

const AllProductsPage = lazy(() => import("@/features/all-products/pages/AllProductsPage"));
const ProductDetailsPage = lazy(() => import("@/features/product-details/pages/ProductDetailsPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forgot-password" element={<ForgotPasswordPage />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/products" element={<AllProductsPage />} />
        <Route path="/products/:slug/:id" element={<ProductDetailsPage />} />
        <Route path="/categories" element={<AllCategoriesPage />} />
        <Route path="/categories/:slug/:id" element={<CategoryDetailsPage />} />
        <Route path="/brands" element={<AllBrandsPage />} />
        <Route path="/brands/:slug/:id" element={<BrandDetailsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/fave" element={<WishlistPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy" element={<PrivacyPage />} />
        <Route path="/terms" element={<TermsPage />} />
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/shipping" element={<ShippingPage />} />
        <Route path="/returns" element={<ReturnsPage />} />
        <Route path="/size-guide" element={<SizeGuidePage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="/support-policy" element={<SupportPolicyPage />} />
        <Route path="/policies" element={<PoliciesPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}
