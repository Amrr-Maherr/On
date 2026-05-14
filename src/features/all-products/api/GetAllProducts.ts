import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/all-products/types";

export interface ProductFilters {
  keyword?: string;
  sort?: string;
  page?: number;
  limit?: number;
  priceGte?: number;
  priceLte?: number;
  categoryIn?: string[];
  brandIn?: string[];
}

export async function getAllProducts(
  filters: ProductFilters = {},
): Promise<ApiResponse<Product>> {
  const params: Record<string, string> = {};

  if (filters.page) params.page = String(filters.page);
  if (filters.limit) params.limit = String(filters.limit);
  if (filters.sort) params.sort = filters.sort;
  if (filters.keyword) params.keyword = filters.keyword;
  if (filters.priceGte !== undefined) params["price[gte]"] = String(filters.priceGte);
  if (filters.priceLte !== undefined) params["price[lte]"] = String(filters.priceLte);
  if (filters.categoryIn && filters.categoryIn.length > 0)
    params["category[in]"] = filters.categoryIn.join(",");
  if (filters.brandIn && filters.brandIn.length > 0)
    params["brand[in]"] = filters.brandIn.join(",");

  const response = await api.get<ApiResponse<Product>>("/api/v1/products", {
    params,
  });
  return response.data;
}
