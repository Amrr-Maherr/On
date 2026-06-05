import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useNavigate, useLocation } from "react-router-dom";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroImage from "@/assets/imgi_1_em-emc-AE-2-TC-d.jpg";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/hooks/useCart";
import { useUpdateCartItem } from "@/features/cart/hooks/useUpdateCartItem";
import { useRemoveCartItem } from "@/features/cart/hooks/useRemoveCartItem";
import { useClearCart } from "@/features/cart/hooks/useClearCart";
import CartItemCard from "@/features/cart/components/CartItemCard";
import CartSummary from "@/features/cart/components/CartSummary";
import { CampaignHeaderSkeleton } from "@/components/shared/Skeleton";
import CartEmpty from "@/features/cart/components/CartEmpty";
import CartError from "@/features/cart/components/CartError";

export default function CartPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(buildLocalizedPath("/login", lang));
    }
  }, [navigate, lang]);

  const { data, isLoading, error, refetch } = useCart();
  const { mutate: updateItem } = useUpdateCartItem();
  const { mutate: removeItem } = useRemoveCartItem();
  const { mutate: clearCartItems, isPending: isClearing } = useClearCart();

  const cart = data?.data;
  const items = cart?.products ?? [];
  const numOfCartItems = data?.numOfCartItems ?? 0;

  const handleUpdate = useCallback((itemId: string, count: number) => {
    if (count < 1) return;
    updateItem({ itemId, count });
  }, [updateItem]);

  const handleRemove = useCallback((itemId: string) => {
    removeItem(itemId);
  }, [removeItem]);

  const handleClearCart = useCallback(() => {
    toast(
      (toastInstance) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm">{t("cart.actions.confirmClear")}</p>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.dismiss(toastInstance.id)}
            >
              {t("cart.actions.cancel")}
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                clearCartItems();
                toast.dismiss(toastInstance.id);
              }}
            >
              {t("cart.actions.deleteAll")}
            </Button>
          </div>
        </div>
      ),
      { duration: Infinity },
    );
  }, [clearCartItems, t]);

  const handleCheckout = useCallback(() => {
    navigate(buildLocalizedPath("/checkout", lang));
  }, [navigate, lang]);

  if (isLoading) {
    return (
      <>
        <CampaignHeaderSkeleton />
        <div className="container-layout py-8">
          <div className="mb-8 h-8 w-56 animate-pulse rounded-xl bg-muted" />
          <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-8">
            <div className="space-y-4">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-5 rounded-2xl border border-border/50 p-5">
                  <div className="h-28 w-28 shrink-0 animate-pulse rounded-xl bg-muted md:h-32 md:w-32" />
                  <div className="flex flex-1 flex-col justify-between gap-3">
                    <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted" />
                    <div className="h-3 w-1/4 animate-pulse rounded-lg bg-muted" />
                    <div className="flex items-center justify-between">
                      <div className="flex gap-1">
                        <div className="h-9 w-9 animate-pulse rounded-xl bg-muted" />
                        <div className="h-9 w-12 animate-pulse rounded-lg bg-muted" />
                        <div className="h-9 w-9 animate-pulse rounded-xl bg-muted" />
                      </div>
                      <div className="h-5 w-20 animate-pulse rounded-lg bg-muted" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="rounded-2xl border border-border/50 p-6">
                <div className="mb-5 h-5 w-32 animate-pulse rounded-lg bg-muted" />
                <div className="space-y-4">
                  <div className="h-4 w-full animate-pulse rounded-lg bg-muted" />
                  <div className="h-4 w-full animate-pulse rounded-lg bg-muted" />
                  <div className="h-4 w-full animate-pulse rounded-lg bg-muted" />
                  <div className="h-8 w-full animate-pulse rounded-full bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <CartError
        message={error instanceof Error ? error.message : t("cart.error.defaultMessage")}
        onRetry={() => refetch()}
      />
    );
  }

  if (!cart || items.length === 0) {
    return <CartEmpty />;
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
        <Breadcrumb items={[{ label: t("cart.page.breadcrumb.home"), href: buildLocalizedPath("/", lang) }, { label: t("cart.page.breadcrumb.cart") }]} className="mb-6" />

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
            onClick={handleClearCart}
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
                  onUpdate={handleUpdate}
                  onRemove={handleRemove}
                />
              </ScrollReveal>
            ))}
          </div>

          <div className="relative" data-tour="cart-summary">
            <CartSummary
              totalCartPrice={cart.totalCartPrice}
              numOfCartItems={numOfCartItems}
              onCheckout={handleCheckout}
            />
          </div>
        </div>
      </div>
    </>
  );
}