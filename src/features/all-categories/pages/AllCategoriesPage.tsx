import { useState } from "react";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { useAllCategories } from "@/features/all-categories/hooks/useAllCategories";
import CategoriesLoader from "@/features/all-categories/components/CategoriesLoader";
import CategoriesError from "@/features/all-categories/components/CategoriesError";
import CategoriesEmpty from "@/features/all-categories/components/CategoriesEmpty";
import CategoriesPagination from "@/features/all-categories/components/CategoriesPagination";
import {
  FiltersPanel,
  FilterSection,
  FilterSearchInput,
} from "@/components/shared/filters";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const sortOptions = [
  { label: "Name A-Z", value: "name-asc" },
  { label: "Name Z-A", value: "name-desc" },
  { label: "Most Products", value: "most-products" },
];

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
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">All Categories</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data?.results ?? categories.length} categories
          </p>
        </div>
      </div>

      <div className="mt-8 flex gap-8">
        <FiltersPanel>
          <FilterSearchInput placeholder="Search categories..." />

          <FilterSection title="Sort By">
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <input
                    type="radio"
                    name="category-sort"
                    className="h-4 w-4 border-border text-foreground accent-foreground"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </FiltersPanel>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
            ))}
          </div>

          {metadata && (
            <div className="mt-8">
              <CategoriesPagination
                currentPage={metadata.currentPage}
                totalPages={metadata.numberOfPages}
                onPageChange={setPage}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
