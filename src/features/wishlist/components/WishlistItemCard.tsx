import { memo } from "react";
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
  const displayPrice = product.priceAfterDiscount ?? product.price;
  const hasDiscount = !!product.priceAfterDiscount;

  return (
    <div
      className={cn(
        "flex gap-4 rounded-2xl border border-border/50 p-4",
        (isRemoving || isAddingToCart) && "pointer-events-none opacity-60",
      )}
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted/50 md:h-28 md:w-28">
        <img
          src={product.imageCover}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium text-foreground/90">{product.title}</h3>
            <div className="mt-0.5 flex items-center gap-2">
              <span
                className={cn(
                  "text-sm",
                  hasDiscount
                    ? "text-muted-foreground/50 line-through"
                    : "text-muted-foreground/70",
                )}
              >
                {product.price.toLocaleString()} EGP
              </span>
              {hasDiscount && (
                <span className="text-sm font-medium text-foreground">
                   {displayPrice.toLocaleString()} EGP
                </span>
              )}
            </div>
          </div>
          <button
            onClick={() => onRemove(product._id)}
            disabled={isRemoving}
            aria-label="Remove from wishlist"
            className="flex shrink-0 items-center justify-center rounded-xl p-1.5 text-muted-foreground/50 transition-colors duration-200 hover:bg-destructive/10 hover:text-destructive disabled:opacity-50"
          >
            {isRemoving ? (
              <Loader2 className="h-4 w-4 animate-spin" />
            ) : (
              <Heart className="h-4 w-4" fill="currentColor" />
            )}
          </button>
        </div>

        <div className="flex items-center justify-between">
          {product.ratingsAverage && (
            <span className="text-xs text-muted-foreground/50">
              {product.ratingsAverage.toFixed(1)} / 5
            </span>
          )}
          <button
            onClick={() => onAddToCart(product._id)}
            disabled={isAddingToCart}
            className="flex items-center gap-1.5 rounded-xl border border-border/50 px-3.5 py-1.5 text-xs text-muted-foreground/80 transition-all duration-200 hover:border-border hover:bg-muted/30 hover:text-foreground active:scale-[0.97] disabled:opacity-50"
          >
            {isAddingToCart ? (
              <Loader2 className="h-3 w-3 animate-spin" />
            ) : (
              <ShoppingCart className="h-3 w-3" />
            )}
            {isAddingToCart ? "Adding..." : "Add to Cart"}
          </button>
        </div>
      </div>
    </div>
  );
});

export default WishlistItemCard;
