import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../api/GetProductDetails";
import type { ProductDetailsResponse } from "@/features/product-details/types";

export const useProductDetails = (id: string) => {
  return useQuery<ProductDetailsResponse>({
    queryKey: ["product", "details", id],
    queryFn: () => getProductDetails(id),
    staleTime: 1_000 * 60 * 2,
  });
};
