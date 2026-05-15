import { memo } from "react";
import { Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CartItem } from "@/features/cart/types/cart";

interface CartItemCardProps {
  item: CartItem;
  onUpdate: (itemId: string, count: number) => void;
  onRemove: (itemId: string) => void;
  isUpdating?: boolean;
}

const CartItemCard = memo(({
  item,
  onUpdate,
  onRemove,
  isUpdating,
}: CartItemCardProps) => {
  const { product, count, price } = item;
  const itemTotal = price;

  return (
    <div
      className={cn(
        "flex-row gap-4 rounded-2xl border border-border/50 p-4",
        isUpdating && "pointer-events-none opacity-60",
      )}
    >
      <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-muted md:h-28 md:w-28">
        <img
          src={product.imageCover}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-2 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-sm font-medium">{product.title}</h3>
            <p className="mt-0.5 text-sm text-muted-foreground">
              {product.price} EGP
            </p>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            aria-label="Remove item"
            className="shrink-0 rounded-lg p-1.5 text-muted-foreground transition-colors hover:bg-destructive/10 hover:text-destructive"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <button
              onClick={() => onUpdate(product.id, count - 1)}
              disabled={count <= 1}
              aria-label="Decrease quantity"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-accent disabled:pointer-events-none disabled:opacity-40"
            >
              <Minus className="h-3 w-3" />
            </button>
            <span className="flex h-7 w-10 items-center justify-center text-sm font-medium tabular-nums">
              {count}
            </span>
            <button
              onClick={() => onUpdate(product.id, count + 1)}
              aria-label="Increase quantity"
              className="flex h-7 w-7 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:bg-accent"
            >
              <Plus className="h-3 w-3" />
            </button>
          </div>
          <p className="text-sm font-semibold tabular-nums">
            {itemTotal.toLocaleString()} EGP
          </p>
        </div>
      </div>
    </div>
  );
});

export default CartItemCard;
