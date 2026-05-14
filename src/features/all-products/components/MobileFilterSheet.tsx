import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FilterSection, FilterCheckboxGroup, FilterPriceRange, FilterSortDropdown } from "@/components/shared/filters";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface MobileFilterSheetProps {
  sort: string;
  onSortChange: (value: string) => void;
  categories: FilterOption[];
  categoryIn: string[];
  onCategoryChange: (values: string[]) => void;
  brands: FilterOption[];
  brandIn: string[];
  onBrandChange: (values: string[]) => void;
  priceGte: number;
  priceLte: number;
  onPriceChange: (min: number, max: number) => void;
  onReset: () => void;
}

export default function MobileFilterSheet({
  sort,
  onSortChange,
  categories,
  categoryIn,
  onCategoryChange,
  brands,
  brandIn,
  onBrandChange,
  priceGte,
  priceLte,
  onPriceChange,
  onReset,
}: MobileFilterSheetProps) {
  const hasActiveFilters =
    sort ||
    categoryIn.length > 0 ||
    brandIn.length > 0 ||
    priceGte > 0 ||
    priceLte < 10000;

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filter & Sort
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="overflow-y-auto px-0 pb-8">
        <SheetHeader className="px-6 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters & Sort</SheetTitle>
            {hasActiveFilters && (
              <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground" onClick={onReset}>
                <RotateCcw className="h-3.5 w-3.5" />
                Reset
              </Button>
            )}
          </div>
        </SheetHeader>

        <div className="space-y-6 px-6">
          <div>
            <p className="mb-2 text-sm font-medium">Sort By</p>
            <FilterSortDropdown value={sort} onChange={onSortChange} />
          </div>

          <FilterSection title="Category">
            <FilterCheckboxGroup
              options={categories}
              selectedValues={categoryIn}
              onChange={onCategoryChange}
            />
          </FilterSection>

          <FilterSection title="Brand">
            <FilterCheckboxGroup
              options={brands}
              selectedValues={brandIn}
              onChange={onBrandChange}
            />
          </FilterSection>

          <FilterSection title="Price Range">
            <FilterPriceRange
              min={0}
              max={10000}
              minValue={priceGte}
              maxValue={priceLte}
              onChange={onPriceChange}
            />
          </FilterSection>
        </div>
      </SheetContent>
    </Sheet>
  );
}
