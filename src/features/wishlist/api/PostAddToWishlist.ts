import { api } from "@/lib";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";

export type AddToWishlistPayload = {
  productId: string;
};

export async function postAddToWishlist(
  data: AddToWishlistPayload,
): Promise<WishlistResponse> {
  const response = await api.post<WishlistResponse>(
    "/api/v1/wishlist",
    data,
  );
  return response.data;
}
