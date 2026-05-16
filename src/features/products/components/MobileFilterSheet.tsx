import { memo } from "react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { FilterSection, FilterCheckboxGroup, FilterPriceRange, FilterSortDropdown } from "@/components/shared/filters";
import { SlidersHorizontal, RotateCcw } from "lucide-react";

interface FilterOption {
  label: string;
  value: string;
}

interface MobileFilterSheetProps {
  categories: FilterOption[];
  brands: FilterOption[];
}

function MobileFilterSheet({ categories, brands }: MobileFilterSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="sm" className="gap-2">
          <SlidersHorizontal className="h-4 w-4" />
          Filter & Sort
        </Button>
      </SheetTrigger>
      <SheetContent side="bottom" className="h-[90vh] overflow-y-auto px-0 pb-8">
        <SheetHeader className="px-6 pb-4">
          <div className="flex items-center justify-between">
            <SheetTitle>Filters & Sort</SheetTitle>
            <Button variant="ghost" size="sm" className="gap-1.5 text-muted-foreground">
              <RotateCcw className="h-3.5 w-3.5" />
              Reset
            </Button>
          </div>
        </SheetHeader>

        <div className="space-y-6 px-6">
          <div>
            <p className="mb-2 text-sm font-medium">Sort By</p>
            <FilterSortDropdown />
          </div>

          <FilterSection title="Category">
            <FilterCheckboxGroup options={categories} />
          </FilterSection>

          <FilterSection title="Brand">
            <FilterCheckboxGroup options={brands} />
          </FilterSection>

          <FilterSection title="Price Range">
            <FilterPriceRange />
          </FilterSection>
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default memo(MobileFilterSheet);
