import { memo } from "react";
import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";
import BrandCard from "@/features/brands/components/BrandCard";
import BrandsLoader from "@/features/brands/components/BrandsLoader";
import BrandsError from "@/features/brands/components/BrandsError";
import Slider from "@/components/shared/Slider";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const ProductDetailsBrands = memo(function ProductDetailsBrands() {
  const { data, isLoading, error, refetch } = useAllBrands(1);

  if (isLoading) {
    return (
      <section>
        <h2 className="mb-8 text-2xl font-light tracking-tight">Shop by Brand</h2>
        <Slider slidesPerView={4} slidesPerViewMobile={1.5} hideNavigation>
          {Array.from({ length: 5 }, (_, i) => (
            <BrandsLoader key={i} />
          ))}
        </Slider>
      </section>
    );
  }

  if (error) {
    return (
      <section>
        <h2 className="mb-8 text-2xl font-light tracking-tight">Shop by Brand</h2>
        <Slider slidesPerView={1} slidesPerViewMobile={1} hideNavigation>
          <BrandsError
            message={getErrorMessage(error)}
            onRetry={() => refetch()}
          />
        </Slider>
      </section>
    );
  }

  const brands = data?.data;

  if (!brands || brands.length === 0) {
    return (
      <section>
        <h2 className="mb-8 text-2xl font-light tracking-tight">Shop by Brand</h2>
        <Slider slidesPerView={1} slidesPerViewMobile={1} hideNavigation>
          <BrandsError message="No brands available at the moment." />
        </Slider>
      </section>
    );
  }

  return (
    <section>
      <h2 className="mb-8 text-2xl font-light tracking-tight">Shop by Brand</h2>
      <Slider slidesPerView={4} slidesPerViewMobile={1.5} hideNavigation={false}>
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </Slider>
    </section>
  );
});

export default ProductDetailsBrands;
