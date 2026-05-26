import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Loader from "@/components/shared/Loader";
// Lazy loading all feature pages
const HomePage = lazy(() => import("@/features/home/pages/HomePage"));
const AuthPage = lazy(() => import("@/features/auth/pages/AuthPage"));
const LoginPage = lazy(() => import("@/features/auth/pages/LoginPage"));
const RegisterPage = lazy(() => import("@/features/auth/pages/RegisterPage"));
const ForgotPasswordPage = lazy(
  () => import("@/features/auth/pages/ForgotPasswordPage"),
);
const ResetPasswordPage = lazy(
  () => import("@/features/auth/pages/ResetPasswordPage"),
);
const AllProductsPage = lazy(
  () => import("@/features/products/pages/ProductsPage"),
);
const ProductDetailsPage = lazy(
  () => import("@/features/product-details/pages/ProductDetailsPage"),
);
const AllCategoriesPage = lazy(
  () => import("@/features/categories/pages/CategoriesPage"),
);
const CategoryDetailsPage = lazy(
  () => import("@/features/category-details/pages/CategoryDetailsPage"),
);
const AllBrandsPage = lazy(() => import("@/features/brands/pages/BrandsPage"));
const BrandDetailsPage = lazy(
  () => import("@/features/brand-details/pages/BrandDetailsPage"),
);
const CartPage = lazy(() => import("@/features/cart/pages/CartPage"));
const CheckoutPage = lazy(
  () => import("@/features/checkout/pages/CheckoutPage"),
);
const OrdersPage = lazy(() => import("@/features/orders/pages/OrdersPage"));
const ProfilePage = lazy(() => import("@/features/profile/pages/ProfilePage"));
const WishlistPage = lazy(
  () => import("@/features/wishlist/pages/WishlistPage"),
);
const AboutPage = lazy(() => import("@/features/footer-pages/pages/AboutPage"));
const ContactPage = lazy(
  () => import("@/features/footer-pages/pages/ContactPage"),
);
const PrivacyPage = lazy(
  () => import("@/features/footer-pages/pages/PrivacyPage"),
);
const TermsPage = lazy(() => import("@/features/footer-pages/pages/TermsPage"));
const FaqPage = lazy(() => import("@/features/footer-pages/pages/FaqPage"));
const ShippingPage = lazy(
  () => import("@/features/footer-pages/pages/ShippingPage"),
);
const ReturnsPage = lazy(
  () => import("@/features/footer-pages/pages/ReturnsPage"),
);
const SizeGuidePage = lazy(
  () => import("@/features/footer-pages/pages/SizeGuidePage"),
);
const HelpPage = lazy(() => import("@/features/footer-pages/pages/HelpPage"));
const SupportPolicyPage = lazy(
  () => import("@/features/footer-pages/pages/SupportPolicyPage"),
);
const PoliciesPage = lazy(
  () => import("@/features/footer-pages/pages/PoliciesPage"),
);
const StoreLocationPage = lazy(
  () => import("@/features/footer-pages/pages/StoreLocationPage"),
);
const BranchesPage = lazy(
  () => import("@/features/branches/pages/BranchesPage"),
);
const NotFoundPage = lazy(
  () => import("@/features/not-found/pages/NotFoundPage"),
);

import { useLocation } from "react-router-dom";

function LangLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    const validLang = lang === "ar" ? "ar" : "en";
    if (validLang !== i18n.language) {
      i18n.changeLanguage(validLang);
    }
    const dir = validLang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = validLang;
  }, [lang, i18n]);

  return <Outlet />;
}

function RootRedirect() {
  const location = useLocation();
  return <Navigate to={`/en${location.pathname}${location.search}`} replace />;
}

const AllProductsPage = lazy(() => import("@/features/all-products/pages/AllProductsPage"));
const ProductDetailsPage = lazy(() => import("@/features/product-details/pages/ProductDetailsPage"));

export default function AppRoutes() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<Navigate to="/en" replace />} />
        <Route path="/:lang" element={<LangLayout />}>
          <Route index element={<HomePage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="auth" element={<AuthPage />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="register" element={<RegisterPage />} />
          <Route path="forgot-password" element={<ForgotPasswordPage />} />
          <Route path="reset-password" element={<ResetPasswordPage />} />
          <Route path="products" element={<AllProductsPage />} />
          <Route path="products/:slug/:id" element={<ProductDetailsPage />} />
          <Route path="categories" element={<AllCategoriesPage />} />
          <Route path="categories/:slug/:id" element={<CategoryDetailsPage />} />
          <Route path="brands" element={<AllBrandsPage />} />
          <Route path="brands/:slug/:id" element={<BrandDetailsPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="checkout" element={<CheckoutPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="wishlist" element={<WishlistPage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="privacy" element={<PrivacyPage />} />
          <Route path="terms" element={<TermsPage />} />
          <Route path="faq" element={<FaqPage />} />
          <Route path="shipping" element={<ShippingPage />} />
          <Route path="returns" element={<ReturnsPage />} />
          <Route path="size-guide" element={<SizeGuidePage />} />
          <Route path="help" element={<HelpPage />} />
          <Route path="support-policy" element={<SupportPolicyPage />} />
          <Route path="policies" element={<PoliciesPage />} />
          <Route path="store-location" element={<StoreLocationPage />} />
          <Route path="branches" element={<BranchesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Suspense>
  );
}
