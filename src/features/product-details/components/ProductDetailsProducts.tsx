import { memo } from "react";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import ProductsLoader from "@/features/products/components/ProductsLoader";
import ProductsError from "@/features/products/components/ProductsError";
import Slider from "@/components/shared/Slider";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const ProductDetailsProducts = memo(function ProductDetailsProducts() {
  const { data, isLoading, error, refetch } = useAllProducts(1);

  if (isLoading) {
    return (
      <section>
        <h2 className="mb-8 text-2xl font-light tracking-tight">You May Also Like</h2>
        <Slider slidesPerView={4} slidesPerViewMobile={1.5} hideNavigation>
          {Array.from({ length: 5 }, (_, i) => (
            <ProductsLoader key={i} />
          ))}
        </Slider>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="mb-8 text-2xl font-light tracking-tight">You May Also Like</h2>
        <Slider slidesPerView={1} slidesPerViewMobile={1} hideNavigation>
          <ProductsError
            message={getErrorMessage(error)}
            onRetry={() => refetch()}
          />
        </Slider>
      </section>
    );
  }

  const products = data?.data;

  if (!products || products.length === 0) {
    return (
      <section>
        <h2 className="mb-8 text-2xl font-light tracking-tight">You May Also Like</h2>
        <Slider slidesPerView={1} slidesPerViewMobile={1} hideNavigation>
          <ProductsError message="No products available at the moment." />
        </Slider>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-8 text-2xl font-light tracking-tight">You May Also Like</h2>
      <Slider slidesPerView={4} slidesPerViewMobile={1.5} hideNavigation={false}>
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
});

export default ProductDetailsProducts;
