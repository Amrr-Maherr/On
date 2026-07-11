import { useTranslation } from "react-i18next";
import PageHelmet from "@/shared/components/PageHelmet";
import ProductDetails from "@/features/product-details/components/ProductDetails";
import { ProductDetailsPageSkeleton } from "@/features/product-details/components/ProductDetailsSkeleton";
import ErrorState from "@/components/shared/Error";
import type { Product } from "@/features/products/types";

type ProductDetailsViewProps = {
  product: Product | undefined;
  isLoading: boolean;
  error: Error | null;
  onRetry: () => void;
}

export default function ProductDetailsView({
  product,
  isLoading,
  error,
  onRetry,
}: ProductDetailsViewProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return <ProductDetailsPageSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        title={t("products.error.title")}
        message={error instanceof Error ? error.message : undefined}
        onRetry={onRetry}
        retryLabel={t("products.error.retry")}
      />
    );
  }

  if (!product) {
    return (
      <ErrorState
        title={t("products.error.title")}
        message={t("products.details.notFound")}
      />
    );
  }

  return (
    <>
      <PageHelmet title={product.title} description={product.description} />
      <ProductDetails product={product} />
    </>
  );
}
