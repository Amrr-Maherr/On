import { api } from "@/lib";
import type { ProductDetailsResponse } from "@/features/product-details/types";

export async function getProductDetails(id: string): Promise<ProductDetailsResponse> {
  const response = await api.get<ProductDetailsResponse>(
    `/api/v1/products/${id}`,
  );
  return response.data;
}
