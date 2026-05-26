import { api } from "@/lib";
import type { CartResponse } from "@/features/cart/types/cart";

export async function clearCart(): Promise<CartResponse> {
  const response = await api.delete<CartResponse>("/api/v1/cart");
  return response.data;
}
