import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useCategoryDetails } from "@/features/category-details/hooks/useGetCategoryDetails";
import CategoryDetailsCard from "@/features/category-details/components/CategoryDetailsCard";
import { CampaignHeaderSkeleton } from "@/components/shared/Skeleton";
import CategoryDetailsError from "@/features/category-details/components/CategoryDetailsError";
import CategoryProducts from "@/features/category-details/components/CategoryProducts";

export default function CategoryDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useCategoryDetails(id!);

  if (isLoading) {
    return (
      <>
        <CampaignHeaderSkeleton />
        <div className="container-layout py-8">
          <div className="mb-6 h-4 w-64 animate-pulse rounded bg-muted" />
          <div className="grid gap-16 md:grid-cols-2">
            <div className="animate-pulse">
              <div className="aspect-[4/5] w-full rounded-2xl bg-muted/60" />
            </div>
            <div className="flex flex-col justify-center gap-10">
              <div className="space-y-4 pl-8">
                <div className="h-3 w-16 animate-pulse rounded bg-muted/60" />
                <div className="h-10 w-3/4 animate-pulse rounded bg-muted/60" />
                <div className="h-4 w-1/3 animate-pulse rounded bg-muted/40" />
              </div>
              <div className="flex items-center gap-4 border-t border-border/40 pt-8">
                <div className="h-12 w-12 animate-pulse bg-muted/60" />
                <div className="space-y-2">
                  <div className="h-3 w-20 animate-pulse rounded bg-muted/40" />
                  <div className="h-4 w-32 animate-pulse rounded bg-muted/60" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  if (error) {
    return (
      <CategoryDetailsError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    );
  }

  const category = data?.data;

  if (!category) {
    return <CategoryDetailsError message={t("categories.details.notFound")} />;
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
          <CategoryProducts categoryId={category._id} />
        </section>
      </div>
    </div>
  );
}