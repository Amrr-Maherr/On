import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAddToWishlist } from "../api/PostAddToWishlist";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";
import type { AddToWishlistPayload } from "../api/PostAddToWishlist";

export const useAddToWishlist = () => {
  const queryClient = useQueryClient();

  return useMutation<WishlistResponse, Error, AddToWishlistPayload>({
    mutationFn: postAddToWishlist,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["wishlist"] });
    },
  });
};
