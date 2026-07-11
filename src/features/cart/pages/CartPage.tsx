import { useEffect, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useCart } from "@/features/cart/hooks/useCart";
import { useUpdateCartItem } from "@/features/cart/hooks/useUpdateCartItem";
import { useRemoveCartItem } from "@/features/cart/hooks/useRemoveCartItem";
import { useClearCart } from "@/features/cart/hooks/useClearCart";
import CartView from "@/features/cart/components/CartView";

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
            <button
              className="rounded-none border border-border px-3 py-1 text-xs font-bold"
              onClick={() => toast.dismiss(toastInstance.id)}
            >
              {t("cart.actions.cancel")}
            </button>
            <button
              className="rounded-none bg-destructive px-3 py-1 text-xs font-bold text-white"
              onClick={() => {
                clearCartItems();
                toast.dismiss(toastInstance.id);
              }}
            >
              {t("cart.actions.deleteAll")}
            </button>
          </div>
        </div>
      ),
      { duration: Infinity },
    );
  }, [clearCartItems, t]);

  const handleCheckout = useCallback(() => {
    navigate(buildLocalizedPath("/checkout", lang));
  }, [navigate, lang]);

  return (
    <CartView
      cart={cart}
      numOfCartItems={numOfCartItems}
      isLoading={isLoading}
      error={error}
      isClearing={isClearing}
      onUpdate={handleUpdate}
      onRemove={handleRemove}
      onClearCart={handleClearCart}
      onCheckout={handleCheckout}
      onRetry={() => refetch()}
    />
  );
}
