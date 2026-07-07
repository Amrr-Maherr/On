import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAllCategories } from "@/features/categories/hooks/useGetAllCategories";
import CategoryCard from "@/features/categories/components/CategoryCard";
import { CategoryCardSkeleton } from "@/features/categories/components/CategoryCardSkeleton";
import ErrorState from "@/components/shared/Error";
import Section from "@/components/shared/components/Section";

const CategoriesSection = memo(function CategoriesSection() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useAllCategories(1);

  const getErrorMessage = useCallback(
    (error: unknown): string => {
      if (error instanceof Error) return error.message;
      if (typeof error === "string") return error;
      return t("categories.error.defaultMessage");
    },
    [t],
  );

  if (isLoading) {
    return (
      <Section
        slidesPerView={4}
        slidesPerViewMobile={1.5}
        hideNavigation
        title={t("home.sections.categories.title")}
        description={t("home.sections.categories.description")}
      >
        {Array.from({ length: 5 }, (_, i) => (
          <CategoryCardSkeleton key={i} />
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
        title={t("home.sections.categories.title")}
        description={t("home.sections.categories.description")}
      >
        <ErrorState
          title={t("categories.error.title")}
          message={getErrorMessage(error)}
          onRetry={() => refetch()}
          retryLabel={t("categories.error.retry")}
        />
      </Section>
    );
  }

  const categories = data?.data;

  if (!categories || categories.length === 0) {
    return (
      <Section
        slidesPerView={1}
        slidesPerViewMobile={1}
        hideNavigation
        title={t("home.sections.categories.title")}
        description={t("home.sections.categories.description")}
      >
        <ErrorState
          title={t("categories.error.title")}
          message={t("home.sections.categories.noCategories")}
        />
      </Section>
    );
  }

  return (
    <Section
      slidesPerView={4}
      slidesPerViewMobile={1.5}
      hideNavigation={false}
      title={t("home.sections.categories.title")}
      description={t("home.sections.categories.description")}
    >
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </Section>
  );
});

export default CategoriesSection;
