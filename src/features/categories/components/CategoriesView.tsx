import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CategoryCard from "../components/CategoryCard";
import { CategoriesPageSkeleton } from "../components/CategoriesPageSkeleton";
import ErrorState from "@/components/shared/Error";
import EmptyState from "@/components/shared/EmptyState";
import Pagination from "@/components/shared/Pagination";
import MobileFilterSheet from "../components/MobileFilterSheet";
import {
  FiltersPanel,
  FilterSection,
  FilterSortDropdown,
} from "@/components/shared/filters";
import type { Category } from "@/features/categories/types";

type FilterOption = {
  label: string;
  value: string;
}

type CategoriesViewProps = {
  categories: Category[];
  metadata?: { currentPage: number; numberOfPages: number };
  sortOptions: FilterOption[];
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function CategoriesView({
  categories,
  metadata,
  sortOptions,
  isLoading,
  error,
  onRetry,
}: CategoriesViewProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return <CategoriesPageSkeleton />;
  }

  return (
    <>
      <PageHelmet title={t("categories.page.title")} description={t("categories.page.description")} />

      <CampaignHeader
        subtitle={t("categories.page.hero.subtitle")}
        title={t("categories.page.hero.title")}
        description={t("categories.page.hero.description")}
        backgroundImage="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-layout section-py pt-8">
        {error ? (
          <ErrorState
            title={t("categories.error.title")}
            message={getErrorMessage(error)}
            onRetry={onRetry}
            retryLabel={t("categories.error.retry")}
          />
        ) : categories.length === 0 ? (
          <EmptyState
            title={t("categories.empty.title")}
            description={t("categories.empty.description")}
          />
        ) : (
          <>
            <Breadcrumb items={[{ label: t("categories.page.breadcrumb.home"), href: "/" }, { label: t("categories.page.breadcrumb.categories") }]} className="mb-6" />

            <ScrollReveal>
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
            </ScrollReveal>

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

                <div className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
                  {categories.map((category, index) => (
                    <ScrollReveal key={category.id || category._id} delay={index * 0.03} direction="up" distance={20}>
                      <CategoryCard category={category} />
                    </ScrollReveal>
                  ))}
                </div>

                {metadata && (
                  <div className="mt-16 border-t border-border/40 pt-12">
                    <Pagination
                      currentPage={metadata.currentPage}
                      totalPages={metadata.numberOfPages}
                      onPageChange={() => {}}
                    />
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}
