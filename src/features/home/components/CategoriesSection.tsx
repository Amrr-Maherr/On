import { memo } from "react";
import { useAllCategories } from "@/features/categories/hooks/useGetAllCategories";
import CategoryCard from "@/features/categories/components/CategoryCard";
import CategoriesLoader from "@/features/categories/components/CategoriesLoader";
import CategoriesError from "@/features/categories/components/CategoriesError";
import Section from "@/components/shared/components/Section";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const CategoriesSection = memo(function CategoriesSection() {
  const { data, isLoading, error, refetch } = useAllCategories(1);

  if (isLoading) {
    return (
      <Section
        slidesPerView={4}
        slidesPerViewMobile={1.5}
        hideNavigation
        title="Categories."
        description="Shop by category"
      >
        {Array.from({ length: 5 }, (_, i) => (
          <CategoriesLoader key={i} />
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
        title="Categories."
        description="Shop by category"
      >
        <CategoriesError
          message={getErrorMessage(error)}
          onRetry={() => refetch()}
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
        title="Categories."
        description="Shop by category"
      >
        <CategoriesError message="No categories available at the moment." />
      </Section>
    );
  }

  return (
    <Section
      slidesPerView={4}
      slidesPerViewMobile={1.5}
      hideNavigation={false}
      title="Categories."
      description="Shop by category"
    >
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category} />
      ))}
    </Section>
  );
});

export default CategoriesSection;
