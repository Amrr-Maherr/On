import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import {
  Home,
  ShoppingCart,
  Search,
  Heart,
  User,
  Package,
  CreditCard,
  MapPin,
  Tag,
  Layers,
  Grid3x3,
  HelpCircle,
  FileText,
  Phone,
  Shield,
  Truck,
  RotateCcw,
  Ruler,
  Info,
  AlertTriangle,
} from "lucide-react";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import ScrollReveal from "@/components/shared/ScrollReveal";

const features = [
  {
    title: "Home",
    description: "Hero section, featured products, trending items, categories, brands, testimonials, and more.",
    icon: Home,
    href: "/",
    category: "core",
  },
  {
    title: "Products",
    description: "Browse all products with filters for category, brand, price range, and sorting options.",
    icon: Search,
    href: "/products",
    category: "core",
  },
  {
    title: "Product Details",
    description: "Full product page with gallery, reviews, ratings, Q&A, related products, and add to cart/wishlist.",
    icon: Tag,
    href: "/products",
    category: "core",
  },
  {
    title: "Categories",
    description: "Explore product categories with filtering and pagination.",
    icon: Grid3x3,
    href: "/categories",
    category: "core",
  },
  {
    title: "Brands",
    description: "Browse all brands and view brand-specific product collections.",
    icon: Layers,
    href: "/brands",
    category: "core",
  },
  {
    title: "Shopping Cart",
    description: "Manage your cart items, update quantities, remove items, and proceed to checkout.",
    icon: ShoppingCart,
    href: "/cart",
    category: "commerce",
  },
  {
    title: "Checkout",
    description: "Complete your order with cash on delivery or online card payment via Stripe.",
    icon: CreditCard,
    href: "/checkout",
    category: "commerce",
  },
  {
    title: "Orders",
    description: "View your order history with detailed order information and status.",
    icon: Package,
    href: "/orders",
    category: "commerce",
  },
  {
    title: "Wishlist",
    description: "Save your favorite products and quickly add them to your cart.",
    icon: Heart,
    href: "/wishlist",
    category: "commerce",
  },
  {
    title: "User Profile",
    description: "View and edit your profile information including name, email, and phone number.",
    icon: User,
    href: "/profile",
    category: "account",
  },
  {
    title: "Authentication",
    description: "Login, register, forgot password, and reset password with Google OAuth support.",
    icon: Shield,
    href: "/login",
    category: "account",
  },
  {
    title: "Store Locations",
    description: "Find physical store locations on an interactive map.",
    icon: MapPin,
    href: "/store-location",
    category: "info",
  },
  {
    title: "Branches",
    description: "View all branches with an interactive map and branch cards.",
    icon: MapPin,
    href: "/branches",
    category: "info",
  },
  {
    title: "About Us",
    description: "Learn about our story, mission, and values.",
    icon: Info,
    href: "/about",
    category: "info",
  },
  {
    title: "Contact Us",
    description: "Get in touch with our team for support and inquiries.",
    icon: Phone,
    href: "/contact",
    category: "info",
  },
  {
    title: "FAQ",
    description: "Frequently asked questions about our products and services.",
    icon: HelpCircle,
    href: "/faq",
    category: "info",
  },
  {
    title: "Shipping Info",
    description: "Details about shipping methods, costs, and delivery times.",
    icon: Truck,
    href: "/shipping",
    category: "info",
  },
  {
    title: "Returns",
    description: "Return policy, process, and eligibility information.",
    icon: RotateCcw,
    href: "/returns",
    category: "info",
  },
  {
    title: "Size Guide",
    description: "Comprehensive sizing chart to help you find the perfect fit.",
    icon: Ruler,
    href: "/size-guide",
    category: "info",
  },
  {
    title: "Help Center",
    description: "Support articles and resources to help you with any issues.",
    icon: HelpCircle,
    href: "/help",
    category: "info",
  },
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal data.",
    icon: Shield,
    href: "/privacy",
    category: "legal",
  },
  {
    title: "Terms & Conditions",
    description: "Terms of service governing your use of our platform.",
    icon: FileText,
    href: "/terms",
    category: "legal",
  },
  {
    title: "Policies",
    description: "Our store policies for a safe and fair shopping experience.",
    icon: FileText,
    href: "/policies",
    category: "legal",
  },
  {
    title: "Support Policy",
    description: "Customer support guidelines and service level commitments.",
    icon: AlertTriangle,
    href: "/support-policy",
    category: "legal",
  },
];

const categories = [
  { key: "core", label: "Core Features" },
  { key: "commerce", label: "Commerce" },
  { key: "account", label: "Account" },
  { key: "info", label: "Information" },
  { key: "legal", label: "Legal" },
] as const;

export default function FeaturesPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <>
      <PageHelmet title="Features" description="Explore all features available in the ON premium sportswear store." />

      <CampaignHeader
        subtitle="Platform"
        title="ALL FEATURES"
        description="A complete overview of every feature and page available in the ON premium sportswear eCommerce platform."
        backgroundImage="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-layout py-8">
        <Breadcrumb
          items={[
            { label: "Home", href: buildLocalizedPath("/", lang) },
            { label: "Features" },
          ]}
          className="mb-6"
        />

        <ScrollReveal>
          <div className="mb-16 border-l-4 border-foreground pl-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
              Platform Overview
            </span>
            <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              FEATURES
            </h1>
            <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
              {features.length} features across {categories.length} categories
            </p>
          </div>
        </ScrollReveal>

        {categories.map((category) => {
          const categoryFeatures = features.filter((f) => f.category === category.key);
          if (categoryFeatures.length === 0) return null;

          return (
            <div key={category.key} className="mb-16">
              <ScrollReveal>
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                    {category.label}
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-tour={`features-${category.key}`}>
                {categoryFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <ScrollReveal key={feature.title} delay={index * 0.05} direction="up" distance={16}>
                      <Link
                        to={buildLocalizedPath(feature.href, lang)}
                        className="group block border border-border/60 bg-card p-8 transition-all duration-300 hover:border-foreground hover:bg-foreground"
                      >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border/60 bg-background transition-all duration-300 group-hover:border-background group-hover:bg-background">
                          <Icon className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                        </div>
                        <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-foreground">
                          {feature.title}
                        </h3>
                        <p className="text-sm font-bold leading-relaxed text-muted-foreground/60">
                          {feature.description}
                        </p>
                        <div className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 transition-colors duration-300 group-hover:text-background/60">
                          Explore &rarr;
                        </div>
                      </Link>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
