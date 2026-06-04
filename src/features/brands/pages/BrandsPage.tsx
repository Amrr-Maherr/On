import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useQuery } from "@tanstack/react-query";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import BrandCard from "../components/BrandCard";
import { CardSkeleton } from "@/components/shared/Skeleton";
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

      <CampaignHeader
        subtitle={t("brands.page.hero.subtitle")}
        title={t("brands.page.hero.title")}
        description={t("brands.page.hero.description")}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: t("brands.page.breadcrumb.home"), href: "/" }, { label: t("brands.page.breadcrumb.brands") }]} className="mb-6" />

        <ScrollReveal>
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
        </ScrollReveal>

        {error ? (
          <BrandsError
            message={error instanceof Error ? error.message : t("brands.error.defaultMessage")}
            onRetry={() => refetch()}
          />
        ) : isLoading ? (
          <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        ) : brands.length === 0 ? (
          <BrandsEmpty />
        ) : (
          <>
            <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {brands.map((brand, index) => (
                <ScrollReveal key={brand._id} delay={index * 0.03} direction="up" distance={20}>
                  <BrandCard brand={brand} />
                </ScrollReveal>
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