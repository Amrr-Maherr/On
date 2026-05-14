import { api } from "@/lib";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";

export async function getWishlist(): Promise<WishlistResponse> {
  const response = await api.get<WishlistResponse>("/api/v1/wishlist");
  return response.data;
}
