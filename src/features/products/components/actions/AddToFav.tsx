import type { MouseEvent } from "react";
import { Heart, Loader2 } from "lucide-react";
import { useAddToWishlist } from "@/features/wishlist/hooks/useAddToWishlist";
import toast from "react-hot-toast";

interface AddToFavProps {
  productId: string;
}

export default function AddToFav({ productId }: AddToFavProps) {
  const { mutate: addToWishlist, isPending } = useAddToWishlist();

  const handleClick = (e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
    addToWishlist(
      { productId },
      {
        onSuccess: () => toast.success("Added to wishlist!"),
        onError: (err) => toast.error(err.message),
      },
    );
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      aria-label="Add to wishlist"
      className="flex h-9 w-9 items-center justify-center rounded-full bg-white shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:opacity-50"
    >
      {isPending ? (
        <Loader2 className="h-4 w-4 animate-spin" />
      ) : (
        <Heart className="h-4 w-4" />
      )}
    </button>
  );
}
