import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";
import BrandCard from "@/features/brands/components/BrandCard";
import { CardSkeleton } from "@/components/shared/Skeleton";
import ErrorState from "@/components/shared/Error";
import Section from "@/components/shared/components/Section";

const BrandsSection = memo(function BrandsSection() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useAllBrands(1);

  const getErrorMessage = useCallback(
    (error: unknown): string => {
      if (error instanceof Error) return error.message;
      if (typeof error === "string") return error;
      return t("brands.error.defaultMessage");
    },
    [t],
  );

  if (isLoading) {
    return (
      <Section
        slidesPerView={4}
        slidesPerViewMobile={1.5}
        hideNavigation
        title={t("home.sections.brands.title")}
        description={t("home.sections.brands.description")}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </Section>
    );
  }

  if (error) {
    return (
      <Section
        slidesPerView={1}
        slidesPerViewMobile={1}
        hideNavigation
        title={t("home.sections.brands.title")}
        description={t("home.sections.brands.description")}
      >
        <ErrorState
          title={t("brands.error.title")}
          message={getErrorMessage(error)}
          onRetry={() => refetch()}
          retryLabel={t("brands.error.retry")}
        />
      </Section>
    );
  }

  const brands = data?.data;

  if (!brands || brands.length === 0) {
    return (
      <Section
        slidesPerView={1}
        slidesPerViewMobile={1}
        hideNavigation
        title={t("home.sections.brands.title")}
        description={t("home.sections.brands.description")}
      >
        <ErrorState
          title={t("brands.error.title")}
          message={t("home.sections.brands.noBrands")}
        />
      </Section>
    );
  }

  return (
    <Section
      data-tour="brands-section"
      slidesPerView={4}
      slidesPerViewMobile={1.5}
      hideNavigation={false}
      title={t("home.sections.brands.title")}
      description={t("home.sections.brands.description")}
    >
      {brands.map((brand) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </Section>
  );
});

export default BrandsSection;
