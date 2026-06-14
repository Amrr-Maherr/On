import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import { CardSkeleton } from "@/components/shared/Skeleton";
import ErrorState from "@/components/shared/Error";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const TrendingProductsSection = memo(function TrendingProductsSection() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();
  const { data, isLoading, error, refetch } = useAllProducts(1);
  const handleViewAll = useCallback(() => navigate(buildLocalizedPath("/products", lang)), [navigate, lang]);

  const getErrorMessage = useCallback(
    (error: unknown): string => {
      if (error instanceof Error) return error.message;
      if (typeof error === "string") return error;
      return t("products.error.defaultMessage");
    },
    [t],
  );

  return (
    <section className="section-py bg-background">
      <div className="container-layout">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between border-l-8 border-foreground pl-6">
            <div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-foreground" />
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                  {t("home.sections.trending.label")}
                </span>
              </div>
              <h2 className="font-heading mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
                {t("home.sections.trending.title")}
              </h2>
            </div>
            <Button
              onClick={handleViewAll}
              variant="ghost"
              className="hidden cursor-pointer items-center gap-3 text-[10px] font-black uppercase tracking-[0.2em] md:flex"
            >
              {t("home.sections.trending.shopAll")}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <CardSkeleton key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="flex justify-center">
            <ErrorState
              title={t("products.error.title")}
              message={getErrorMessage(error)}
              onRetry={() => refetch()}
              retryLabel={t("products.error.retry")}
            />
          </div>
        )}

        {!isLoading && !error && data?.data && (
          <>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {data.data.slice(0, 4).map((product, index) => (
                <ScrollReveal
                  key={product.id}
                  direction="up"
                  distance={40}
                  delay={index * 0.1}
                >
                  <div className="group relative">
                    <div className="absolute -inset-0.5 rounded-none bg-gradient-to-b from-foreground/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <ProductCard product={product} />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-12 flex justify-center">
                <Button
                  onClick={handleViewAll}
                  className="h-16 w-full cursor-pointer rounded-none bg-foreground px-12 text-xs font-black uppercase tracking-[0.4em] text-background transition-all duration-500 hover:bg-foreground/90 active:scale-[0.98] sm:w-auto"
                >
                  {t("home.sections.trending.viewAll")}
                  <ArrowRight className="ml-4 h-5 w-5" />
                </Button>
              </div>
            </ScrollReveal>
          </>
        )}

        {!isLoading && !error && (!data?.data || data.data.length === 0) && (
          <div className="flex justify-center">
            <ErrorState
              title={t("products.error.title")}
              message={t("home.sections.trending.noProducts")}
            />
          </div>
        )}
      </div>
    </section>
  );
});

export default TrendingProductsSection;
