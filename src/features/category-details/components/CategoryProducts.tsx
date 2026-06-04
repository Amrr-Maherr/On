import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import { CardSkeleton } from "@/components/shared/Skeleton";
import ProductsError from "@/features/products/components/ProductsError";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface CategoryProductsProps {
  categoryId: string;
}

const CategoryProducts = memo(function CategoryProducts({ categoryId }: CategoryProductsProps) {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useAllProducts({
    categoryIn: [categoryId],
    limit: 12,
  });

  if (isLoading) {
    return (
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {Array.from({ length: 4 }, (_, i) => (
          <CardSkeleton key={i} />
        ))}
      </div>
    );
  }

  if (error) {
    return (
      <ProductsError
        message={error instanceof Error ? error.message : t("categories.details.products.error")}
        onRetry={() => refetch()}
      />
    );
  }

  const products = data?.data ?? [];

  if (products.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border/60 py-20 text-center">
        <p className="text-lg font-medium text-muted-foreground">{t("categories.details.products.empty")}</p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {products.map((product, index) => (
        <ScrollReveal
          key={product.id || product._id}
          direction="up"
          distance={40}
          delay={index * 0.1}
        >
          <ProductCard product={product} />
        </ScrollReveal>
      ))}
    </div>
  );
});

export default CategoryProducts;