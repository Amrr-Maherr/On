import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CategoryCard from "../components/CategoryCard";
import CategoriesLoader from "../components/CategoriesLoader";
import CategoriesError from "../components/CategoriesError";
import CategoriesEmpty from "../components/CategoriesEmpty";
import CategoriesPagination from "../components/CategoriesPagination";
import MobileFilterSheet from "../components/MobileFilterSheet";
import {
  FiltersPanel,
  FilterSection,
  FilterSortDropdown,
} from "@/components/shared/filters";
import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Category } from "@/features/categories/types";

export default function CategoriesPage() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useQuery<ApiResponse<Category>>({
    queryKey: ["categories", "all"],
    queryFn: () =>
      api.get<ApiResponse<Category>>("/api/v1/categories").then((r) => r.data),
    staleTime: 1_000 * 60 * 2,
  });

  const categories = useMemo(() => data?.data ?? [], [data?.data]);
  const metadata = data?.metadata;

  const sortOptions = useMemo(
    () => [
      { label: t("categories.filters.sort.nameAZ"), value: "name-asc" },
      { label: t("categories.filters.sort.nameZA"), value: "name-desc" },
      { label: t("categories.filters.sort.mostProducts"), value: "most-products" },
    ],
    [t],
  );

  return (
    <>
      <PageHelmet title={t("categories.page.title")} description={t("categories.page.description")} />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("categories.page.hero.subtitle")}
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            {t("categories.page.hero.title")}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            {t("categories.page.hero.description")}
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: t("categories.page.breadcrumb.home"), href: "/" }, { label: t("categories.page.breadcrumb.categories") }]} className="mb-6" />

        <div className="mb-12 border-l-4 border-foreground pl-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
            {t("categories.page.catalog.label")}
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
            {t("categories.page.catalog.title")}
          </h1>
          <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
            {t("categories.page.catalog.count", { count: categories.length })}
          </p>
        </div>

        <div className="flex gap-16">
          <div className="hidden w-64 shrink-0 lg:block">
            <FiltersPanel className="sticky top-24 border-0 bg-transparent p-0">
              <FilterSection title={t("categories.filters.sortBy")}>
                <FilterSortDropdown options={sortOptions} />
              </FilterSection>

              <button
                className="mt-8 w-full border-2 border-foreground bg-transparent py-4 text-[10px] font-black uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background"
              >
                {t("categories.filters.reset")}
              </button>
            </FiltersPanel>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-8 lg:hidden">
              <MobileFilterSheet sortOptions={sortOptions} />
            </div>

            {error ? (
              <CategoriesError
                message={error instanceof Error ? error.message : t("categories.error.defaultMessage")}
                onRetry={() => refetch()}
              />
            ) : isLoading ? (
              <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                {Array.from({ length: 6 }).map((_, i) => (
                  <CategoriesLoader key={i} />
                ))}
              </div>
            ) : categories.length === 0 ? (
              <CategoriesEmpty />
            ) : (
              <>
                <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category) => (
                    <CategoryCard key={category.id || category._id} category={category} />
                  ))}
                </div>

                {metadata && (
                  <div className="mt-16 border-t border-border/40 pt-12">
                    <CategoriesPagination
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