import { memo } from "react";
import { useTranslation } from "react-i18next";
import { useSearchParams } from "react-router-dom";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { FilterSection, FilterPriceRange, FilterSortDropdown } from "@/components/shared/filters";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface MobileFilterSheetProps {
  categories: FilterOption[];
  brands: FilterOption[];
  setParam: (key: string, value: string) => void;
  clearAll: () => void;
}

function MobileFilterSheet({ categories, brands, setParam, clearAll }: MobileFilterSheetProps) {
  const { t } = useTranslation();
  const [searchParams] = useSearchParams();
  const sort = searchParams.get("sort") || "";

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          {t("products.filters.filterSort")}
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto px-0 pb-8">
        <SheetHeader className="px-6 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle>{t("products.filters.filtersSort")}</SheetTitle>
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground" onClick={clearAll}>
              <RotateCcw className="h-3.5 w-3.5" />
              {t("products.filters.resetShort")}
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6 px-6">
          <div>
            <p className="mb-2 text-sm font-medium">{t("products.filters.sortBy")}</p>
            <FilterSortDropdown value={sort} onChange={(v) => setParam("sort", v)} />
          </div>

          <FilterSection title={t("products.filters.category")}>
            <RadioGroup value={searchParams.get("category") ?? ""} onValueChange={(v) => setParam("category", v)}>
              {categories.map((cat) => (
                <RadioGroupItem key={cat.value} value={cat.value}>
                  <span>{cat.label}</span>
                </RadioGroupItem>
              ))}
            </RadioGroup>
          </FilterSection>

          <FilterSection title={t("products.filters.brand")}>
            <RadioGroup value={searchParams.get("brand") ?? ""} onValueChange={(v) => setParam("brand", v)}>
              {brands.map((b) => (
                <RadioGroupItem key={b.value} value={b.value}>
                  <span>{b.label}</span>
                </RadioGroupItem>
              ))}
            </RadioGroup>
          </FilterSection>

          <FilterSection title={t("products.filters.priceRange")}>
            <FilterPriceRange
              value={{ min: Number(searchParams.get("priceMin")) || 0, max: Number(searchParams.get("priceMax")) || 10000 }}
              onChange={(v) => {
                if (v.min > 0) setParam("priceMin", String(v.min));
                else setParam("priceMin", "");
                if (v.max < 10000) setParam("priceMax", String(v.max));
                else setParam("priceMax", "");
              }}
            />
          </FilterSection>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default memo(MobileFilterSheet);
