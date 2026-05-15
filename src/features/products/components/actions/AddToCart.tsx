import { useCallback, type MouseEvent } from "react";
import { ShoppingCart, Loader2 } from "lucide-react";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import toast from "react-hot-toast";
import { cn } from "@/lib/utils";

interface AddToCartProps {
  productId: string;
  variant?: "icon" | "overlay";
  className?: string;
}

export default function AddToCart({ productId, variant = "icon", className }: AddToCartProps) {
  const { mutate: addToCart, isPending } = useAddToCart();

  const handleClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToCart(
      { productId },
      {
        onSuccess: () => toast.success("Added to cart!"),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToCart, productId]);

  if (variant === "overlay") {
    return (
      <button
        type="button"
        onClick={handleClick}
        disabled={isPending}
        aria-label="Add to cart"
        className={cn(
          "flex w-full items-center justify-center gap-2 rounded-full bg-white px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-neutral-950 shadow-lg transition-all duration-300 hover:bg-white/90 active:scale-[0.97] disabled:opacity-50",
          className,
        )}
      >
        {isPending ? (
          <Loader2 className="h-3.5 w-3.5 animate-spin" />
        ) : (
          <ShoppingCart className="h-3.5 w-3.5" />
        )}
        {isPending ? "Adding..." : "Add to Cart"}
      </button>
    );
  }

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      aria-label="Add to cart"
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground disabled:opacity-50",
        className,
      )}
    >
      {isPending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin text-foreground/70" />
      ) : (
        <ShoppingCart className="h-3.5 w-3.5 text-foreground/70" />
      )}
    </button>
  );
}
