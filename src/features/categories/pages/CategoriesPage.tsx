import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import { useQuery } from "@tanstack/react-query";
import { api } from "@/lib";
import type { ApiResponse } from "@/shared/types/api";
import type { Category } from "@/features/categories/types";
import CategoriesView from "@/features/categories/components/CategoriesView";

export default function CategoriesPage() {
  const { t } = useTranslation();
  const { data, isLoading, error, refetch } = useQuery<ApiResponse<Category>>({
    queryKey: ["categories", "all"],
    queryFn: () =>
      api.get<ApiResponse<Category>>("/api/v1/categories").then((r) => r.data),
    staleTime: 1_000 * 60 * 2,
  });

  const categories = useMemo(() => data?.data ?? [], [data?.data]);

  const sortOptions = useMemo(
    () => [
      { label: t("categories.filters.sort.nameAZ"), value: "name-asc" },
      { label: t("categories.filters.sort.nameZA"), value: "name-desc" },
      { label: t("categories.filters.sort.mostProducts"), value: "most-products" },
    ],
    [t],
  );

  return (
    <CategoriesView
      categories={categories}
      metadata={data?.metadata}
      sortOptions={sortOptions}
      isLoading={isLoading}
      error={error}
      onRetry={() => refetch()}
    />
  );
}
