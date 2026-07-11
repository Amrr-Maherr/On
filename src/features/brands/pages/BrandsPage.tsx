import { useState } from "react";
import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";
import BrandsView from "@/features/brands/components/BrandsView";

export default function BrandsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllBrands(page);

  return (
    <BrandsView
      brands={data?.data ?? []}
      metadata={data?.metadata}
      isLoading={isLoading}
      error={error}
      onPageChange={setPage}
      onRetry={() => refetch()}
    />
  );
}
