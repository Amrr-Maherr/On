import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Heart, ShoppingCart, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { WishlistProduct } from "@/features/wishlist/types/wishlist";

interface WishlistItemCardProps {
  product: WishlistProduct;
  onRemove: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  isRemoving?: boolean;
  isAddingToCart?: boolean;
}

const WishlistItemCard = memo(({
  product,
  onRemove,
  onAddToCart,
  isRemoving,
  isAddingToCart,
}: WishlistItemCardProps) => {
  const { t } = useTranslation();
  const displayPrice = product.priceAfterDiscount ?? product.price;
  const hasDiscount = !!product.priceAfterDiscount;

  return (
    <div
      className={cn(
        "flex gap-5 rounded-none border-2 border-border/30 bg-card p-5 transition-all duration-300",
        (isRemoving || isAddingToCart) && "pointer-events-none opacity-60",
      )}
    >
      <Link
        to={`/products/${product.title}/${product._id}`}
        className="h-28 w-28 shrink-0 overflow-hidden rounded-none bg-muted/50 transition-opacity hover:opacity-80 md:h-32 md:w-32"
      >
        <img
          src={product.imageCover}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </Link>

      <div className="flex flex-1 flex-col justify-between gap-3 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <Link
              to={`/products/${product.title}/${product._id}`}
              className="truncate text-base font-semibold text-foreground transition-colors hover:text-muted-foreground/80"
            >
              {product.title}
            </Link>
            <div className="mt-1 flex items-center gap-2">
              <span
                className={cn(
                  "text-sm",
                  hasDiscount
                    ? "text-muted-foreground/40 line-through"
                    : "text-muted-foreground/70",
                )}
              >
                {product.price?.toLocaleString()} EGP
              </span>
              {hasDiscount && (
                <span className="text-lg font-bold text-foreground">
                  {displayPrice.toLocaleString()} EGP
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => onRemove(product._id)}
            disabled={isRemoving}
            aria-label={t("wishlist.item.remove")}
            className="flex shrink-0 items-center justify-center rounded-none border-2 border-transparent p-1.5 text-muted-foreground/40 transition-all duration-300 hover:border-destructive/20 hover:bg-destructive/10 hover:text-destructive disabled:opacity-50"
          >
            {isRemoving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Heart className="h-4 w-4" fill="currentColor" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between" data-tour="wishlist-actions">
          {product.ratingsAverage && (
            <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
              &#9733; {product.ratingsAverage.toFixed(1)} / 5
            </span>
          )}
          <button
            onClick={() => onAddToCart(product._id)}
            disabled={isAddingToCart}
            className="flex h-10 items-center gap-3 rounded-none bg-foreground px-6 text-[10px] font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:opacity-90 active:scale-[0.98] disabled:opacity-50"
          >
            {isAddingToCart ? (
              <Loader2 className="h-3.5 w-3.5 animate-spin" />
            ) : (
              <ShoppingCart className="h-3.5 w-3.5" />
            )}
            {isAddingToCart ? t("wishlist.item.adding") : t("wishlist.item.addToCart")}
          </button>
        </div>
      </div>
    </div>
  );
});

export default WishlistItemCard;