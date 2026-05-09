import { useQuery } from "@tanstack/react-query";
import { getAllCategories } from "../api/GetAllCategories";
import type { ApiResponse } from "@/shared/types/api";
import type { Category } from "@/features/categories/types";

export const useAllCategories = (page: number) => {
  return useQuery<ApiResponse<Category>>({
    queryKey: ["categories", "all", page],
    queryFn: () => getAllCategories(page),
    staleTime: 1_000 * 60 * 2,
  });
};
