import { useMutation } from "@tanstack/react-query";
import { getCheckoutSession } from "../api/getCheckoutSession";
import type { CheckoutSessionResponse } from "../api/getCheckoutSession";

export const useCheckoutSession = () => {
  return useMutation<CheckoutSessionResponse, Error, string>({
    mutationFn: getCheckoutSession,
  });
};
