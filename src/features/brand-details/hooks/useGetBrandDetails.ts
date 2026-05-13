import { useQuery } from "@tanstack/react-query";
import { getBrandDetails } from "../api/GetBrandDetails";
import type { BrandDetailsResponse } from "@/features/brand-details/types";

export const useBrandDetails = (id: string) => {
  return useQuery<BrandDetailsResponse>({
    queryKey: ["brand", "details", id],
    queryFn: () => getBrandDetails(id),
    staleTime: 1_000 * 60 * 2,
  });
};
