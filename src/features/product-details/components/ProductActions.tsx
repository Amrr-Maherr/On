import type { MouseEvent } from "react";
import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductActions() {
  const handleAddToCart = (e: MouseEvent) => {
    e.preventDefault();
  };

  const handleAddToFav = (e: MouseEvent) => {
    e.preventDefault();
  };

  return (
    <div className="flex gap-3">
      <Button size="lg" className="gap-2 rounded-full px-8" onClick={handleAddToCart}>
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
      <Button
        variant="outline"
        size="lg"
        className="rounded-full px-4"
        onClick={handleAddToFav}
        aria-label="Add to wishlist"
      >
        <Heart className="h-5 w-5" />
      </Button>
    </div>
  );
}
