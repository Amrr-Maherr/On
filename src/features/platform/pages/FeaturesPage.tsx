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
import type { ComponentType } from "react";

type Feature = {
  titleKey: string;
  descriptionKey: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }>;
  href: string;
  category: string;
};

const features: Feature[] = [
  { titleKey: "features.items.home.title", descriptionKey: "features.items.home.description", icon: Home, href: "/", category: "core" },
  { titleKey: "features.items.products.title", descriptionKey: "features.items.products.description", icon: Search, href: "/products", category: "core" },
  { titleKey: "features.items.productDetails.title", descriptionKey: "features.items.productDetails.description", icon: Tag, href: "/products", category: "core" },
  { titleKey: "features.items.categories.title", descriptionKey: "features.items.categories.description", icon: Grid3x3, href: "/categories", category: "core" },
  { titleKey: "features.items.brands.title", descriptionKey: "features.items.brands.description", icon: Layers, href: "/brands", category: "core" },
  { titleKey: "features.items.cart.title", descriptionKey: "features.items.cart.description", icon: ShoppingCart, href: "/cart", category: "commerce" },
  { titleKey: "features.items.checkout.title", descriptionKey: "features.items.checkout.description", icon: CreditCard, href: "/checkout", category: "commerce" },
  { titleKey: "features.items.orders.title", descriptionKey: "features.items.orders.description", icon: Package, href: "/orders", category: "commerce" },
  { titleKey: "features.items.wishlist.title", descriptionKey: "features.items.wishlist.description", icon: Heart, href: "/wishlist", category: "commerce" },
  { titleKey: "features.items.profile.title", descriptionKey: "features.items.profile.description", icon: User, href: "/profile", category: "account" },
  { titleKey: "features.items.auth.title", descriptionKey: "features.items.auth.description", icon: Shield, href: "/login", category: "account" },
  { titleKey: "features.items.storeLocation.title", descriptionKey: "features.items.storeLocation.description", icon: MapPin, href: "/store-location", category: "info" },
  { titleKey: "features.items.branches.title", descriptionKey: "features.items.branches.description", icon: MapPin, href: "/branches", category: "info" },
  { titleKey: "features.items.about.title", descriptionKey: "features.items.about.description", icon: Info, href: "/about", category: "info" },
  { titleKey: "features.items.contact.title", descriptionKey: "features.items.contact.description", icon: Phone, href: "/contact", category: "info" },
  { titleKey: "features.items.faq.title", descriptionKey: "features.items.faq.description", icon: HelpCircle, href: "/faq", category: "info" },
  { titleKey: "features.items.shipping.title", descriptionKey: "features.items.shipping.description", icon: Truck, href: "/shipping", category: "info" },
  { titleKey: "features.items.returns.title", descriptionKey: "features.items.returns.description", icon: RotateCcw, href: "/returns", category: "info" },
  { titleKey: "features.items.sizeGuide.title", descriptionKey: "features.items.sizeGuide.description", icon: Ruler, href: "/size-guide", category: "info" },
  { titleKey: "features.items.help.title", descriptionKey: "features.items.help.description", icon: HelpCircle, href: "/help", category: "info" },
  { titleKey: "features.items.privacy.title", descriptionKey: "features.items.privacy.description", icon: Shield, href: "/privacy", category: "legal" },
  { titleKey: "features.items.terms.title", descriptionKey: "features.items.terms.description", icon: FileText, href: "/terms", category: "legal" },
  { titleKey: "features.items.policies.title", descriptionKey: "features.items.policies.description", icon: FileText, href: "/policies", category: "legal" },
  { titleKey: "features.items.supportPolicy.title", descriptionKey: "features.items.supportPolicy.description", icon: AlertTriangle, href: "/support-policy", category: "legal" },
];

const categoryKeys = ["core", "commerce", "account", "info", "legal"] as const;

export default function FeaturesPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <>
      <PageHelmet title={t("features.page.title")} description={t("features.page.description")} />

      <CampaignHeader
        subtitle={t("features.hero.subtitle")}
        title={t("features.hero.title")}
        description={t("features.hero.description")}
        backgroundImage="https://images.unsplash.com/photo-1556906781-9a412961c28c?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-layout py-8">
        <Breadcrumb
          items={[
            { label: t("features.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
            { label: t("features.breadcrumb.features") },
          ]}
          className="mb-6"
        />

        <ScrollReveal>
          <div className="mb-16 border-l-4 border-foreground pl-6">
            <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
              {t("features.heading.label")}
            </span>
            <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              {t("features.heading.title")}
            </h1>
            <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
              {t("features.heading.count", { features: features.length, categories: categoryKeys.length })}
            </p>
          </div>
        </ScrollReveal>

        {categoryKeys.map((categoryKey) => {
          const categoryFeatures = features.filter((f) => f.category === categoryKey);
          if (categoryFeatures.length === 0) return null;

          return (
            <div key={categoryKey} className="mb-16">
              <ScrollReveal>
                <div className="mb-8 flex items-center gap-4">
                  <div className="h-px flex-1 bg-border/40" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                    {t(`features.categories.${categoryKey}`)}
                  </span>
                  <div className="h-px flex-1 bg-border/40" />
                </div>
              </ScrollReveal>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3" data-tour={`features-${categoryKey}`}>
                {categoryFeatures.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <ScrollReveal key={feature.titleKey} delay={index * 0.05} direction="up" distance={16}>
                      <Link
                        to={buildLocalizedPath(feature.href, lang)}
                        className="group block border border-border/60 bg-card p-8 transition-all duration-300 hover:border-foreground hover:bg-foreground"
                      >
                        <div className="mb-6 flex h-12 w-12 items-center justify-center border border-border/60 bg-background transition-all duration-300 group-hover:border-background group-hover:bg-background">
                          <Icon className="h-5 w-5 text-foreground transition-transform duration-300 group-hover:scale-110" strokeWidth={2} />
                        </div>
                        <h3 className="mb-2 text-lg font-black uppercase tracking-tight text-foreground transition-colors duration-300 group-hover:text-background">
                          {t(feature.titleKey)}
                        </h3>
                        <p className="text-sm font-bold leading-relaxed text-muted-foreground/60 transition-colors duration-300 group-hover:text-background/70">
                          {t(feature.descriptionKey)}
                        </p>
                        <div className="mt-6 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40 transition-colors duration-300 group-hover:text-background/60">
                          {t("features.explore")} &rarr;
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
