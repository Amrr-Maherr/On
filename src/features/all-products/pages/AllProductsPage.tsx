import { useState } from "react";
import PageHelmet from "@/shared/components/PageHelmet";
import ProductCard from "@/features/products/components/ProductCard";
import { useAllProducts } from "@/features/all-products/hooks/useAllProducts";
import ProductsLoader from "@/features/all-products/components/ProductsLoader";
import ProductsError from "@/features/all-products/components/ProductsError";
import ProductsEmpty from "@/features/all-products/components/ProductsEmpty";
import ProductsPagination from "@/features/all-products/components/ProductsPagination";
import {
  FiltersPanel,
  FilterSection,
  FilterCheckboxGroup,
  FilterPriceRange,
  FilterSortDropdown,
  FilterSearchInput,
} from "@/components/shared/filters";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const categories = [
  { label: "Electronics", count: 42 },
  { label: "Clothing", count: 28 },
  { label: "Home & Garden", count: 15 },
  { label: "Sports", count: 22 },
  { label: "Books", count: 34 },
];

const brands = [
  { label: "Nike", count: 18 },
  { label: "Apple", count: 12 },
  { label: "Samsung", count: 9 },
  { label: "Sony", count: 7 },
  { label: "Adidas", count: 14 },
];

export default function AllProductsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllProducts(page);

  if (isLoading) return <ProductsLoader />;

  if (error) {
    return (
      <ProductsError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const products = data?.data;
  const metadata = data?.metadata;

  if (!products || products.length === 0) {
    return <ProductsEmpty />;
  }

  return (
    <div className="container-layout py-8">
      <PageHelmet title="All Products" description="Browse our complete collection of products." />
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">All Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data?.results ?? products.length} products found
          </p>
        </div>
        <div className="w-full sm:w-56">
          <FilterSortDropdown />
        </div>
      </div>

      <div className="mt-8 flex gap-8">
        <FiltersPanel>
          <FilterSearchInput placeholder="Search products..." />

          <FilterSection title="Category">
            <FilterCheckboxGroup options={categories} />
          </FilterSection>

          <FilterSection title="Brand">
            <FilterCheckboxGroup options={brands} />
          </FilterSection>

          <FilterSection title="Price Range">
            <FilterPriceRange min={0} max={1000} />
          </FilterSection>
        </FiltersPanel>

        <div className="min-w-0 flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {products.map((product) => (
              <ProductCard key={product.id || product._id} product={product} />
            ))}
          </div>

          {metadata && (
            <div className="mt-8">
              <ProductsPagination
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
