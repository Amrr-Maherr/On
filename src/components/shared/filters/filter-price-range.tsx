interface FilterPriceRangeProps {
  min?: number;
  max?: number;
}

export default function FilterPriceRange({
  min = 0,
  max = 1000,
}: FilterPriceRangeProps) {
  return (
    <div className="space-y-3">
      <div className="relative h-2 rounded-full bg-muted">
        <div
          className="absolute h-full rounded-full bg-foreground/20"
          style={{ left: "0%", width: "100%" }}
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-foreground bg-background shadow-sm"
          style={{ left: "0%" }}
        />
        <div
          className="absolute top-1/2 h-4 w-4 -translate-y-1/2 rounded-full border-2 border-foreground bg-background shadow-sm"
          style={{ left: "100%", transform: "translate(-100%, -50%)" }}
        />
      </div>

      <div className="flex items-center justify-between gap-2">
        <span className="text-xs text-muted-foreground">${min}</span>
        <span className="text-xs text-muted-foreground">${max}</span>
      </div>

      <div className="flex items-center gap-2">
        <input
          type="text"
          readOnly
          value={`$${min}`}
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2 text-center text-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Minimum price"
        />
        <span className="text-xs text-muted-foreground">—</span>
        <input
          type="text"
          readOnly
          value={`$${max}`}
          className="h-8 w-full rounded-lg border border-input bg-transparent px-2 text-center text-xs outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
          aria-label="Maximum price"
        />
      </div>
    </div>
  );
}
