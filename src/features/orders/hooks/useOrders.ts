import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/GetOrders";
import type { OrdersResponse } from "@/features/orders/types/orders";

export const useOrders = () => {
  return useQuery<OrdersResponse>({
    queryKey: ["orders"],
    queryFn: getOrders,
    staleTime: 1_000 * 60 * 2,
  });
};
