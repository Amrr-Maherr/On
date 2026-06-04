import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import { CardSkeleton } from "@/components/shared/Skeleton";
import ProductsError from "@/features/products/components/ProductsError";
import Section from "@/components/shared/components/Section";

const ProductsSection = memo(function ProductsSection() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useAllProducts(1);

  const getErrorMessage = useCallback(
    (error: unknown): string => {
      if (error instanceof Error) return error.message;
      if (typeof error === "string") return error;
      return t("products.error.defaultMessage");
    },
    [t],
  );

  if (isLoading) {
    return (
      <Section
        slidesPerView={4}
        slidesPerViewMobile={1.5}
        hideNavigation
        title={t("home.sections.products.loadingTitle")}
        description={t("home.sections.products.loadingDesc")}
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
        title={t("home.sections.products.loadingTitle")}
        description={t("home.sections.products.errorDesc")}
      >
        <ProductsError
          message={getErrorMessage(error)}
          onRetry={() => refetch()}
        />
      </Section>
    );
  }

  const products = data?.data;

  if (!products || products.length === 0) {
    return (
      <Section
        slidesPerView={1}
        slidesPerViewMobile={1}
        hideNavigation
        title={t("home.sections.products.emptyTitle")}
        description={t("home.sections.products.emptyDesc")}
      >
        <ProductsError message={t("home.sections.products.noProducts")} />
      </Section>
    );
  }

  return (
    <Section
      data-tour="featured-products"
      slidesPerView={4}
      slidesPerViewMobile={1.5}
      hideNavigation={false}
      title={t("home.sections.products.title")}
      description={t("home.sections.products.description")}
    >
      {products.slice(0, 10).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Section>
  );
});

export default ProductsSection;
