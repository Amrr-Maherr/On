import { useState } from "react";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BrandCard from "../components/BrandCard";
import { useAllBrands } from "../hooks/useGetAllBrands";
import BrandsLoader from "../components/BrandsLoader";
import BrandsError from "../components/BrandsError";
import BrandsEmpty from "../components/BrandsEmpty";
import BrandsPagination from "../components/BrandsPagination";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function BrandsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllBrands(page);

  if (isLoading) {
    return (
      <div className="container-layout section-py pt-8">
        <div className="mb-10 h-8 w-48 animate-pulse rounded bg-muted" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {Array.from({ length: 8 }).map((_, i) => (
            <BrandsLoader key={i} />
          ))}
        </div>
      </div>
    );
  }

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
    <>
      <PageHelmet title="All Brands" description="Discover our curated brands." />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Discover
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            Brands.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            The world&apos;s most trusted names in performance sportswear.
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Brands" }]} className="mb-6" />
        <div className="mb-10">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
            Brands
          </span>
          <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground md:text-5xl">All Brands</h1>
          <p className="mt-1 text-sm text-muted-foreground/60">
            {data?.results ?? brands.length} brands discovered
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
    </>
  );
}
