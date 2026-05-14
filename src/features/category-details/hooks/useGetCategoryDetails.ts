import { useQuery } from "@tanstack/react-query";
import { getCategoryDetails } from "../api/GetCategoryDetails";
import type { CategoryDetailsResponse } from "@/features/category-details/types";

export const useCategoryDetails = (id: string) => {
  return useQuery<CategoryDetailsResponse>({
    queryKey: ["category", "details", id],
    queryFn: () => getCategoryDetails(id),
    staleTime: 1_000 * 60 * 2,
  });
};
