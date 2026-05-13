import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Category } from "@/features/all-categories/types";

export async function getAllCategories(page = 1): Promise<ApiResponse<Category>> {
  const response = await api.get<ApiResponse<Category>>(
    `/api/v1/categories?page=${page}`,
  );
  return response.data;
}
