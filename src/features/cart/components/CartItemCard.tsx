import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import { Minus, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { CartItem } from "@/features/cart/types/cart";
import CardImage from "@/components/shared/CardImage";

type CartItemCardProps = {
  item: CartItem;
  onUpdate: (itemId: string, count: number) => void;
  onRemove: (itemId: string) => void;
  isUpdating?: boolean;
};

const CartItemCard = memo(({
  item,
  onUpdate,
  onRemove,
  isUpdating,
}: CartItemCardProps) => {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  const { product, count, price } = item;
  const itemTotal = price;

  return (
    <div
      className={cn(
        "group flex gap-6 border-b border-border/40 pb-8 transition-all duration-200",
        isUpdating && "pointer-events-none opacity-60",
      )}
    >
      <Link
        to={buildLocalizedPath(`/products/${product.title}/${product.id}`, lang)}
        className="shrink-0"
      >
        <div className="h-32 w-32 overflow-hidden bg-muted/30 md:h-40 md:w-40">
          <CardImage
            src={product.imageCover}
            alt={product.title}
            width={400}
            height={400}
            className="h-full w-full transition-all duration-700 group-hover:scale-110"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col justify-between py-1">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <Link to={buildLocalizedPath(`/products/${product.title}/${product.id}`, lang)} className="group/title">
              <h3 className="text-lg font-black uppercase tracking-tight text-foreground transition-colors group-hover/title:text-foreground/70">
                {product.title}
              </h3>
            </Link>
            <p className="mt-1 text-sm font-bold text-muted-foreground/60">
              {t("cart.item.unitPrice")}: {product.price?.toLocaleString()} EGP
            </p>
          </div>
          <button
            onClick={() => onRemove(product.id)}
            aria-label={t("cart.item.remove")}
            className="shrink-0 rounded-none border-2 border-border/40 p-2.5 text-muted-foreground transition-all duration-300 hover:border-destructive hover:bg-destructive hover:text-white"
          >
            <Trash2 className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 flex items-end justify-between">
          <div className="flex items-center rounded-none border-2 border-border/60 p-1">
            <button
              onClick={() => onUpdate(product.id, count - 1)}
              disabled={count <= 1}
              aria-label={t("cart.item.decrease")}
              className="flex h-10 w-10 items-center justify-center rounded-none text-foreground transition-all duration-200 hover:bg-muted active:scale-90 disabled:pointer-events-none disabled:opacity-20"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="flex h-10 w-12 items-center justify-center text-sm font-black tabular-nums text-foreground">
              {count}
            </span>
            <button
              onClick={() => onUpdate(product.id, count + 1)}
              aria-label={t("cart.item.increase")}
              className="flex h-10 w-10 items-center justify-center rounded-none text-foreground transition-all duration-200 hover:bg-muted active:scale-90"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">
              {t("cart.item.total")}
            </p>
            <p className="text-xl font-black tabular-nums text-foreground">
              {itemTotal.toLocaleString()} EGP
            </p>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartItemCard;