import { useMutation, useQueryClient } from "@tanstack/react-query";
import { clearCart } from "../api/ClearCart";
import type { CartResponse } from "@/features/cart/types/cart";

export const useClearCart = () => {
  const queryClient = useQueryClient();

  return useMutation<CartResponse, Error, void>({
    mutationFn: () => clearCart(),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });
};
