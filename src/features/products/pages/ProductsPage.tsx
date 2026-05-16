import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import ProductCard from "../components/ProductCard";
import ProductsLoader from "../components/ProductsLoader";
import ProductsError from "../components/ProductsError";
import ProductsEmpty from "../components/ProductsEmpty";
import ProductsPagination from "../components/ProductsPagination";
import MobileFilterSheet from "../components/MobileFilterSheet";
import {
  FiltersPanel,
  FilterSection,
  FilterCheckboxGroup,
  FilterPriceRange,
  FilterSortDropdown,
} from "@/components/shared/filters";
import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Product } from "@/features/products/types";
import type { Category } from "@/features/categories/types";
import type { Brand } from "@/features/brands/types";

export default function ProductsPage() {
  const { data, isLoading, error, refetch } = useQuery<ApiResponse<Product>>({
    queryKey: ["products", "all"],
    queryFn: () =>
      api.get<ApiResponse<Product>>("/api/v1/products").then((r) => r.data),
    staleTime: 1_000 * 60 * 2,
  });

  const { data: categoriesData } = useQuery<ApiResponse<Category>>({
    queryKey: ["categories", "all"],
    queryFn: () =>
      api
        .get<ApiResponse<Category>>("/api/v1/categories", {
          params: { limit: 100, page: 1 },
        })
        .then((r) => r.data),
    staleTime: 1_000 * 60 * 10,
  });

  const { data: brandsData } = useQuery<ApiResponse<Brand>>({
    queryKey: ["brands", "all"],
    queryFn: () =>
      api
        .get<ApiResponse<Brand>>("/api/v1/brands", {
          params: { limit: 100, page: 1 },
        })
        .then((r) => r.data),
    staleTime: 1_000 * 60 * 10,
  });

  const products = useMemo(() => data?.data ?? [], [data?.data]);
  const metadata = data?.metadata;

  const categories = useMemo(
    () =>
      categoriesData?.data.map((cat) => ({
        label: cat.name,
        value: cat._id,
      })) ?? [],
    [categoriesData?.data],
  );

  const brands = useMemo(
    () =>
      brandsData?.data.map((b) => ({
        label: b.name,
        value: b._id,
      })) ?? [],
    [brandsData?.data],
  );

  return (
    <>
      <PageHelmet title="All Products" description="Browse our complete collection of products." />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Explore
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            Products.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            High-performance gear engineered for those who push boundaries.
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Products" }]} className="mb-6" />

      <div className="mb-12 border-l-4 border-foreground pl-6">
        <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
          Catalog
        </span>
        <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
          ALL GEAR.
        </h1>
        <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
          {products.length} {products.length === 1 ? "product" : "products"} available
        </p>
      </div>

      <div className="flex gap-16">
        <div className="hidden w-64 shrink-0 lg:block" data-tour="filters-panel">
          <FiltersPanel className="sticky top-24 border-0 bg-transparent p-0">
            <FilterSection title="Sort By" data-tour="sort-dropdown">
              <FilterSortDropdown />
            </FilterSection>

            <FilterSection title="Categories">
              <FilterCheckboxGroup options={categories} />
            </FilterSection>

            <FilterSection title="Brands">
              <FilterCheckboxGroup options={brands} />
            </FilterSection>

            <FilterSection title="Price">
              <FilterPriceRange />
            </FilterSection>

            <button
              className="mt-8 w-full border-2 border-foreground bg-transparent py-4 text-[10px] font-black uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
            >
              Reset Filters
            </button>
          </FiltersPanel>
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-8 lg:hidden">
            <MobileFilterSheet categories={categories} brands={brands} />
          </div>

          {error ? (
            <ProductsError
              message={error instanceof Error ? error.message : "An unexpected error occurred. Please try again."}
              onRetry={() => refetch()}
            />
          ) : isLoading ? (
            <ProductsLoader />
          ) : products.length === 0 ? (
            <ProductsEmpty />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3" data-tour="product-grid">
                {products.map((product) => (
                  <ProductCard key={product.id || product._id} product={product} />
                ))}
              </div>

              {metadata && (
                <div className="mt-16 border-t border-border/40 pt-12">
                  <ProductsPagination
                    currentPage={metadata.currentPage}
                    totalPages={metadata.numberOfPages}
                    onPageChange={() => {}}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
      </div>
    </>
  );
}
