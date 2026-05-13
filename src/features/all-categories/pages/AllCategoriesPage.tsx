import { useState } from "react";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { useAllCategories } from "@/features/all-categories/hooks/useAllCategories";
import CategoriesLoader from "@/features/all-categories/components/CategoriesLoader";
import CategoriesError from "@/features/all-categories/components/CategoriesError";
import CategoriesEmpty from "@/features/all-categories/components/CategoriesEmpty";
import CategoriesPagination from "@/features/all-categories/components/CategoriesPagination";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function AllCategoriesPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllCategories(page);

  if (isLoading) return <CategoriesLoader />;

  if (error) {
    return (
      <CategoriesError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const categories = data?.data;
  const metadata = data?.metadata;

  if (!categories || categories.length === 0) {
    return <CategoriesEmpty />;
  }

  return (
    <div className="container-layout py-8">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">All Categories</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data?.results ?? categories.length} categories
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {categories.map((category) => (
          <CategoryCard key={category._id} category={category} />
        ))}
      </div>

      {metadata && (
        <CategoriesPagination
          currentPage={metadata.currentPage}
          totalPages={metadata.numberOfPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
