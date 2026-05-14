import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCartItem } from "../api/RemoveCartItem";
import type { CartResponse } from "@/features/cart/types/cart";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation<CartResponse, Error, string>({
    mutationFn: (itemId) => removeCartItem(itemId),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
