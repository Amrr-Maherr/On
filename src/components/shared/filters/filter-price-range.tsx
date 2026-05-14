interface FilterPriceRangeProps {
  min?: number;
  max?: number;
  minValue?: number;
  maxValue?: number;
  onChange?: (min: number, max: number) => void;
}

export default function FilterPriceRange({
  min = 0,
  max = 10000,
  minValue = min,
  maxValue = max,
  onChange,
}: FilterPriceRangeProps) {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-2">
        <input
          type="number"
          value={minValue}
          onChange={(e) => onChange?.(Number(e.target.value), maxValue)}
          placeholder="Min"
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2 text-center text-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          aria-label="Minimum price"
        />
        <span className="text-xs text-muted-foreground">—</span>
        <input
          type="number"
          value={maxValue}
          onChange={(e) => onChange?.(minValue, Number(e.target.value))}
          placeholder="Max"
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2 text-center text-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          aria-label="Maximum price"
        />
      </div>
    </div>
  );
}
