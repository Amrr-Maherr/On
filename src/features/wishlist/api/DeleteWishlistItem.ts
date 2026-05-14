import { api } from "@/lib";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";

export async function deleteWishlistItem(
  productId: string,
): Promise<WishlistResponse> {
  const response = await api.delete<WishlistResponse>(
    `/api/v1/wishlist/${productId}`,
  );
  return response.data;
}
