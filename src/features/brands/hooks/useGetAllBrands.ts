import { useQuery } from "@tanstack/react-query";
import { getAllBrands } from "../api/GetAllBrands";
import type { ApiResponse } from "@/shared/types/api";
import type { Brand } from "@/features/brands/types";

export const useAllBrands = (page: number) => {
  return useQuery<ApiResponse<Brand>>({
    queryKey: ["brands", "all", page],
    queryFn: () => getAllBrands(page),
    staleTime: 1_000 * 60 * 2,
  });
};
