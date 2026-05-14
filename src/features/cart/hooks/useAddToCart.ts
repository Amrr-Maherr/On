import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postAddToCart } from "../api/PostAddToCart";
import type { CartResponse } from "@/features/cart/types/cart";
import type { AddToCartPayload } from "../api/PostAddToCart";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation<CartResponse, Error, AddToCartPayload>({
    mutationFn: postAddToCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
