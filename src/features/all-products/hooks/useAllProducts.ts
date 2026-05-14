import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/GetAllProducts";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/all-products/types";
import type { ProductFilters } from "../api/GetAllProducts";

export const useAllProducts = (filters: ProductFilters = {}) => {
  return useQuery<ApiResponse<Product>>({
    queryKey: ["all-products", filters],
    queryFn: () => getAllProducts(filters),
    staleTime: 1_000 * 60 * 2,
  });
};
