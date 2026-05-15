import { memo } from "react";
import { Minus, Plus } from "lucide-react";

interface ProductQuantityProps {
  quantity: number;
  available: number;
  onDecrease: () => void;
  onIncrease: () => void;
}

const ProductQuantity = memo(function ProductQuantity({ quantity, available, onDecrease, onIncrease }: ProductQuantityProps) {
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">Qty</span>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted/50 active:scale-90"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="flex h-11 w-14 items-center justify-center rounded-xl border border-border/50 text-sm font-bold tabular-nums text-foreground">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted/50 active:scale-90"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <span className="text-xs font-medium text-muted-foreground/60">{available} available</span>
    </div>
  );
});

export default ProductQuantity;
