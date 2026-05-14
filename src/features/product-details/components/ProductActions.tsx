<<<<<<< HEAD
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductActions() {
  return (
    <div className="flex gap-3">
      <Button size="lg" className="gap-2 rounded-full px-8">
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
      <Button variant="outline" size="lg" className="rounded-full px-4">
        <Heart className="h-5 w-5" />
=======
import type { MouseEvent } from "react";
import { ShoppingCart, Heart, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import { useAddToWishlist } from "@/features/wishlist/hooks/useAddToWishlist";
import toast from "react-hot-toast";

interface ProductActionsProps {
  productId: string;
}

export default function ProductActions({ productId }: ProductActionsProps) {
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const { mutate: addToWishlist, isPending: isAddingToWishlist } =
    useAddToWishlist();

  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();
    addToCart(
      { productId },
      {
        onSuccess: () => toast.success("Added to cart!"),
        onError: (err) => toast.error(err.message),
      },
    );
  };

  const handleAddToFav = (e: MouseEvent) => {
    e.preventDefault();
    addToWishlist(
      { productId },
      {
        onSuccess: () => toast.success("Added to wishlist!"),
        onError: (err) => toast.error(err.message),
      },
    );
  };

  const isPending = isAddingToCart || isAddingToWishlist;

  return (
    <div className="flex gap-3">
      <Button
        size="lg"
        className="gap-2 rounded-full px-8"
        onClick={handleAddToCart}
        disabled={isPending}
      >
        {isAddingToCart ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <ShoppingCart className="h-5 w-5" />
        )}
        {isAddingToCart ? "Adding..." : "Add to Cart"}
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="rounded-full px-4"
        onClick={handleAddToFav}
        disabled={isPending}
        aria-label="Add to wishlist"
      >
        {isAddingToWishlist ? (
          <Loader2 className="h-5 w-5 animate-spin" />
        ) : (
          <Heart className="h-5 w-5" />
        )}
>>>>>>> master
      </Button>
    </div>
  );
}
