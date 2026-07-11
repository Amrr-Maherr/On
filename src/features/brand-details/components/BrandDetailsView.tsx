import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Skeleton } from "@/components/ui/skeleton";
import LazySection from "@/shared/components/LazySection";
import BrandDetailsCard from "@/features/brand-details/components/BrandDetailsCard";
import { BrandDetailsPageSkeleton } from "@/features/brand-details/components/BrandDetailsSkeleton";
import ErrorState from "@/components/shared/Error";
import BrandProducts from "@/features/brand-details/components/BrandProducts";
import type { Brand } from "@/features/brands/types";

interface BrandDetailsViewProps {
  brand: Brand | undefined;
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
}

export default function BrandDetailsView({
  brand,
  isLoading,
  error,
  onRetry,
}: BrandDetailsViewProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return <BrandDetailsPageSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        title={t("brands.error.title")}
        message={error instanceof Error ? error.message : undefined}
        onRetry={onRetry}
        retryLabel={t("brands.error.retry")}
      />
    );
  }

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
          <LazySection fallback={<Skeleton className="h-96 w-full rounded-none" />} rootMargin="0px 0px 100px 0px">
            <BrandProducts brandId={brand._id} />
          </LazySection>
        </section>
      </div>
    </div>
  );
}
