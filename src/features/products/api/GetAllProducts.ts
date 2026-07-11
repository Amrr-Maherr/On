import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/products/types";

export type ProductFilters = {
  keyword?: string;
  sort?: string;
  page?: number;
  limit?: number;
  priceGte?: number;
  priceLte?: number;
  categoryIn?: string[];
  brandIn?: string[];
};

export async function getAllProducts(
  filters: ProductFilters | number = {},
): Promise<ApiResponse<Product>> {
  const params: Record<string, string> = {};

  // Handle both old (number) and new (filters object) calls
  const actualFilters: ProductFilters = typeof filters === "number" ? { page: filters } : filters;

  if (actualFilters.page) params.page = String(actualFilters.page);
  if (actualFilters.limit) params.limit = String(actualFilters.limit);
  if (actualFilters.sort) params.sort = actualFilters.sort;
  if (actualFilters.keyword) params.keyword = actualFilters.keyword;
  if (actualFilters.priceGte !== undefined) params["price[gte]"] = String(actualFilters.priceGte);
  if (actualFilters.priceLte !== undefined) params["price[lte]"] = String(actualFilters.priceLte);
  if (actualFilters.categoryIn && actualFilters.categoryIn.length > 0)
    params["category[in]"] = actualFilters.categoryIn.join(",");
  if (actualFilters.brandIn && actualFilters.brandIn.length > 0)
    params["brand[in]"] = actualFilters.brandIn.join(",");

  const response = await api.get<ApiResponse<Product>>("/api/v1/products", {
    params,
  });
  return response.data;
}
