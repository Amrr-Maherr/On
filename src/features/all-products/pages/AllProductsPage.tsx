import { useMemo } from "react";
import { useQuery } from "@tanstack/react-query";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import ProductCard from "@/features/products/components/ProductCard";
import ProductsLoader from "@/features/all-products/components/ProductsLoader";
import ProductsError from "@/features/all-products/components/ProductsError";
import ProductsEmpty from "@/features/all-products/components/ProductsEmpty";
import ProductsPagination from "@/features/all-products/components/ProductsPagination";
import MobileFilterSheet from "@/features/all-products/components/MobileFilterSheet";
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
import type { Category } from "@/features/all-categories/types";
import type { Brand } from "@/features/all-brands/types";

export default function AllProductsPage() {
  const { data, isLoading, error, refetch } = useQuery<ApiResponse<Product>>({
    queryKey: ["all-products"],
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

      <div className="mb-8">
        <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
          Products
        </span>
        <div className="mt-2 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">All Products</h1>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-full sm:w-56">
              <FilterSortDropdown />
            </div>
            <div className="lg:hidden">
              <MobileFilterSheet categories={categories} brands={brands} />
            </div>
          </div>
        </div>
        <p className="mt-1.5 text-sm text-muted-foreground/60">
          {products.length} {products.length === 1 ? "product" : "products"} found
        </p>
      </div>

      <div className="mt-8 flex gap-8">
        <div className="hidden lg:block">
          <FiltersPanel>
            <FilterSection title="Category">
              <FilterCheckboxGroup options={categories} />
            </FilterSection>

            <FilterSection title="Brand">
              <FilterCheckboxGroup options={brands} />
            </FilterSection>

            <FilterSection title="Price Range">
              <FilterPriceRange />
            </FilterSection>
          </FiltersPanel>
        </div>

        <div className="min-w-0 flex-1">
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
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <ProductCard key={product.id || product._id} product={product} />
                ))}
              </div>

              {metadata && (
                <div className="mt-8">
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
