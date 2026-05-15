import { memo, useMemo } from "react";

interface ProductStockStatusProps {
  quantity: number;
  sold: number;
}

const ProductStockStatus = memo(function ProductStockStatus({ quantity, sold }: ProductStockStatusProps) {
  const total = useMemo(() => quantity + sold, [quantity, sold]);
  const soldPercent = useMemo(() => total > 0 ? (sold / total) * 100 : 0, [total, sold]);
  const inStock = useMemo(() => quantity > 0, [quantity]);
  const lowStock = useMemo(() => quantity > 0 && quantity <= 10, [quantity]);

  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
        Stock Status
      </h3>
      <div className="space-y-3">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <span
              className={`inline-block h-3 w-3 rounded-none ${
                inStock ? (lowStock ? "bg-amber-500" : "bg-green-500") : "bg-red-500"
              }`}
            />
            <span className="font-black uppercase tracking-tight text-foreground">
              {inStock ? (lowStock ? "Low Stock" : "In Stock") : "Out of Stock"}
            </span>
          </div>
          <span className="font-bold text-muted-foreground/60">
            {quantity} / {total} available
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-none bg-muted/30">
          <div
            className="h-full rounded-none bg-foreground transition-all duration-1000"
            style={{ width: `${Math.min(soldPercent, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-muted-foreground/60">
          <span>{sold} sold</span>
          <span>{quantity} remaining</span>
        </div>
      </div>
    </div>
  );
});

export default ProductStockStatus;
