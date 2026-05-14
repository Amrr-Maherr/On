import { api } from "@/lib";
import type { CategoryDetailsResponse } from "@/features/category-details/types";

export async function getCategoryDetails(id: string): Promise<CategoryDetailsResponse> {
  const response = await api.get<CategoryDetailsResponse>(
    `/api/v1/categories/${id}`,
  );
  return response.data;
}
