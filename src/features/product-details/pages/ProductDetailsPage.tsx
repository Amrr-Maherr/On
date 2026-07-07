import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageHelmet from "@/shared/components/PageHelmet";
import { useProductDetails } from "@/features/product-details/hooks/useGetProductDetails";
import ProductDetails from "@/features/product-details/components/ProductDetails";
import { ProductDetailsPageSkeleton } from "@/features/product-details/components/ProductDetailsSkeleton";
import ErrorState from "@/components/shared/Error";

export default function ProductDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useProductDetails(id!);

  if (isLoading) {
    return <ProductDetailsPageSkeleton />;
  }

  if (error) {
    return (
      <ErrorState
        title={t("products.error.title")}
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
        retryLabel={t("products.error.retry")}
      />
    );
  }

  const product = data?.data;

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
