import { useQuery } from "@tanstack/react-query";
import { getAllCategories, type CategoryFilters } from "../api/GetAllCategories";
import type { ApiResponse } from "@/shared/types/api";
import type { Category } from "@/features/categories/types";

export const useAllCategories = (filters: CategoryFilters | number = {}) => {
  return useQuery<ApiResponse<Category>>({
    queryKey: ["categories", "all", filters],
    queryFn: () => getAllCategories(filters),
    staleTime: 1_000 * 60 * 2,
  });
};