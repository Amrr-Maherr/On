import { useState } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
    <>
      <PageHelmet title="All Categories" description="Explore our product categories." />

      <CampaignHeader
        subtitle="Browse"
        title="Categories."
        description="Find your discipline. Every sport, every season, every goal."
        backgroundImage="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Categories" }]} className="mb-6" />
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">All Categories</h1>
            <p className="mt-2 text-sm text-muted-foreground/70">
              {data?.results ?? categories.length} categories
            </p>
          </div>
        </ScrollReveal>

      <div className="flex gap-8">
        <FiltersPanel>
          <FilterSearchInput placeholder="Search categories..." />

          <FilterSection title="Sort By">
            <div className="space-y-2">
              {sortOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground/70 transition-colors hover:text-foreground"
                >
                  <input
                    type="radio"
                    name="category-sort"
                    className="h-4 w-4 border-border/60 text-foreground accent-foreground"
                  />
                  <span>{option.label}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </FiltersPanel>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category, index) => (
              <ScrollReveal key={category._id} delay={index * 0.03} direction="up" distance={20}>
                <CategoryCard category={category} />
              </ScrollReveal>
            ))}
          </div>

          {metadata && (
            <div className="mt-10">
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
    </>
  );
}
