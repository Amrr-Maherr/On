import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useBrandDetails } from "@/features/brand-details/hooks/useGetBrandDetails";
import BrandDetailsCard from "@/features/brand-details/components/BrandDetailsCard";
import { CampaignHeaderSkeleton } from "@/components/shared/Skeleton";
import BrandDetailsError from "@/features/brand-details/components/BrandDetailsError";
import BrandProducts from "@/features/brand-details/components/BrandProducts";

export default function BrandDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useBrandDetails(id!);

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
      <BrandDetailsError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    );
  }

  const brand = data?.data;

  if (!brand) {
    return <BrandDetailsError message={t("brands.details.notFound")} />;
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