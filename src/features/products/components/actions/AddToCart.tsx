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
          "flex w-full items-center justify-center gap-3 rounded-none bg-white px-6 py-4 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-950 shadow-2xl transition-all duration-300 hover:bg-neutral-100 active:scale-[0.98] disabled:opacity-50",
          className,
        )}
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <ShoppingCart className="h-4 w-4" />
        )}
        {isPending ? "Adding..." : "Add to Bag"}
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
        "flex h-10 w-10 items-center justify-center rounded-none border-2 border-border/20 bg-white/95 text-foreground shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-foreground hover:bg-white active:scale-90 focus-visible:outline-none disabled:opacity-50",
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
