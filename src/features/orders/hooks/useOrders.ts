import { useQuery } from "@tanstack/react-query";
import { getOrders } from "../api/GetOrders";
import type { OrdersResponse } from "@/features/orders/types/orders";

export const useOrders = (page: number = 1) => {
  return useQuery<OrdersResponse>({
    queryKey: ["orders", page],
    queryFn: () => getOrders(page),
    staleTime: 1_000 * 60 * 2,
  });
};
