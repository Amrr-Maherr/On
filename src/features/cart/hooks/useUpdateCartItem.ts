import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../api/UpdateCartItem";
import type { CartResponse } from "@/features/cart/types/cart";

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation<CartResponse, Error, { itemId: string; count: number }>({
    mutationFn: ({ itemId, count }) => updateCartItem(itemId, count),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
