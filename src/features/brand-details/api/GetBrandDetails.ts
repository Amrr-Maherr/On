import { api } from "@/lib";
import type { BrandDetailsResponse } from "@/features/brand-details/types";

export async function getBrandDetails(id: string): Promise<BrandDetailsResponse> {
  const response = await api.get<BrandDetailsResponse>(
    `/api/v1/brands/${id}`,
  );
  return response.data;
}
