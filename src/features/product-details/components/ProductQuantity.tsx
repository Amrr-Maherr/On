import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Minus, Plus } from "lucide-react";

type ProductQuantityProps = {
  quantity: number;
  available: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

const ProductQuantity = memo(function ProductQuantity({ quantity, available, onDecrease, onIncrease }: ProductQuantityProps) {
  const { t } = useTranslation();
  return (
    <div className="flex items-center gap-4">
      <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground">{t("products.details.quantity.label")}</span>
      <div className="flex items-center gap-2">
        <button
          onClick={onDecrease}
          className="flex h-11 w-11 items-center justify-center rounded-none border-2 border-border/40 text-muted-foreground transition-all duration-300 hover:border-foreground hover:bg-muted/30 active:scale-95"
        >
          <Minus className="h-4 w-4" />
        </button>
        <span className="flex h-11 w-14 items-center justify-center rounded-none border-2 border-border/40 text-sm font-black tabular-nums text-foreground">
          {quantity}
        </span>
        <button
          onClick={onIncrease}
          className="flex h-11 w-11 items-center justify-center rounded-none border-2 border-border/40 text-muted-foreground transition-all duration-300 hover:border-foreground hover:bg-muted/30 active:scale-95"
        >
          <Plus className="h-4 w-4" />
        </button>
      </div>
      <span className="text-xs font-medium text-muted-foreground/60">{t("products.details.quantity.available", { count: available })}</span>
    </div>
  );
});

export default ProductQuantity;
