import {
  FiltersPanel,
  FilterSection,
  FilterCheckboxGroup,
  FilterPriceRange,
  FilterSortDropdown,
  FilterSearchInput,
} from "@/components/shared/filters";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const categories = [
  { label: "Electronics", count: 42 },
  { label: "Clothing", count: 28 },
  { label: "Home & Garden", count: 15 },
  { label: "Sports", count: 22 },
  { label: "Books", count: 34 },
];

const brands = [
  { label: "Nike", count: 18 },
  { label: "Apple", count: 12 },
  { label: "Samsung", count: 9 },
  { label: "Sony", count: 7 },
  { label: "Adidas", count: 14 },
];

const placeholderProducts = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  title: `Product ${i + 1}`,
  price: (Math.random() * 200 + 10).toFixed(2),
}));

export default function ProductsPage() {
  return (
    <div className="container-layout py-8">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold md:text-3xl">Products</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            142 products found
          </p>
        </div>
        <div className="w-full sm:w-56">
          <FilterSortDropdown />
        </div>
      </div>

      <div className="flex gap-8">
        <FiltersPanel>
          <FilterSearchInput placeholder="Search products..." />

          <FilterSection title="Category">
            <FilterCheckboxGroup options={categories} />
          </FilterSection>

          <FilterSection title="Brand">
            <FilterCheckboxGroup options={brands} />
          </FilterSection>

          <FilterSection title="Price Range">
            <FilterPriceRange min={0} max={1000} />
          </FilterSection>
        </FiltersPanel>

        <div className="flex-1">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {placeholderProducts.map((product) => (
              <Card
                key={product.id}
                className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="aspect-square bg-muted" />
                <CardHeader>
                  <div className="h-4 w-3/4 rounded bg-muted" />
                  <div className="mt-2 h-5 w-1/3 rounded bg-muted" />
                </CardHeader>
                <CardContent>
                  <div className="h-3 w-1/2 rounded bg-muted" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
