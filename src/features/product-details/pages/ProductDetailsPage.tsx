import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import PageHelmet from "@/shared/components/PageHelmet";
import { useProductDetails } from "@/features/product-details/hooks/useGetProductDetails";
import ProductDetails from "@/features/product-details/components/ProductDetails";
import ProductDetailsLoader from "@/features/product-details/components/ProductDetailsLoader";
import ProductDetailsError from "@/features/product-details/components/ProductDetailsError";

export default function ProductDetailsPage() {
  const { t } = useTranslation();
  const { id } = useParams<{ id: string }>();

  const { data, isLoading, error, refetch } = useProductDetails(id!);

  if (isLoading) return <ProductDetailsLoader />;

  if (error) {
    return (
      <ProductDetailsError
        message={error instanceof Error ? error.message : undefined}
        onRetry={() => refetch()}
      />
    );
  }

  const product = data?.data;

  if (!product) {
    return <ProductDetailsError message={t("products.details.notFound")} />;
  }

  return (
    <>
      <PageHelmet title={product.title} description={product.description} />
      <ProductDetails product={product} />
    </>
  );
}
