import { useCallback, type MouseEvent } from "react";
import { useTranslation } from "react-i18next";
import { Heart, Loader2 } from "lucide-react";
import { useAddToWishlist } from "@/features/wishlist/hooks/useAddToWishlist";
import toast from "react-hot-toast";
import type { AxiosError } from "axios";
interface AddToFavProps {
  productId: string;
}

export default function AddToFav({ productId }: AddToFavProps) {
  const { t } = useTranslation();
  const { mutate: addToWishlist, isPending, isSuccess } = useAddToWishlist();

  const handleClick = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      e.preventDefault();
      addToWishlist(
        { productId },
        {
          onSuccess: () => toast.success(t("products.actions.addedToWishlist")),
          onError: (err) => {
            const error = err as AxiosError<{ message?: string }>;

            toast.error(
              error.response?.data?.message ||
                t("common.errors.somethingWentWrong"),
            );
          },
        },
      );
    },
    [addToWishlist, productId, t],
  );

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={isPending}
      aria-label={t("products.actions.addToWishlist")}
      className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-border/20 bg-white/95 text-foreground shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-foreground hover:bg-white active:scale-90 disabled:opacity-50"
    >
      {isPending ? (
        <Loader2 className="h-3.5 w-3.5 animate-spin text-foreground/70" />
      ) : (
        <Heart
          className={`h-3.5 w-3.5 text-foreground/70 transition-colors duration-200 hover:text-red-400 ${
            isSuccess ? "fill-red-800" : ""
          }`}
        />
      )}
    </button>
  );
}
