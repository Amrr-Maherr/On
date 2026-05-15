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
    <div className="flex items-center gap-3">
      <span className="text-sm text-muted-foreground">Quantity:</span>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="flex h-9 w-12 items-center justify-center rounded-lg border border-border text-sm font-medium">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-border transition-colors hover:bg-muted"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <span className="text-xs text-muted-foreground">{available} available</span>
    </div>
  );
});

export default ProductQuantity;
