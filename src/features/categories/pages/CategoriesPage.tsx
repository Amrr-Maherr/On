import { Breadcrumb } from "@/components/ui/breadcrumb";
import {
  FiltersPanel,
  FilterSection,
  FilterSearchInput,
} from "@/components/shared/filters";
import { Card } from "@/components/ui/card";

const placeholderCategories = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: `Category ${i + 1}`,
}));

export default function CategoriesPage() {
  return (
    <div className="container-layout py-8">
      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Categories" }]} className="mb-6" />
      <div className="mb-6">
        <h1 className="text-2xl font-bold md:text-3xl">Categories</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          8 categories found
        </p>
      </div>

      <div className="flex gap-8">
        <FiltersPanel>
          <FilterSearchInput placeholder="Search categories..." />

          <FilterSection title="Sort By">
            <div className="space-y-2">
              {["Name A-Z", "Name Z-A", "Most Products"].map((option) => (
                <label
                  key={option}
                  className="flex cursor-pointer items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  <input
                    type="radio"
                    name="category-sort"
                    className="h-4 w-4 border-border text-foreground accent-foreground"
                  />
                  <span>{option}</span>
                </label>
              ))}
            </div>
          </FilterSection>
        </FiltersPanel>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {placeholderCategories.map((category) => (
              <Card
                key={category.id}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square bg-muted" />
                <div className="p-4 text-center">
                  <div className="mx-auto h-4 w-2/3 rounded bg-muted" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
