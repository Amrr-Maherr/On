import { api } from "@/lib";
import type { CartResponse } from "@/features/cart/types/cart";

export type AddToCartPayload = {
  productId: string;
};

export async function postAddToCart(
  data: AddToCartPayload,
): Promise<CartResponse> {
  const response = await api.post<CartResponse>("/api/v1/cart", data);
  return response.data;
}
