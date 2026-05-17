import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/hooks/useCart";
import { useUpdateCartItem } from "@/features/cart/hooks/useUpdateCartItem";
import { useRemoveCartItem } from "@/features/cart/hooks/useRemoveCartItem";
import { useClearCart } from "@/features/cart/hooks/useClearCart";
import CartItemCard from "@/features/cart/components/CartItemCard";
import CartSummary from "@/features/cart/components/CartSummary";
import CartLoader from "@/features/cart/components/CartLoader";
import CartEmpty from "@/features/cart/components/CartEmpty";
import CartError from "@/features/cart/components/CartError";

export default function CartPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading, error, refetch } = useCart();
  const { mutate: updateItem, isPending: isUpdating } = useUpdateCartItem();
  const { mutate: removeItem } = useRemoveCartItem();
  const { mutate: clearCartItems, isPending: isClearing } = useClearCart();

  if (isLoading) return <CartLoader />;

  if (error) {
    return (
      <CartError
        message={error instanceof Error ? error.message : t("cart.error.defaultMessage")}
        onRetry={() => refetch()}
      />
    );
  }

  const cart = data?.data;
  const items = cart?.products ?? [];
  const numOfCartItems = data?.numOfCartItems ?? 0;

  if (!cart || items.length === 0) {
    return <CartEmpty />;
  }

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
    navigate("/checkout");
  }, [navigate]);

  return (
    <>
      <PageHelmet title={t("cart.page.title")} description={t("cart.page.description")} />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("cart.page.hero.subtitle")}
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            {t("cart.page.hero.title")}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            {t("cart.page.hero.description")}
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: t("cart.page.breadcrumb.home"), href: "/" }, { label: t("cart.page.breadcrumb.cart") }]} className="mb-6" />

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

        <div className="grid gap-16 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8" data-tour="cart-items">
            {items.map((item) => (
              <CartItemCard
                key={item._id}
                item={item}
                onUpdate={handleUpdate}
                onRemove={handleRemove}
              />
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