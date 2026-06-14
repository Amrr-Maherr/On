import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useBrandDetails } from "@/features/brand-details/hooks/useGetBrandDetails";
import BrandDetailsCard from "@/features/brand-details/components/BrandDetailsCard";
import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/Error";
import BrandProducts from "@/features/brand-details/components/BrandProducts";

export default function BrandDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useBrandDetails(id!);

  if (isLoading) {
    return <LoadingState variant="row" count={3} />;
  }

  if (error) {
    return (
      <ErrorState
        title={t("brands.error.title")}
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
        retryLabel={t("brands.error.retry")}
      />
    );
  }

  const brand = data?.data;

  if (!brand) {
    return (
      <ErrorState
        title={t("brands.error.title")}
        message={t("brands.details.notFound")}
      />
    );
  }

  return (
    <div>
      <CampaignHeader
        subtitle={t("brands.card.label")}
        title={`${brand.name}.`}
        backgroundImage="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?auto=format&fit=crop&w=1920&q=80"
      />
      <PageHelmet title={brand.name} description={t("brands.page.description")} />
      <div className="container-layout py-12">
        <Breadcrumb
          className="mb-12"
          items={[
            { label: t("brands.details.breadcrumb.home"), href: "/" },
            { label: t("brands.details.breadcrumb.brands"), href: "/brands" },
            { label: brand.name },
          ]}
        />
        <BrandDetailsCard brand={brand} />

        <section className="section-py mt-20 border-t border-border/40">
          <ScrollReveal>
            <div className="mb-14 border-l-4 border-foreground pl-8">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                {t("brands.details.collection.label")}
              </span>
              <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
                {t("brands.details.collection.title")}
              </h2>
            </div>
          </ScrollReveal>
          <BrandProducts brandId={brand._id} />
        </section>
      </div>
    </div>
  );
}