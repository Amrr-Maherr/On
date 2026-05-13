import { useState } from "react";
import ProductCard from "@/features/products/components/ProductCard";
import { useAllProducts } from "@/features/all-products/hooks/useAllProducts";
import ProductsLoader from "@/features/all-products/components/ProductsLoader";
import ProductsError from "@/features/all-products/components/ProductsError";
import ProductsEmpty from "@/features/all-products/components/ProductsEmpty";
import ProductsPagination from "@/features/all-products/components/ProductsPagination";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

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
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">All Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            {data?.results ?? products.length} products found
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id || product._id} product={product} />
        ))}
      </div>

      {metadata && (
        <ProductsPagination
          currentPage={metadata.currentPage}
          totalPages={metadata.numberOfPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
