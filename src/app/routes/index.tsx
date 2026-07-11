import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Navigate, Outlet, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { PageLoader } from "@/components/shared/PageLoader";

const HomePage = lazy(() => import("@/app/pages/Home"));
const AuthPage = lazy(() => import("@/app/pages/Auth"));
const LoginPage = lazy(() => import("@/app/pages/Login"));
const RegisterPage = lazy(() => import("@/app/pages/Register"));
const ForgotPasswordPage = lazy(() => import("@/app/pages/ForgotPassword"));
const ResetPasswordPage = lazy(() => import("@/app/pages/ResetPassword"));
const ProductsPage = lazy(() => import("@/app/pages/Products"));
const ProductDetailsPage = lazy(() => import("@/app/pages/ProductDetails"));
const CategoriesPage = lazy(() => import("@/app/pages/Categories"));
const CategoryDetailsPage = lazy(() => import("@/app/pages/CategoryDetails"));
const BrandsPage = lazy(() => import("@/app/pages/Brands"));
const BrandDetailsPage = lazy(() => import("@/app/pages/BrandDetails"));
const CartPage = lazy(() => import("@/app/pages/Cart"));
const CheckoutPage = lazy(() => import("@/app/pages/Checkout"));
const OrdersPage = lazy(() => import("@/app/pages/Orders"));
const ProfilePage = lazy(() => import("@/app/pages/Profile"));
const WishlistPage = lazy(() => import("@/app/pages/Wishlist"));
const AboutPage = lazy(() => import("@/app/pages/About"));
const ContactPage = lazy(() => import("@/app/pages/Contact"));
const PrivacyPage = lazy(() => import("@/app/pages/Privacy"));
const TermsPage = lazy(() => import("@/app/pages/Terms"));
const FaqPage = lazy(() => import("@/app/pages/Faq"));
const ShippingPage = lazy(() => import("@/app/pages/Shipping"));
const ReturnsPage = lazy(() => import("@/app/pages/Returns"));
const SizeGuidePage = lazy(() => import("@/app/pages/SizeGuide"));
const HelpPage = lazy(() => import("@/app/pages/Help"));
const SupportPolicyPage = lazy(() => import("@/app/pages/SupportPolicy"));
const PoliciesPage = lazy(() => import("@/app/pages/Policies"));
const StoreLocationPage = lazy(() => import("@/app/pages/StoreLocation"));
const BranchesPage = lazy(() => import("@/app/pages/Branches"));
const FeaturesPage = lazy(() => import("@/app/pages/Features"));
const NotFoundPage = lazy(() => import("@/app/pages/NotFound"));

import { useLocation } from "react-router-dom";

function LangLayout() {
  const { lang } = useParams();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && lang !== i18n.language) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  return <Outlet />;
}

function RootRedirect() {
  const location = useLocation();
  return <Navigate to={`/en${location.pathname}${location.search}`} replace />;
}

export default function AppRoutes() {
  return (
    <Suspense fallback={<PageLoader />}>
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
          <Route path="products" element={<ProductsPage />} />
          <Route path="products/:slug/:id" element={<ProductDetailsPage />} />
          <Route path="categories" element={<CategoriesPage />} />
          <Route
            path="categories/:slug/:id"
            element={<CategoryDetailsPage />}
          />
          <Route path="brands" element={<BrandsPage />} />
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
          <Route path="features" element={<FeaturesPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
        <Route path="*" element={<RootRedirect />} />
      </Routes>
    </Suspense>
  );
}
