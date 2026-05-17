import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BrandCard from "../components/BrandCard";
import BrandsLoader from "../components/BrandsLoader";
import BrandsError from "../components/BrandsError";
import BrandsEmpty from "../components/BrandsEmpty";
import BrandsPagination from "../components/BrandsPagination";
import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Brand } from "@/features/brands/types";

export default function BrandsPage() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useQuery<ApiResponse<Brand>>({
    queryKey: ["brands", "all"],
    queryFn: () =>
      api.get<ApiResponse<Brand>>("/api/v1/brands").then((r) => r.data),
    staleTime: 1_000 * 60 * 2,
  });

  const brands = useMemo(() => data?.data ?? [], [data?.data]);
  const metadata = data?.metadata;

  return (
    <>
      <PageHelmet title={t("brands.page.title")} description={t("brands.page.description")} />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("brands.page.hero.subtitle")}
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            {t("brands.page.hero.title")}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            {t("brands.page.hero.description")}
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: t("brands.page.breadcrumb.home"), href: "/" }, { label: t("brands.page.breadcrumb.brands") }]} className="mb-6" />

        <div className="mb-12 border-l-4 border-foreground pl-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
            {t("brands.page.catalog.label")}
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
            {t("brands.page.catalog.title")}
          </h1>
          <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
            {t("brands.page.catalog.count", { count: brands.length })}
          </p>
        </div>

        {error ? (
          <BrandsError
            message={error instanceof Error ? error.message : t("brands.error.defaultMessage")}
            onRetry={() => refetch()}
          />
        ) : isLoading ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <BrandsLoader key={i} />
            ))}
          </div>
        ) : brands.length === 0 ? (
          <BrandsEmpty />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand) => (
                <BrandCard key={brand._id} brand={brand} />
              ))}
            </div>

            {metadata && (
              <div className="mt-16 border-t border-border/40 pt-12">
                <BrandsPagination
                  currentPage={metadata.currentPage}
                  totalPages={metadata.numberOfPages}
                  onPageChange={() => {}}
                />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}