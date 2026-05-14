import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/GetCart";
import type { CartResponse } from "@/features/cart/types/cart";

export const useCart = () => {
  return useQuery<CartResponse>({
    queryKey: ["cart"],
    queryFn: getCart,
    staleTime: 1_000 * 60 * 2,
  });
};
