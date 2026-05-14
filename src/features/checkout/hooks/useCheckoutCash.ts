import { useMutation, useQueryClient } from "@tanstack/react-query";
import { postCheckoutCash } from "../api/postCheckoutCash";
import type { CheckoutCashPayload, CheckoutCashResponse } from "../api/postCheckoutCash";

export const useCheckoutCash = () => {
  const queryClient = useQueryClient();

  return useMutation<CheckoutCashResponse, Error, CheckoutCashPayload>({
    mutationFn: postCheckoutCash,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
      queryClient.invalidateQueries({ queryKey: ["orders"] });
    },
  });
};
