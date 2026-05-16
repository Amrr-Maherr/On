import { memo, useCallback, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingCart, Heart, Loader2 } from "lucide-react";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import { useAddToWishlist } from "@/features/wishlist/hooks/useAddToWishlist";
import toast from "react-hot-toast";

interface ProductActionsProps {
  productId: string;
}

const ProductActions = memo(function ProductActions({ productId }: ProductActionsProps) {
  const { t } = useTranslation();
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const { mutate: addToWishlist, isPending: isAddingToWishlist } =
    useAddToWishlist();

  const handleAddToCart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    addToCart(
      { productId },
      {
        onSuccess: () => toast.success(t("products.actions.addedToCart")),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToCart, productId, t]);

  const handleAddToFav = useCallback((e: MouseEvent) => {
    e.preventDefault();
    addToWishlist(
      { productId },
      {
        onSuccess: () => toast.success(t("products.actions.addedToWishlist")),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToWishlist, productId, t]);

  const isPending = isAddingToCart || isAddingToWishlist;

  return (
    <div className="flex flex-col gap-4">
      <button
        className="flex h-16 w-full items-center justify-center gap-3 bg-foreground px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] disabled:opacity-50"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isAddingToCart ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <ShoppingCart className="h-5 w-5" strokeWidth={2.5} />
        )}
        {isAddingToCart ? t("products.actions.adding") : t("products.actions.addToBag")}
      </button>
      <button
        className="flex h-16 w-full items-center justify-center gap-3 border-2 border-foreground bg-transparent px-8 py-4 text-sm font-black uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:bg-foreground hover:text-background active:scale-[0.98] disabled:opacity-50"
        onClick={handleAddToFav}
        disabled={isPending}
      >
        {isAddingToWishlist ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Heart className="h-5 w-5" strokeWidth={2.5} />
        )}
        {t("products.actions.favorite")}
      </button>
    </div>
  );
});

export default ProductActions;
