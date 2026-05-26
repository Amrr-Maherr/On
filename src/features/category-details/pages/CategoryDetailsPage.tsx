import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useCategoryDetails } from "@/features/category-details/hooks/useGetCategoryDetails";
import CategoryDetailsCard from "@/features/category-details/components/CategoryDetailsCard";
import CategoryDetailsLoader from "@/features/category-details/components/CategoryDetailsLoader";
import CategoryDetailsError from "@/features/category-details/components/CategoryDetailsError";
import CategoryProducts from "@/features/category-details/components/CategoryProducts";

export default function CategoryDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useCategoryDetails(id!);

  if (isLoading) return <CategoryDetailsLoader />;

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