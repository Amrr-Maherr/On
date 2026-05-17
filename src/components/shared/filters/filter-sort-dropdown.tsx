import { memo, useState } from "react";
import { useTranslation } from "react-i18next";
import { cn } from "@/lib/utils";

interface FilterSortDropdownProps {
  options?: { label: string; value: string }[];
}

function FilterSortDropdown({
  options,
}: FilterSortDropdownProps) {
  const { t } = useTranslation();
  const [value, setValue] = useState("");

  const defaultOptions = [
    { label: t("products.filters.sort.latest"), value: "" },
    { label: t("products.filters.sort.priceLowToHigh"), value: "price" },
    { label: t("products.filters.sort.priceHighToLow"), value: "-price" },
    { label: t("products.filters.sort.nameAZ"), value: "title" },
    { label: t("products.filters.sort.nameZA"), value: "-title" },
  ];

  const resolvedOptions = options ?? defaultOptions;

  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="whitespace-nowrap text-sm font-semibold text-muted-foreground">
        {t("products.filters.sort.label")}
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className={cn(
          "h-9 w-full rounded-none border border-border/50 bg-transparent px-3 text-sm font-medium outline-none",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "transition-colors cursor-pointer",
        )}
      >
        {resolvedOptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default memo(FilterSortDropdown);
