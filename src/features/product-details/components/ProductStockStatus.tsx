interface ProductStockStatusProps {
  quantity: number;
  sold: number;
}

export default function ProductStockStatus({ quantity, sold }: ProductStockStatusProps) {
  const total = quantity + sold;
  const soldPercent = total > 0 ? (sold / total) * 100 : 0;
  const inStock = quantity > 0;
  const lowStock = quantity > 0 && quantity <= 10;

  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Stock Status
      </h3>
      <div className="rounded-xl border border-border bg-card p-4">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block h-2.5 w-2.5 rounded-full ${
                inStock ? (lowStock ? "bg-amber-500" : "bg-green-500") : "bg-red-500"
              }`}
            />
            <span className="font-medium">
              {inStock ? (lowStock ? "Low Stock" : "In Stock") : "Out of Stock"}
            </span>
          </div>
          <span className="text-muted-foreground">
            {quantity} / {total} available
          </span>
        </div>
        <div className="mt-3 h-2 w-full overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-primary transition-all"
            style={{ width: `${Math.min(soldPercent, 100)}%` }}
          />
        </div>
        <div className="mt-1.5 flex justify-between text-xs text-muted-foreground">
          <span>{sold} sold</span>
          <span>{quantity} remaining</span>
        </div>
      </div>
    </div>
  );
}
