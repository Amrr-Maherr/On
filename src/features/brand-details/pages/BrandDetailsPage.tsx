import { useParams } from "react-router-dom";
import { useBrandDetails } from "@/features/brand-details/hooks/useGetBrandDetails";
import BrandDetailsView from "@/features/brand-details/components/BrandDetailsView";

export default function BrandDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error, refetch } = useBrandDetails(id!);

  return (
    <BrandDetailsView
      brand={data?.data}
      isLoading={isLoading}
      error={error}
      onRetry={() => refetch()}
    />
  );
}
