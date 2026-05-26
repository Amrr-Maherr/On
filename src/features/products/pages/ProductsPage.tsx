import { useTranslation } from "react-i18next";
import { useLocation, useSearchParams } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroVideo from "@/assets/adidas_-_you_got_this (1080p).mp4";
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
  const [searchParams, setSearchParams] = useSearchParams();
  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";
  const priceMin = Number(searchParams.get("priceMin")) || 0;
  const priceMax = Number(searchParams.get("priceMax")) || 10000;
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  const setParam = (key: string, value: string) =>
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set(key, value);
      else next.delete(key);
      return next;
    });

  const toggleParam = (key: string, value: string) =>
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      const vals = next.getAll(key);
      if (vals.includes(value)) {
        next.delete(key);
        vals.filter((v) => v !== value).forEach((v) => next.append(key, v));
      } else {
        next.append(key, value);
      }
      return next;
    });

  const clearAll = () => setSearchParams(new URLSearchParams());

  const filters = {
    page,
    ...(searchParams.has("category") && { categoryIn: searchParams.getAll("category") }),
    ...(searchParams.has("brand") && { brandIn: searchParams.getAll("brand") }),
    ...(sort && { sort }),
    ...(priceMin > 0 && { priceGte: priceMin }),
    ...(priceMax < 10000 && { priceLte: priceMax }),
  };

  const { data, isLoading, error, refetch } = useAllProducts(filters);

  const { data: categoriesData } = useAllCategories({ limit: 100, page: 1 });
  const { data: brandsData } = useAllBrands(1);

  const products = data?.data ?? [];
  const metadata = data?.metadata;

  const categories = (categoriesData?.data ?? []).map((cat) => ({
    label: cat.name,
    value: cat._id,
  }));

  const brands = (brandsData?.data ?? []).map((b) => ({
    label: b.name,
    value: b._id,
  }));

  return (
    <>
      <PageHelmet
        title={t("products.page.title")}
        description={t("products.page.description")}
      />

      <CampaignHeader
        subtitle={t("products.page.hero.subtitle")}
        title={t("products.page.hero.title")}
        description={t("products.page.hero.description")}
        videoUrl={heroVideo}
      />

      <div className="container-layout section-py pt-8">
        <Breadcrumb
          items={[
            { label: t("products.page.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
            { label: t("products.page.breadcrumb.products") },
          ]}
          className="mb-6"
        />

        <ScrollReveal>
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
        </ScrollReveal>

        <div className="flex gap-16">
          <div
            className="hidden w-64 shrink-0 lg:block"
            data-tour="filters-panel"
          >
            <FiltersPanel className="sticky top-24 border-0 bg-transparent p-0">
              <FilterSection title={t("products.filters.sortBy")} data-tour="sort-dropdown">
                <FilterSortDropdown value={sort} onChange={(v) => setParam("sort", v)} />
              </FilterSection>

              <FilterSection title={t("products.filters.categories")}>
                <FilterCheckboxGroup
                  options={categories}
                  selected={searchParams.getAll("category")}
                  onToggle={(v) => toggleParam("category", v)}
                />
              </FilterSection>

              <FilterSection title={t("products.filters.brands")}>
                <FilterCheckboxGroup
                  options={brands}
                  selected={searchParams.getAll("brand")}
                  onToggle={(v) => toggleParam("brand", v)}
                />
              </FilterSection>

              <FilterSection title={t("products.filters.price")}>
                <FilterPriceRange value={{ min: priceMin, max: priceMax }} onChange={(v) => {
                  if (v.min > 0) setParam("priceMin", String(v.min));
                  else setParam("priceMin", "");
                  if (v.max < 10000) setParam("priceMax", String(v.max));
                  else setParam("priceMax", "");
                }} />
              </FilterSection>

              <button onClick={clearAll} className="mt-8 w-full border-2 border-foreground bg-transparent py-4 text-[10px] font-black uppercase tracking-widest text-foreground transition-all hover:bg-foreground hover:text-background">
                {t("products.filters.reset")}
              </button>
            </FiltersPanel>
          </div>

          <div className="min-w-0 flex-1">
            <div className="mb-8 lg:hidden">
              <MobileFilterSheet
                categories={categories}
                brands={brands}
                setParam={setParam}
                clearAll={clearAll}
              />
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
                  {products.map((product, index) => (
                    <ScrollReveal key={product.id || product._id} delay={index * 0.03} direction="up" distance={20}>
                      <ProductCard product={product} />
                    </ScrollReveal>
                  ))}
                </div>

                {metadata && (
                  <div className="mt-16 border-t border-border/40 pt-12">
                    <ProductsPagination
                      currentPage={metadata.currentPage}
                      totalPages={metadata.numberOfPages}
                      onPageChange={() => {
                        const next = new URLSearchParams(searchParams);
                        next.set("page", String(page + 1));
                        setSearchParams(next);
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
