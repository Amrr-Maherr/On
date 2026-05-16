import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";
import BrandCard from "@/features/brands/components/BrandCard";
import BrandsLoader from "@/features/brands/components/BrandsLoader";
import BrandsError from "@/features/brands/components/BrandsError";
import Slider from "@/components/shared/Slider";

function getErrorMessage(error: unknown): string | undefined {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return undefined;
}

const ProductDetailsBrands = memo(function ProductDetailsBrands() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useAllBrands(1);

  if (isLoading) {
    return (
      <section className="section-py border-t border-border/30">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("products.details.brands.label")}
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            {t("products.details.brands.title")}
          </h2>
        </div>
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
      <section className="section-py border-t border-border/30">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("products.details.brands.label")}
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            {t("products.details.brands.title")}
          </h2>
        </div>
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
      <section className="section-py border-t border-border/30">
        <div className="mb-12">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("products.details.brands.label")}
          </span>
          <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
            {t("products.details.brands.title")}
          </h2>
        </div>
        <Slider slidesPerView={1} slidesPerViewMobile={1} hideNavigation>
          <BrandsError message={t("products.details.brands.noBrands")} />
        </Slider>
      </section>
    );
  }

  return (
    <section className="section-py border-t border-border/30">
      <div className="mb-12">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          {t("products.details.brands.label")}
        </span>
        <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
          {t("products.details.brands.title")}
        </h2>
      </div>
      <Slider slidesPerView={4} slidesPerViewMobile={1.5} hideNavigation={false}>
        {brands.map((brand) => (
          <BrandCard key={brand._id} brand={brand} />
        ))}
      </Slider>
    </section>
  );
});

export default ProductDetailsBrands;
