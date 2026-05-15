import { useState } from "react";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CategoryCard from "../components/CategoryCard";
import { useAllCategories } from "../hooks/useGetAllCategories";
import CategoriesLoader from "../components/CategoriesLoader";
import CategoriesError from "../components/CategoriesError";
import CategoriesEmpty from "../components/CategoriesEmpty";
import CategoriesPagination from "../components/CategoriesPagination";
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

export default function CategoriesPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllCategories(page);

  if (isLoading) {
    return (
      <div className="container-layout section-py pt-8">
        <div className="mb-10 h-8 w-48 animate-pulse rounded bg-muted" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <CategoriesLoader key={i} />
          ))}
        </div>
      </div>
    );
  }

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

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Browse
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            Categories.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            Find your discipline. Every sport, every season, every goal.
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Categories" }]} className="mb-6" />
        <div className="mb-10">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
            Categories
          </span>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground md:text-5xl">All Categories</h1>
          <p className="mt-1 text-sm text-muted-foreground/60">
            {data?.results ?? categories.length} categories explored
          </p>
        </div>

      <div className="flex gap-8">
        <div className="hidden lg:block">
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
        </div>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {categories.map((category) => (
              <CategoryCard key={category._id} category={category} />
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
