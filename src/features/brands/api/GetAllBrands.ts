import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Brand } from "@/features/brands/types";

export async function getAllBrands(page = 1): Promise<ApiResponse<Brand>> {
  const response = await api.get<ApiResponse<Brand>>(
    `/api/v1/brands?page=${page}`,
  );
  return response.data;
}
