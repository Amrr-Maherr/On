import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import ProductCard from "../components/ProductCard";
import ProductsLoader from "../components/ProductsLoader";
import ProductsError from "../components/ProductsError";
import ProductsEmpty from "../components/ProductsEmpty";
import ProductsPagination from "../components/ProductsPagination";
import MobileFilterSheet from "../components/MobileFilterSheet";
import {
  FiltersPanel,
  FilterSection,
  FilterCheckboxGroup,
  FilterPriceRange,
  FilterSortDropdown,
} from "@/components/shared/filters";
import { useAllProducts } from "../hooks/useGetAllProducts";
import { useAllCategories } from "@/features/categories/hooks/useGetAllCategories";
import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";

export default function ProductsPage() {
  const [page, setPage] = useState(1);
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const { data, isLoading, error, refetch } = useAllProducts(page);

  const { data: categoriesData } = useAllCategories({ limit: 100, page: 1 });
  const { data: brandsData } = useAllBrands(1);

  const products = useMemo(() => data?.data ?? [], [data?.data]);
  const metadata = data?.metadata;

  const categories = useMemo(
    () =>
      categoriesData?.data.map((cat) => ({
        label: cat.name,
        value: cat._id,
      })) ?? [],
    [categoriesData?.data],
  );

  const brands = useMemo(
    () =>
      brandsData?.data.map((b) => ({
        label: b.name,
        value: b._id,
      })) ?? [],
    [brandsData?.data],
  );

  return (
    <>
      <PageHelmet
        title={t("products.page.title")}
        description={t("products.page.description")}
      />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1483721310020-03333e577078?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            {t("products.page.hero.subtitle")}
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            {t("products.page.hero.title")}
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            {t("products.page.hero.description")}
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb
          items={[
            { label: t("products.page.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
            { label: t("products.page.breadcrumb.products") },
          ]}
          className="mb-6"
        />

        <div className="mb-12 border-l-4 border-foreground pl-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
            {t("products.page.catalog.label")}
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
            {t("products.page.catalog.title")}
          </h1>
          <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
            {t("products.page.catalog.count", { count: products.length })}
          </p>
        </div>

        <div className="flex gap-16">
          <div
            className="hidden w-64 shrink-0 lg:block"
            data-tour="filters-panel"
          >
            <FiltersPanel className="sticky top-24 border-0 bg-transparent p-0">
              <FilterSection
                title={t("products.filters.sortBy")}
                data-tour="sort-dropdown"
              >
                <FilterSortDropdown />
              </FilterSection>

              <FilterSection title={t("products.filters.categories")}>
                <FilterCheckboxGroup options={categories} />
              </FilterSection>

              <FilterSection title={t("products.filters.brands")}>
                <FilterCheckboxGroup options={brands} />
              </FilterSection>

              <FilterSection title={t("products.filters.price")}>
                <FilterPriceRange />
              </FilterSection>

              <button className="mt-8 w-full border-2 border-foreground bg-transparent py-4 text-[10px] font-black uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">
                {t("products.filters.reset")}
              </button>
            </FiltersPanel>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-8 lg:hidden">
              <MobileFilterSheet categories={categories} brands={brands} />
            </div>

            {error ? (
              <ProductsError
                message={
                  error instanceof Error
                    ? error.message
                    : t("products.error.defaultMessage")
                }
                onRetry={() => refetch()}
              />
            ) : isLoading ? (
              <ProductsLoader />
            ) : products.length === 0 ? (
              <ProductsEmpty />
            ) : (
              <>
                <div
                  className="grid grid-cols-1 gap-x-4 gap-y-12 sm:grid-cols-2 lg:grid-cols-3"
                  data-tour="product-grid"
                >
                  {products.map((product) => (
                    <ProductCard
                      key={product.id || product._id}
                      product={product}
                    />
                  ))}
                </div>

                {metadata && (
                  <div className="mt-16 border-t border-border/40 pt-12">
                    <ProductsPagination
                      currentPage={metadata.currentPage}
                      totalPages={metadata.numberOfPages}
                      onPageChange={() => {
                        setPage(page + 1);
                      }}
                    />
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
