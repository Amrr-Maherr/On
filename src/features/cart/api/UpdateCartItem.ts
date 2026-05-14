import { api } from "@/lib";
import type { CartResponse } from "@/features/cart/types/cart";

export async function updateCartItem(
  itemId: string,
  count: number,
): Promise<CartResponse> {
  const response = await api.put<CartResponse>(`/api/v1/cart/${itemId}`, {
    count,
  });
  return response.data;
}
