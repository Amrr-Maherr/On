import { api } from "@/lib";
import type { CartResponse } from "@/features/cart/types/cart";

export async function removeCartItem(itemId: string): Promise<CartResponse> {
  const response = await api.delete<CartResponse>(`/api/v1/cart/${itemId}`);
  return response.data;
}
