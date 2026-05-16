import { memo, useState } from "react";
import { useTranslation } from "react-i18next";

interface FilterPriceRangeProps {
  min?: number;
  max?: number;
}

function FilterPriceRange({ min = 0, max = 10000 }: FilterPriceRangeProps) {
  const { t } = useTranslation();
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);

  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={minValue}
          onChange={(e) => setMinValue(Number(e.target.value))}
          placeholder={t("products.filters.priceRange.min")}
          className="h-10 w-full rounded-none border-2 border-border/40 bg-transparent px-3 text-center text-xs font-bold outline-none transition-all duration-300 placeholder:text-muted-foreground/30 focus-visible:border-foreground [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          aria-label={t("products.filters.priceRange.minAria")}
        />
        <span className="text-xs font-bold text-muted-foreground/50">{t("products.filters.priceRange.separator")}</span>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => setMaxValue(Number(e.target.value))}
          placeholder={t("products.filters.priceRange.max")}
          className="h-10 w-full rounded-none border-2 border-border/40 bg-transparent px-3 text-center text-xs font-bold outline-none transition-all duration-300 placeholder:text-muted-foreground/30 focus-visible:border-foreground [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          aria-label={t("products.filters.priceRange.maxAria")}
        />
      </div>
    </div>
  );
}

export default memo(FilterPriceRange);
