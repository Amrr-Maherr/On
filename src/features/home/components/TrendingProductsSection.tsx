import { memo } from "react";
import { ArrowRight, TrendingUp } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useAllProducts } from "@/features/products/hooks/useGetAllProducts";
import ProductCard from "@/features/products/components/ProductCard";
import ProductsLoader from "@/features/products/components/ProductsLoader";
import ProductsError from "@/features/products/components/ProductsError";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const TrendingProductsSection = memo(function TrendingProductsSection() {
  const navigate = useNavigate();
  const { data, isLoading, error, refetch } = useAllProducts(1);

  return (
    <section className="section-py bg-background">
      <div className="container-layout">
        <ScrollReveal>
          <div className="mb-12 flex items-end justify-between">
            <div>
              <div className="flex items-center gap-3">
                <TrendingUp className="h-5 w-5 text-primary" />
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                  Hot Right Now
                </span>
              </div>
              <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl">
                Trending Now.
              </h2>
            </div>
            <Button
              onClick={() => navigate("/products")}
              variant="ghost"
              className="hidden cursor-pointer items-center gap-2 text-sm font-semibold md:flex"
            >
              Shop All
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </ScrollReveal>

        {isLoading && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }, (_, i) => (
              <ProductsLoader key={i} />
            ))}
          </div>
        )}

        {error && (
          <div className="flex justify-center">
            <ProductsError
              message={getErrorMessage(error)}
              onRetry={() => refetch()}
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
                    <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-primary/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                    <div className="relative">
                      <ProductCard product={product} />
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal direction="up" delay={0.4}>
              <div className="mt-10 flex justify-center">
                <Button
                  onClick={() => navigate("/products")}
                  className="h-12 cursor-pointer rounded-full bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
                >
                  View All Products
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </ScrollReveal>
          </>
        )}

        {!isLoading && !error && (!data?.data || data.data.length === 0) && (
          <div className="flex justify-center">
            <ProductsError message="No trending products available at the moment." />
          </div>
        )}
      </div>
    </section>
  );
});

export default TrendingProductsSection;
