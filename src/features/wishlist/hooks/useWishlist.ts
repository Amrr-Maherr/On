import { useQuery } from "@tanstack/react-query";
import { getWishlist } from "../api/GetWishlist";
import type { WishlistResponse } from "@/features/wishlist/types/wishlist";

export const useWishlist = () => {
  const user = localStorage.getItem("token")
  return useQuery<WishlistResponse>({
    queryKey: ["wishlist"],
    queryFn: getWishlist,
    staleTime: 1_000 * 60 * 2,
    enabled: !!user
  });
};
