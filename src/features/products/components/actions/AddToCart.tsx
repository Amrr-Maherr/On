import type { MouseEvent } from "react";
import { ShoppingCart } from "lucide-react";

export default function AddToCart() {
  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      aria-label="Add to cart"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
    >
      <ShoppingCart className="h-4 w-4" />
    </button>
  );
}
