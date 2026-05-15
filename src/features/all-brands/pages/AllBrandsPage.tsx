import { useState } from "react";
import PageHelmet from "@/shared/components/PageHelmet";
import BrandCard from "@/features/brands/components/BrandCard";
import { useAllBrands } from "@/features/all-brands/hooks/useAllBrands";
import BrandsLoader from "@/features/all-brands/components/BrandsLoader";
import BrandsError from "@/features/all-brands/components/BrandsError";
import BrandsEmpty from "@/features/all-brands/components/BrandsEmpty";
import BrandsPagination from "@/features/all-brands/components/BrandsPagination";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function AllBrandsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllBrands(page);

  if (isLoading) return <BrandsLoader />;

  if (error) {
    return (
      <BrandsError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const brands = data?.data;
  const metadata = data?.metadata;

  if (!brands || brands.length === 0) {
    return <BrandsEmpty />;
  }

  return (
    <div className="container-layout section-py pt-8">
      <PageHelmet title="All Brands" description="Discover our curated brands." />
      <div className="mb-10">
        <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">All Brands</h1>
        <p className="mt-2 text-sm text-muted-foreground/70">
          {data?.results ?? brands.length} brands
        </p>
      </div>

      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </div>

      {metadata && (
        <div className="mt-10">
          <BrandsPagination
            currentPage={metadata.currentPage}
            totalPages={metadata.numberOfPages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}
