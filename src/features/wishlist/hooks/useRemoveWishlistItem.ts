import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteWishlistItem } from "../api/DeleteWishlistItem";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";

export const useRemoveWishlistItem = () => {
  const queryClient = useQueryClient();

  return useMutation<WishlistResponse, Error, string>({
    mutationFn: (productId) => deleteWishlistItem(productId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
};
