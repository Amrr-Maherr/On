import { memo, useCallback, type MouseEvent } from "react";
import { ShoppingCart, Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import { useAddToWishlist } from "@/features/wishlist/hooks/useAddToWishlist";
import toast from "react-hot-toast";

interface ProductActionsProps {
  productId: string;
}

const ProductActions = memo(function ProductActions({ productId }: ProductActionsProps) {
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const { mutate: addToWishlist, isPending: isAddingToWishlist } =
    useAddToWishlist();

  const handleAddToCart = useCallback((e: MouseEvent) => {
    e.preventDefault();
    addToCart(
      { productId },
      {
        onSuccess: () => toast.success("Added to cart!"),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToCart, productId]);

  const handleAddToFav = useCallback((e: MouseEvent) => {
    e.preventDefault();
    addToWishlist(
      { productId },
      {
        onSuccess: () => toast.success("Added to wishlist!"),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToWishlist, productId]);

  const isPending = isAddingToCart || isAddingToWishlist;

  return (
    <div className="flex gap-3">
      <Button
        className="flex-1 gap-2 rounded-full bg-foreground px-6 text-background hover:opacity-90 h-11 md:h-9 md:bg-primary md:text-primary-foreground md:hover:bg-primary/80 md:[a]:hover:bg-primary/80"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isAddingToCart ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ShoppingCart className="h-4 w-4" />
        )}
        {isAddingToCart ? "Adding..." : "Add to Cart"}
      </Button>
      <Button
        variant="outline"
        className="rounded-full h-11 w-11 md:size-8"
        onClick={handleAddToFav}
        disabled={isPending}
        aria-label="Add to wishlist"
      >
        {isAddingToWishlist ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <Heart className="h-4 w-4" />
        )}
      </Button>
    </div>
  );
});

export default ProductActions;
