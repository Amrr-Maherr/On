import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../api/GetAllProducts";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/products/types";

export const useAllProducts = (page: number) => {
  return useQuery<ApiResponse<Product>>({
    queryKey: ["products", "all", page],
    queryFn: () => getAllProducts(page),
    staleTime: 1_000 * 60 * 2,
  });
};
