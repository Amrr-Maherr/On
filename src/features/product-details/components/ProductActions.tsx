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
        size="lg"
        className="flex-1 gap-2 rounded-full px-6"
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
        size="icon"
        className="rounded-full"
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
