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
        "flex gap-5 rounded-2xl border border-border/30 bg-card p-5 transition-all duration-200",
        isUpdating && "pointer-events-none opacity-60",
      )}
    >
      <div className="h-28 w-28 shrink-0 overflow-hidden rounded-xl bg-muted/30 md:h-32 md:w-32">
        <img
          src={product.imageCover}
          alt={product.title}
          className="h-full w-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between gap-3 min-w-0">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate text-base font-semibold text-foreground">{product.title}</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              {product.price} EGP
            </p>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            aria-label="Remove item"
            className="shrink-0 rounded-lg p-1.5 text-muted-foreground/40 transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
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
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted/50 active:scale-90 disabled:pointer-events-none disabled:opacity-40"
            >
              <Minus className="h-3.5 w-3.5" />
            </button>
            <span className="flex h-9 w-12 items-center justify-center text-sm font-bold tabular-nums text-foreground">
              {count}
            </span>
            <button
              onClick={() => onUpdate(product.id, count + 1)}
              aria-label="Increase quantity"
              className="flex h-9 w-9 items-center justify-center rounded-xl border border-border/50 text-muted-foreground transition-all duration-200 hover:border-foreground/20 hover:bg-muted/50 active:scale-90"
            >
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <p className="text-base font-bold tabular-nums text-foreground">
            {itemTotal.toLocaleString()} EGP
          </p>
        </div>
      </div>
    </div>
  );
});

export default CartItemCard;
