import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import ProductCard from "@/features/products/components/ProductCard";
import { useAllProducts } from "@/features/all-products/hooks/useAllProducts";
import { useLocalSearch } from "@/shared/hooks/useLocalSearch";
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
import type { Category } from "@/features/all-categories/types";
import type { Brand } from "@/features/all-brands/types";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function AllProductsPage() {
  const [searchParams] = useSearchParams();
  const urlQuery = searchParams.get("q") || "";

  const [page, setPage] = useState(1);
  const [sort, setSort] = useState("");
  const [priceGte, setPriceGte] = useState<number>(0);
  const [priceLte, setPriceLte] = useState<number>(10000);
  const [categoryIn, setCategoryIn] = useState<string[]>([]);
  const [brandIn, setBrandIn] = useState<string[]>([]);

  const { data, isLoading, error, refetch } = useAllProducts({
    page,
    sort: sort || undefined,
    priceGte: priceGte > 0 ? priceGte : undefined,
    priceLte: priceLte < 10000 ? priceLte : undefined,
    categoryIn: categoryIn.length > 0 ? categoryIn : undefined,
    brandIn: brandIn.length > 0 ? brandIn : undefined,
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

  const categories =
    categoriesData?.data.map((cat) => ({
      label: cat.name,
      value: cat._id,
    })) ?? [];

  const brands =
    brandsData?.data.map((b) => ({
      label: b.name,
      value: b._id,
    })) ?? [];

  const products = data?.data ?? [];
  const metadata = data?.metadata;

  const { query: localQuery, filtered } = useLocalSearch(products);

  const searchQuery = urlQuery || localQuery;

  const displayProducts = searchQuery ? filtered : products;

  const resultsCount = (searchQuery ? filtered.length : data?.results) ?? products.length;

  const handleReset = () => {
    setSort("");
    setPriceGte(0);
    setPriceLte(10000);
    setCategoryIn([]);
    setBrandIn([]);
    setPage(1);
  };

  if (isLoading) return <ProductsLoader />;

  if (error) {
    return (
      <ProductsError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  if (!products || products.length === 0) {
    return <ProductsEmpty />;
  }

  return (
    <div className="container-layout py-8">
      <PageHelmet title="All Products" description="Browse our complete collection of products." />

      {searchQuery && (
        <div className="mb-4">
          <p className="text-sm text-muted-foreground">
            Search results for &ldquo;{searchQuery}&rdquo;
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">All Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {resultsCount} {resultsCount === 1 ? "product" : "products"} found
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="w-full sm:w-56">
            <FilterSortDropdown value={sort} onChange={setSort} />
          </div>
          <div className="lg:hidden">
            <MobileFilterSheet
              sort={sort}
              onSortChange={setSort}
              categories={categories}
              categoryIn={categoryIn}
              onCategoryChange={(v) => { setCategoryIn(v); setPage(1); }}
              brands={brands}
              brandIn={brandIn}
              onBrandChange={(v) => { setBrandIn(v); setPage(1); }}
              priceGte={priceGte}
              priceLte={priceLte}
              onPriceChange={(min, max) => { setPriceGte(min); setPriceLte(max); setPage(1); }}
              onReset={handleReset}
            />
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-8">
        <div className="hidden lg:block">
          <FiltersPanel>
            <FilterSection title="Category">
              <FilterCheckboxGroup
                options={categories}
                selectedValues={categoryIn}
                onChange={(v) => { setCategoryIn(v); setPage(1); }}
              />
            </FilterSection>

            <FilterSection title="Brand">
              <FilterCheckboxGroup
                options={brands}
                selectedValues={brandIn}
                onChange={(v) => { setBrandIn(v); setPage(1); }}
              />
            </FilterSection>

            <FilterSection title="Price Range">
              <FilterPriceRange
                min={0}
                max={10000}
                minValue={priceGte}
                maxValue={priceLte}
                onChange={(min, max) => { setPriceGte(min); setPriceLte(max); setPage(1); }}
              />
            </FilterSection>
          </FiltersPanel>
        </div>

        <div className="min-w-0 flex-1">
          {displayProducts.length === 0 ? (
            <ProductsEmpty />
          ) : (
            <>
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {displayProducts.map((product) => (
                  <ProductCard key={product.id || product._id} product={product} />
                ))}
              </div>

              {!searchQuery && metadata && (
                <div className="mt-8">
                  <ProductsPagination
                    currentPage={metadata.currentPage}
                    totalPages={metadata.numberOfPages}
                    onPageChange={setPage}
                  />
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}
