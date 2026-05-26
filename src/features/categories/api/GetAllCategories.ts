import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Category } from "@/features/categories/types";

export interface CategoryFilters {
  keyword?: string;
  sort?: string;
  page?: number;
  limit?: number;
}

export async function getAllCategories(
  filters: CategoryFilters | number = {},
): Promise<ApiResponse<Category>> {
  const params: Record<string, string> = {};

  const actualFilters: CategoryFilters = typeof filters === "number" ? { page: filters } : filters;

  if (actualFilters.page) params.page = String(actualFilters.page);
  if (actualFilters.limit) params.limit = String(actualFilters.limit);
  if (actualFilters.sort) params.sort = actualFilters.sort;
  if (actualFilters.keyword) params.keyword = actualFilters.keyword;

  const response = await api.get<ApiResponse<Category>>("/api/v1/categories", { params });
  return response.data;
}