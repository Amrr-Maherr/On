import { useState, useMemo, memo } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  FiltersPanel,
  FilterSection,
  FilterCheckboxGroup,
  FilterPriceRange,
  FilterSortDropdown,
  FilterSearchInput,
} from "@/components/shared/filters";
import { useAllProducts } from "../hooks/useGetAllProducts";
import ProductCard from "../components/ProductCard";
import type { Category } from "@/features/products/types";

const categories: Category[] = [
  { _id: "1", name: "Electronics", slug: "electronics", image: "", id: "1" },
  { _id: "2", name: "Clothing", slug: "clothing", image: "", id: "2" },
  { _id: "3", name: "Home & Garden", slug: "home-garden", image: "", id: "3" },
  { _id: "4", name: "Sports", slug: "sports", image: "", id: "4" },
  { _id: "5", name: "Books", slug: "books", image: "", id: "5" },
];

const SkeletonGrid = memo(function SkeletonGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 8 }, (_, i) => (
        <div key={i} className="flex flex-col">
          <div className="aspect-[3/4] animate-pulse rounded-3xl bg-muted/50" />
          <div className="mt-5 flex flex-col gap-2">
            <div className="h-4 w-3/4 animate-pulse rounded bg-muted/50" />
            <div className="h-6 w-1/4 animate-pulse rounded bg-muted/50" />
          </div>
        </div>
      ))}
    </div>
  );
});

const ProductsPage = memo(function ProductsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, isError, error } = useAllProducts(page);

  const totalPages = useMemo(
    () => data?.metadata?.numberOfPages ?? 1,
    [data],
  );

  if (isError) {
    return (
      <div className="container-layout flex min-h-[60vh] flex-col items-center justify-center gap-4">
        <div className="rounded-full bg-destructive/10 p-4">
          <span className="text-2xl">!</span>
        </div>
        <p className="text-lg font-medium text-foreground">
          Something went wrong
        </p>
        <p className="text-sm text-muted-foreground/60">
          {(error as Error)?.message || "Failed to load products"}
        </p>
        <button
          onClick={() => setPage(1)}
          className="mt-2 h-10 cursor-pointer rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
        >
          Try again
        </button>
      </div>
    );
  }

  return (
    <div className="section-py">
      <div className="container-layout">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Products" }]} className="mb-6" />
        <div className="mb-8 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-4xl font-light leading-tight tracking-tight text-foreground sm:text-5xl">
              Products
            </h1>
            {data && (
              <p className="mt-2 text-sm text-muted-foreground/60">
                {data.results} {data.results === 1 ? "product" : "products"} found
              </p>
            )}
          </div>
          <div className="w-full sm:w-56">
            <FilterSortDropdown />
          </div>
        </div>

        <div className="flex gap-8">
          <FiltersPanel>
            <FilterSearchInput placeholder="Search products..." />

            <FilterSection title="Category">
              <FilterCheckboxGroup
                options={categories.map((c) => ({
                  label: c.name,
                  value: c.slug,
                  count: 0,
                }))}
              />
            </FilterSection>

            <FilterSection title="Price Range">
              <FilterPriceRange min={0} max={1000} />
            </FilterSection>
          </FiltersPanel>

          <div className="flex-1">
            {isLoading ? (
              <SkeletonGrid />
            ) : data && data.data?.length > 0 ? (
              <>
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                  {data.data.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>

                {totalPages > 1 && (
                  <div className="mt-12 flex items-center justify-center gap-3">
                    <button
                      onClick={() => setPage((p) => Math.max(1, p - 1))}
                      disabled={page <= 1}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm text-muted-foreground/60 transition-all duration-200 hover:bg-muted/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      ←
                    </button>

                    <div className="flex items-center gap-2">
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (p) => (
                          <button
                            key={p}
                            onClick={() => setPage(p)}
                            className={`flex h-9 w-9 cursor-pointer items-center justify-center rounded-full text-sm transition-all duration-200 ${
                              p === page
                                ? "bg-foreground text-background"
                                : "text-muted-foreground/60 hover:bg-muted/50 hover:text-foreground"
                            }`}
                          >
                            {p}
                          </button>
                        ),
                      )}
                    </div>

                    <button
                      onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                      disabled={page >= totalPages}
                      className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full text-sm text-muted-foreground/60 transition-all duration-200 hover:bg-muted/50 hover:text-foreground disabled:cursor-not-allowed disabled:opacity-30"
                    >
                      →
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="flex min-h-[40vh] flex-col items-center justify-center gap-3">
                <p className="text-base font-medium text-foreground">
                  No products found
                </p>
                <p className="text-sm text-muted-foreground/60">
                  Try adjusting your search or filter criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductsPage;
