import { useParams } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useCategoryDetails } from "@/features/category-details/hooks/useGetCategoryDetails";
import CategoryDetailsCard from "@/features/category-details/components/CategoryDetailsCard";
import CategoryDetailsLoader from "@/features/category-details/components/CategoryDetailsLoader";
import CategoryDetailsError from "@/features/category-details/components/CategoryDetailsError";

export default function CategoryDetailsPage() {
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useCategoryDetails(id!);

  if (isLoading) return <CategoryDetailsLoader />;

  if (error) {
    return (
      <CategoryDetailsError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    );
  }

  const category = data?.data;

  if (!category) {
    return <CategoryDetailsError message="Category not found." />;
  }

  return (
    <div className="container-layout py-8">
      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Home", href: "/" },
          { label: "Categories", href: "/" },
          { label: category.name },
        ]}
      />

      <CategoryDetailsCard category={category} />
    </div>
  );
}
