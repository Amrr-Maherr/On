import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import ProductsLoader from "@/features/products/components/ProductsLoader";
import ProductsError from "@/features/products/components/ProductsError";
import Slider from "@/components/shared/Slider";

function getErrorMessage(error: unknown): string | undefined {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return undefined;
}

const ProductDetailsProducts = memo(function ProductDetailsProducts() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useAllProducts(1);

  if (isLoading) {
    return (
      <section className="section-py border-t border-border/30">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("products.details.recommendations.label")}
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            {t("products.details.recommendations.title")}
          </h2>
        </div>
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
      <section className="section-py border-t border-border/30">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("products.details.recommendations.label")}
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            {t("products.details.recommendations.title")}
          </h2>
        </div>
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
      <section className="section-py border-t border-border/30">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("products.details.recommendations.label")}
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            {t("products.details.recommendations.title")}
          </h2>
        </div>
        <Slider slidesPerView={1} slidesPerViewMobile={1} hideNavigation>
          <ProductsError message={t("products.details.recommendations.noProducts")} />
        </Slider>
      </section>
    );
  }

  return (
    <section className="section-py border-t border-border/30">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          {t("products.details.recommendations.label")}
        </span>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
          {t("products.details.recommendations.title")}
        </h2>
      </div>
      <Slider slidesPerView={4} slidesPerViewMobile={1.5} hideNavigation={false}>
        {products.slice(0, 10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </Slider>
    </section>
  );
});

export default ProductDetailsProducts;
