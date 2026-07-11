import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { ShoppingCart, ArrowRight, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroImage from "@/assets/imgi_1_em-emc-AE-2-TC-d.jpg";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CartItemCard from "@/features/cart/components/CartItemCard";
import CartSummary from "@/features/cart/components/CartSummary";
import { CartPageSkeleton } from "@/features/cart/components/CartPageSkeleton";
import ErrorState from "@/components/shared/Error";
import EmptyState from "@/components/shared/EmptyState";
import type { CartItem } from "@/features/cart/types";

type CartViewProps = {
  cart: {
    products: CartItem[];
    totalCartPrice: number;
  } | undefined;
  numOfCartItems: number;
  lang: string;
  isLoading: boolean;
  error: Error | null;
  isClearing: boolean;
  onUpdate: (itemId: string, count: number) => void;
  onRemove: (itemId: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
  onRetry: () => void;
}

export default function CartView({
  cart,
  numOfCartItems,
  lang,
  isLoading,
  error,
  isClearing,
  onUpdate,
  onRemove,
  onClearCart,
  onCheckout,
  onRetry,
}: CartViewProps) {
  const { t } = useTranslation();
  const items = cart?.products ?? [];

  if (isLoading) {
    return <CartPageSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        title={t("cart.error.title")}
        message={error instanceof Error ? error.message : t("cart.error.defaultMessage")}
        onRetry={onRetry}
        retryLabel={t("cart.error.retry")}
      />
    );
  }

  if (!cart || items.length === 0) {
    return (
      <EmptyState
        title={t("cart.empty.title")}
        description={t("cart.empty.description")}
        icon={<ShoppingCart className="h-9 w-9 text-muted-foreground/40" />}
        action={
          <Link
            to={`/products`}
            className="inline-flex items-center gap-2 rounded-none bg-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
          >
            {t("cart.empty.shopNow")}
            <ArrowRight className="h-4 w-4" />
          </Link>
        }
      />
    );
  }

  return (
    <>
      <PageHelmet title={t("cart.page.title")} description={t("cart.page.description")} />

      <CampaignHeader
        subtitle={t("cart.page.hero.subtitle")}
        title={t("cart.page.hero.title")}
        description={t("cart.page.hero.description")}
        backgroundImage={heroImage}
      />

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: t("cart.page.breadcrumb.home"), href: "/" }, { label: t("cart.page.breadcrumb.cart") }]} className="mb-6" />

        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between border-l-4 border-foreground pl-6">
            <div>
              <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                {t("cart.page.catalog.label")}
              </span>
              <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
                {t("cart.page.catalog.title")}
              </h1>
              <p className="mt-2 text-sm font-bold text-muted-foreground/60">
                {t("cart.page.catalog.count", { count: numOfCartItems })}
              </p>
            </div>
            <button
              className="hidden items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-destructive/60 transition-colors hover:text-destructive md:flex"
              onClick={onClearCart}
              disabled={isClearing}
            >
              <Trash2 className="h-4 w-4" />
              {isClearing ? t("cart.actions.clearing") : t("cart.actions.clearBag")}
            </button>
          </div>
        </ScrollReveal>

        <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8" data-tour="cart-items">
            {items.map((item, index) => (
              <ScrollReveal key={item._id} delay={index * 0.04} direction="up" distance={16}>
                <CartItemCard
                  item={item}
                  onUpdate={onUpdate}
                  onRemove={onRemove}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="relative" data-tour="cart-summary">
            <CartSummary
              totalCartPrice={cart.totalCartPrice}
              numOfCartItems={numOfCartItems}
              onCheckout={onCheckout}
            />
          </div>
        </div>
      </div>
    </>
  );
}
