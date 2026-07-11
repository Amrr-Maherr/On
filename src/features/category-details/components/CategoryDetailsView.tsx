import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import LazySection from "@/shared/components/LazySection";
import CategoryDetailsCard from "@/features/category-details/components/CategoryDetailsCard";
import { CategoryDetailsPageSkeleton } from "@/features/category-details/components/CategoryDetailsSkeleton";
import ErrorState from "@/components/shared/Error";
import CategoryProducts from "@/features/category-details/components/CategoryProducts";
import type { Category } from "@/features/categories/types";

interface CategoryDetailsViewProps {
  category: Category | undefined;
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
}

export default function CategoryDetailsView({
  category,
  isLoading,
  error,
  onRetry,
}: CategoryDetailsViewProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return <CategoryDetailsPageSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        title={t("categories.error.title")}
        message={error instanceof Error ? error.message : undefined}
        onRetry={onRetry}
        retryLabel={t("categories.error.retry")}
      />
    );
  }

  if (!category) {
    return (
      <ErrorState
        title={t("categories.error.title")}
        message={t("categories.details.notFound")}
      />
    );
  }

  return (
    <div>
      <CampaignHeader
        subtitle={t("categories.page.hero.subtitle")}
        title={`${category.name}.`}
        backgroundImage="https://images.unsplash.com/photo-1551698618-1dfe5d97d256?auto=format&fit=crop&w=1920&q=80"
      />
      <PageHelmet title={category.name} description={t("categories.page.description")} />
      <div className="container-layout py-12">
        <Breadcrumb
          className="mb-12"
          items={[
            { label: t("categories.details.breadcrumb.home"), href: "/" },
            { label: t("categories.details.breadcrumb.categories"), href: "/categories" },
            { label: category.name },
          ]}
        />
        <CategoryDetailsCard category={category} />

        <section className="section-py mt-20 border-t border-border/40">
          <ScrollReveal>
            <div className="mb-14 border-l-4 border-foreground pl-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                {t("categories.details.collection.label")}
              </span>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
                {t("categories.details.collection.title")}
              </h2>
            </div>
          </ScrollReveal>
          <LazySection fallback={<Skeleton className="h-96 w-full rounded-none" />} rootMargin="0px 0px 100px 0px">
            <CategoryProducts categoryId={category._id} />
          </LazySection>
        </section>
      </div>
    </div>
  );
}
