import { memo } from "react";
import { cn } from "@/lib/utils";

interface FilterSortDropdownProps {
  options?: { label: string; value: string }[];
  value?: string;
  onChange?: (value: string) => void;
}

const defaultOptions = [
  { label: "Latest", value: "" },
  { label: "Price: Low to High", value: "price" },
  { label: "Price: High to Low", value: "-price" },
  { label: "Name: A-Z", value: "title" },
  { label: "Name: Z-A", value: "-title" },
];

function FilterSortDropdown({
  options = defaultOptions,
  value = "",
  onChange,
}: FilterSortDropdownProps) {
  return (
    <div className="flex items-center gap-2">
      <label htmlFor="sort-select" className="whitespace-nowrap text-sm text-muted-foreground">
        Sort by:
      </label>
      <select
        id="sort-select"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        className={cn(
          "h-9 w-full rounded-lg border border-input bg-transparent px-3 text-sm outline-none",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "transition-colors",
        )}
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

export default memo(FilterSortDropdown);
