import { api } from "@/lib";
import type { CartResponse } from "@/features/cart/types/cart";

export async function getCart(): Promise<CartResponse> {
  const response = await api.get<CartResponse>("/api/v1/cart");
  return response.data;
}
