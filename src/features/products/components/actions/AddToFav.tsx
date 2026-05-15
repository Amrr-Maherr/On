import { useCallback, type MouseEvent } from "react";
import { Heart, Loader2 } from "lucide-react";
import { useAddToWishlist } from "@/features/wishlist/hooks/useAddToWishlist";
import toast from "react-hot-toast";

interface AddToFavProps {
  productId: string;
}

export default function AddToFav({ productId }: AddToFavProps) {
  const { mutate: addToWishlist, isPending } = useAddToWishlist();

  const handleClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToWishlist(
      { productId },
      {
        onSuccess: () => toast.success("Added to wishlist!"),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToWishlist, productId]);

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      aria-label="Add to wishlist"
      className="flex h-8 w-8 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-sm transition-all duration-200 hover:bg-white hover:shadow-md active:scale-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground disabled:opacity-50"
    >
      {isPending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin text-foreground/70" />
      ) : (
        <Heart className="h-3.5 w-3.5 text-foreground/70 transition-colors duration-200 hover:text-red-400" />
      )}
    </button>
  );
}
