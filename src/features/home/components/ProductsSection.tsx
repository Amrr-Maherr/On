import { memo } from "react";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import ProductsLoader from "@/features/products/components/ProductsLoader";
import ProductsError from "@/features/products/components/ProductsError";
import Section from "@/components/shared/components/Section";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const ProductsSection = memo(function ProductsSection() {
  const { data, isLoading, error, refetch } = useAllProducts(1);

  if (isLoading) {
    return (
      <Section
        slidesPerView={4}
        slidesPerViewMobile={1.5}
        hideNavigation
        title="Recommendations."
        description="Best matching products for you"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <ProductsLoader key={i} />
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
        title="Recommendations."
        description="Best matching products for you"
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
        title="Recommendations."
        description="Best matching products for you"
      >
        <ProductsError message="No products available at the moment." />
      </Section>
    );
  }

  return (
    <Section
      slidesPerView={4}
      slidesPerViewMobile={1.5}
      hideNavigation={false}
      title="Recommendations."
      description="Best matching products for you"
    >
      {products.slice(0, 10).map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Section>
  );
});

export default ProductsSection;
