import { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Loader from "@/components/shared/Loader";
import HomePage from "@/features/home/pages/HomePage";
import AuthPage from "@/features/auth/pages/AuthPage";
import LoginPage from "@/features/auth/pages/LoginPage";
import RegisterPage from "@/features/auth/pages/RegisterPage";
import ForgotPasswordPage from "@/features/auth/pages/ForgotPasswordPage";
import ResetPasswordPage from "@/features/auth/pages/ResetPasswordPage";
import CategoryDetailsPage from "@/features/category-details/pages/CategoryDetailsPage";
import AllBrandsPage from "@/features/all-brands/pages/AllBrandsPage";
import BrandDetailsPage from "@/features/brand-details/pages/BrandDetailsPage";
import AllCategoriesPage from "@/features/all-categories/pages/AllCategoriesPage";
import CartPage from "@/features/cart/pages/CartPage";
import CheckoutPage from "@/features/checkout/pages/CheckoutPage";
import OrdersPage from "@/features/orders/pages/OrdersPage";
import ProfilePage from "@/features/profile/pages/ProfilePage";
import WishlistPage from "@/features/wishlist/pages/WishlistPage";
import AboutPage from "@/features/footer-pages/pages/AboutPage";
import ContactPage from "@/features/footer-pages/pages/ContactPage";
import PrivacyPage from "@/features/footer-pages/pages/PrivacyPage";
import TermsPage from "@/features/footer-pages/pages/TermsPage";
import FaqPage from "@/features/footer-pages/pages/FaqPage";
import ShippingPage from "@/features/footer-pages/pages/ShippingPage";
import ReturnsPage from "@/features/footer-pages/pages/ReturnsPage";
import SizeGuidePage from "@/features/footer-pages/pages/SizeGuidePage";
import HelpPage from "@/features/footer-pages/pages/HelpPage";
import SupportPolicyPage from "@/features/footer-pages/pages/SupportPolicyPage";
import PoliciesPage from "@/features/footer-pages/pages/PoliciesPage";
import NotFoundPage from "@/features/not-found/pages/NotFoundPage";

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
