import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/all-products/types";

export async function getAllProducts(page = 1): Promise<ApiResponse<Product>> {
  const response = await api.get<ApiResponse<Product>>(
    `/api/v1/products?page=${page}`,
  );
  return response.data;
}
