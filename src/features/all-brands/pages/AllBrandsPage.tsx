import { useState, memo, useMemo, useCallback, lazy, Suspense } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BrandCard from "@/features/brands/components/BrandCard";
import { useAllBrands } from "@/features/all-brands/hooks/useAllBrands";
import BrandsError from "@/features/all-brands/components/BrandsError";
import BrandsEmpty from "@/features/all-brands/components/BrandsEmpty";
import { GridSkeleton, CampaignHeaderSkeleton } from "@/components/shared/Skeleton";
import { cn } from "@/lib/utils";

const CampaignHeader = lazy(() => import("@/components/shared/components/CampaignHeader"));
const BrandsPagination = lazy(() => import("@/features/all-brands/components/BrandsPagination"));

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const AllBrandsPage = memo(function AllBrandsPage() {
  const [page, setPage] = useState(1);
  const { data, isLoading, error, refetch } = useAllBrands(page);

  const handlePageChange = useCallback((nextPage: number) => {
    setPage(nextPage);
  }, []);

  const handleRetry = useCallback(() => {
    refetch();
  }, [refetch]);

  const brands = useMemo(() => data?.data, [data]);
  const metadata = useMemo(() => data?.metadata, [data]);
  const brandCount = useMemo(() => data?.results ?? brands?.length ?? 0, [data, brands]);

  if (isLoading) {
    return (
      <>
        <CampaignHeaderSkeleton />
        <GridSkeleton />
      </>
    );
  }

  if (error) {
    return (
      <BrandsError
        message={getErrorMessage(error)}
        onRetry={handleRetry}
      />
    );
  }

  if (!brands || brands.length === 0) {
    return <BrandsEmpty />;
  }

  return (
    <>
      <PageHelmet title="All Brands" description="Discover our curated brands." />

      <Suspense fallback={<CampaignHeaderSkeleton />}>
        <CampaignHeader
          subtitle="Discover"
          title="Brands."
          description="The world&apos;s most trusted names in performance sportswear."
          backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
        />
      </Suspense>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "All Brands" }]} className="mb-6" />
        <ScrollReveal>
          <div className="mb-10">
            <h1 className="text-4xl font-black tracking-tight text-foreground md:text-5xl">All Brands</h1>
            <p className="mt-2 text-sm text-muted-foreground/70">
              {brandCount} brands
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {brands.map((brand, index) => (
            <ScrollReveal key={brand._id} delay={index * 0.03} direction="up" distance={20}>
              <BrandCard brand={brand} />
            </ScrollReveal>
          ))}
        </div>

        {metadata && (
          <div className="mt-10">
            <Suspense fallback={<div className={cn("h-10 w-full animate-pulse bg-muted rounded-md")} />}>
              <BrandsPagination
                currentPage={metadata.currentPage}
                totalPages={metadata.numberOfPages}
                onPageChange={handlePageChange}
              />
            </Suspense>
          </div>
        )}
      </div>
    </>
  );
});

export default AllBrandsPage;
