import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";
import BrandCard from "@/features/brands/components/BrandCard";
import BrandsLoader from "@/features/brands/components/BrandsLoader";
import BrandsError from "@/features/brands/components/BrandsError";
import Section from "@/components/shared/components/Section";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function BrandsSection() {
  const { data, isLoading, error, refetch } = useAllBrands(1);

  if (isLoading) {
    return (
      <Section
        slidesPerView={4}
        slidesPerViewMobile={1.5}
        hideNavigation
        title="Brands."
        description="Shop by brand"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <BrandsLoader key={i} />
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
        title="Brands."
        description="Shop by brand"
      >
        <BrandsError
          message={getErrorMessage(error)}
          onRetry={() => refetch()}
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
        title="Brands."
        description="Shop by brand"
      >
        <BrandsError message="No brands available at the moment." />
      </Section>
    );
  }

  return (
    <Section
      slidesPerView={4}
      slidesPerViewMobile={1.5}
      hideNavigation={false}
      title="Brands."
      description="Shop by brand"
    >
      {brands.map((brand) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </Section>
  );
}
