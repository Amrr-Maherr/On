import { cn } from "@/lib/utils";

interface FilterSortDropdownProps {
  options?: { label: string; value: string }[];
}

const defaultOptions = [
  { label: "Latest", value: "latest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A-Z", value: "name-asc" },
  { label: "Name: Z-A", value: "name-desc" },
];

export default function FilterSortDropdown({
  options = defaultOptions,
}: FilterSortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="whitespace-nowrap text-sm text-muted-foreground">
        Sort by:
      </label>
      <select
        id="sort-select"
        className={cn(
          "h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "transition-colors",
        )}
        defaultValue="latest"
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
