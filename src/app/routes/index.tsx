import { lazy, Suspense, useEffect } from "react";
import { Routes, Route, Outlet, useParams, Navigate } from "react-router-dom";
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

function SuspenseWrap({ children }: { children: React.ReactNode }) {
  return <Suspense fallback={<PageLoader />}>{children}</Suspense>;
}

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/en" replace />} />
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<SuspenseWrap><HomePage /></SuspenseWrap>} />
        <Route path="home" element={<SuspenseWrap><HomePage /></SuspenseWrap>} />
        <Route path="auth" element={<SuspenseWrap><AuthPage /></SuspenseWrap>} />
        <Route path="login" element={<SuspenseWrap><LoginPage /></SuspenseWrap>} />
        <Route path="register" element={<SuspenseWrap><RegisterPage /></SuspenseWrap>} />
        <Route path="forgot-password" element={<SuspenseWrap><ForgotPasswordPage /></SuspenseWrap>} />
        <Route path="reset-password" element={<SuspenseWrap><ResetPasswordPage /></SuspenseWrap>} />
        <Route path="products" element={<SuspenseWrap><ProductsPage /></SuspenseWrap>} />
        <Route path="products/:slug/:id" element={<SuspenseWrap><ProductDetailsPage /></SuspenseWrap>} />
        <Route path="categories" element={<SuspenseWrap><CategoriesPage /></SuspenseWrap>} />
        <Route path="categories/:slug/:id" element={<SuspenseWrap><CategoryDetailsPage /></SuspenseWrap>} />
        <Route path="brands" element={<SuspenseWrap><BrandsPage /></SuspenseWrap>} />
        <Route path="brands/:slug/:id" element={<SuspenseWrap><BrandDetailsPage /></SuspenseWrap>} />
        <Route path="cart" element={<SuspenseWrap><CartPage /></SuspenseWrap>} />
        <Route path="checkout" element={<SuspenseWrap><CheckoutPage /></SuspenseWrap>} />
        <Route path="orders" element={<SuspenseWrap><OrdersPage /></SuspenseWrap>} />
        <Route path="profile" element={<SuspenseWrap><ProfilePage /></SuspenseWrap>} />
        <Route path="wishlist" element={<SuspenseWrap><WishlistPage /></SuspenseWrap>} />
        <Route path="about" element={<SuspenseWrap><AboutPage /></SuspenseWrap>} />
        <Route path="contact" element={<SuspenseWrap><ContactPage /></SuspenseWrap>} />
        <Route path="privacy" element={<SuspenseWrap><PrivacyPage /></SuspenseWrap>} />
        <Route path="terms" element={<SuspenseWrap><TermsPage /></SuspenseWrap>} />
        <Route path="faq" element={<SuspenseWrap><FaqPage /></SuspenseWrap>} />
        <Route path="shipping" element={<SuspenseWrap><ShippingPage /></SuspenseWrap>} />
        <Route path="returns" element={<SuspenseWrap><ReturnsPage /></SuspenseWrap>} />
        <Route path="size-guide" element={<SuspenseWrap><SizeGuidePage /></SuspenseWrap>} />
        <Route path="help" element={<SuspenseWrap><HelpPage /></SuspenseWrap>} />
        <Route path="support-policy" element={<SuspenseWrap><SupportPolicyPage /></SuspenseWrap>} />
        <Route path="policies" element={<SuspenseWrap><PoliciesPage /></SuspenseWrap>} />
        <Route path="store-location" element={<SuspenseWrap><StoreLocationPage /></SuspenseWrap>} />
        <Route path="branches" element={<SuspenseWrap><BranchesPage /></SuspenseWrap>} />
        <Route path="features" element={<SuspenseWrap><FeaturesPage /></SuspenseWrap>} />
        <Route path="*" element={<SuspenseWrap><NotFoundPage /></SuspenseWrap>} />
      </Route>
    </Routes>
  );
}
