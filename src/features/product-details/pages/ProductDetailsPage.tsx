import { useParams } from "react-router-dom";
import { useProductDetails } from "@/features/product-details/hooks/useGetProductDetails";
import ProductDetailsView from "@/features/product-details/components/ProductDetailsView";

export default function ProductDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error, refetch } = useProductDetails(id!);

  return (
    <ProductDetailsView
      product={data?.data}
      isLoading={isLoading}
      error={error}
      onRetry={() => refetch()}
    />
  );
}
