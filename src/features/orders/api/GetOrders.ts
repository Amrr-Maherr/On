import { api } from "@/lib";
import type { OrdersResponse } from "@/features/orders/types/orders";

export async function getOrders(page: number = 1): Promise<OrdersResponse> {
  const response = await api.get<OrdersResponse>("/api/v1/orders/", {
    params: { page },
  });
  return response.data;
}
