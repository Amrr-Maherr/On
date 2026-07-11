import { useParams } from "react-router-dom";
import { useCategoryDetails } from "@/features/category-details/hooks/useGetCategoryDetails";
import CategoryDetailsView from "@/features/category-details/components/CategoryDetailsView";

export default function CategoryDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, error, refetch } = useCategoryDetails(id!);

  return (
    <CategoryDetailsView
      category={data?.data}
      isLoading={isLoading}
      error={error}
      onRetry={() => refetch()}
    />
  );
}
