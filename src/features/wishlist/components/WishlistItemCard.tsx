import { Heart, ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { WishlistProduct } from "@/features/wishlist/types/wishlist";

interface WishlistItemCardProps {
  product: WishlistProduct;
  onRemove: (productId: string) => void;
  onAddToCart: () => void;
  isRemoving?: boolean;
}

export default function WishlistItemCard({
  product,
  onRemove,
  onAddToCart,
  isRemoving,
}: WishlistItemCardProps) {
  const displayPrice = product.priceAfterDiscount ?? product.price;
  const hasDiscount = !!product.priceAfterDiscount;

  return (
    <Card
      data-size="sm"
      className={cn(
        "flex-row gap-4 p-4",
        isRemoving && "pointer-events-none opacity-60",
      )}
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg bg-muted md:h-28 md:w-28">
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
            <h3 className="truncate text-sm font-medium">{product.title}</h3>
            <div className="mt-0.5 flex items-center gap-2">
              <span
                className={cn(
                  "text-sm",
                  hasDiscount ? "text-muted-foreground line-through" : "text-muted-foreground",
                )}
              >
                {product.price.toLocaleString()} EGP
              </span>
              {hasDiscount && (
                <span className="text-sm font-semibold text-primary">
                  {displayPrice.toLocaleString()} EGP
                </span>
              )}
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon-xs"
            onClick={() => onRemove(product._id)}
            aria-label="Remove from wishlist"
            className="shrink-0 text-muted-foreground hover:text-destructive"
          >
            <Heart className="h-4 w-4" fill="currentColor" />
          </Button>
        </div>

        <div className="flex items-center justify-between">
          {product.ratingsAverage && (
            <span className="text-xs text-muted-foreground">
              {"\u2605"} {product.ratingsAverage.toFixed(1)}
            </span>
          )}
          <Button
            size="xs"
            variant="outline"
            className="gap-1.5"
            onClick={onAddToCart}
          >
            <ShoppingCart className="h-3.5 w-3.5" />
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
}
