import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import toast from "react-hot-toast";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useRemoveWishlistItem } from "@/features/wishlist/hooks/useRemoveWishlistItem";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import WishlistView from "@/features/wishlist/components/WishlistView";

export default function WishlistPage() {
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

  const { data, isLoading, error, refetch } = useWishlist();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveWishlistItem();
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);

  const items = data?.data ?? [];
  const count = data?.count ?? 0;

  const handleRemove = useCallback((productId: string) => {
    setRemovingId(productId);
    removeItem(productId, {
      onSettled: () => setRemovingId(null),
      onSuccess: () => toast.success(t("wishlist.toast.removed")),
      onError: (err) => toast.error(err.message),
    });
  }, [removeItem, t]);

  const handleAddToCart = useCallback((productId: string) => {
    setAddingToCartId(productId);
    addToCart(
      { productId },
      {
        onSettled: () => setAddingToCartId(null),
        onSuccess: () => toast.success(t("wishlist.toast.addedToCart")),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToCart, t]);

  return (
    <WishlistView
      items={items}
      count={count}
      lang={lang}
      isLoading={isLoading}
      error={error}
      removingId={removingId}
      addingToCartId={addingToCartId}
      isRemoving={isRemoving}
      isAddingToCart={isAddingToCart}
      onRemove={handleRemove}
      onAddToCart={handleAddToCart}
      onRetry={() => refetch()}
    />
  );
}
