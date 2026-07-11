import { useLocation, useSearchParams } from "react-router-dom";
import { getLangFromPath } from "@/lib/localized-path";
import ProductsView from "../components/ProductsView";
import { useAllProducts } from "../hooks/useGetAllProducts";
import { useAllCategories } from "@/features/categories/hooks/useGetAllCategories";
import { useAllBrands } from "@/features/brands/hooks/useGetAllBrands";

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  const page = Number(searchParams.get("page")) || 1;
  const sort = searchParams.get("sort") || "";
  const priceMin = Number(searchParams.get("priceMin")) || 0;
  const priceMax = Number(searchParams.get("priceMax")) || 10000;

  const setParam = (key: string, value: string) =>
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      if (value) next.set(key, value);
      else next.delete(key);
      return next;
    });

  const clearAll = () => setSearchParams(new URLSearchParams());

  const filters = {
    page,
    ...(searchParams.has("category") && { categoryIn: [searchParams.get("category")!] }),
    ...(searchParams.has("brand") && { brandIn: [searchParams.get("brand")!] }),
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

  const handlePageChange = () => {
    const next = new URLSearchParams(searchParams);
    next.set("page", String(page + 1));
    setSearchParams(next);
  };

  return (
    <ProductsView
      products={products}
      metadata={metadata}
      categories={categories}
      brands={brands}
      isLoading={isLoading}
      error={error}
      sort={sort}
      searchParams={searchParams}
      lang={lang}
      priceMin={priceMin}
      priceMax={priceMax}
      onFilterChange={setParam}
      onClearFilters={clearAll}
      onPageChange={handlePageChange}
      onRetry={() => refetch()}
    />
  );
}
