import { useQuery } from "@tanstack/react-query";
import { getAllProducts, type ProductFilters } from "../api/GetAllProducts";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/products/types";

export const useAllProducts = (filters: ProductFilters | number = {}) => {
  return useQuery<ApiResponse<Product>>({
    queryKey: ["products", "all", filters],
    queryFn: () => getAllProducts(filters),
    staleTime: 1_000 * 60 * 2,
  });
};
