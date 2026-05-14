import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeWishlistItem } from "../api/RemoveWishlistItem";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";

export const useRemoveWishlistItem = () => {
  const queryClient = useQueryClient();

  return useMutation<WishlistResponse, Error, string>({
    mutationFn: (productId) => removeWishlistItem(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
};
