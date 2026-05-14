import { api } from "@/lib";
import type { OrdersResponse } from "@/features/orders/types/orders";

function getUserId(): string | null {
  const userId = localStorage.getItem("userId");
  if (userId) return userId;
  const token = localStorage.getItem("token");
  if (!token) return null;
  try {
    const payload = JSON.parse(atob(token.split(".")[1]));
    const id = payload.id || payload._id || payload.sub;
    if (id) {
      localStorage.setItem("userId", id);
      return id;
    }
  } catch {
    /* ignore */
  }
  return null;
}

export async function getOrders(): Promise<OrdersResponse> {
  const userId = getUserId();
  const response = await api.get<OrdersResponse>(
    `/api/v1/orders/user/${userId}`,
  );
  return response.data;
}
