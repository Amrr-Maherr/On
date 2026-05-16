import { memo, useMemo } from "react";
import { useTranslation } from "react-i18next";

interface ProductStockStatusProps {
  quantity: number;
  sold: number;
}

const ProductStockStatus = memo(function ProductStockStatus({ quantity, sold }: ProductStockStatusProps) {
  const { t } = useTranslation();
  const total = useMemo(() => quantity + sold, [quantity, sold]);
  const soldPercent = useMemo(() => total > 0 ? (sold / total) * 100 : 0, [total, sold]);
  const inStock = useMemo(() => quantity > 0, [quantity]);
  const lowStock = useMemo(() => quantity > 0 && quantity <= 10, [quantity]);

  const stockLabel = inStock
    ? lowStock
      ? t("products.details.stock.lowStock")
      : t("products.details.stock.inStock")
    : t("products.details.stock.outOfStock");

  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
        {t("products.details.stock.label")}
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
              {stockLabel}
            </span>
          </div>
          <span className="font-bold text-muted-foreground/60">
            {t("products.details.stock.available", { count: quantity, total })}
          </span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-none bg-muted/30">
          <div
            className="h-full rounded-none bg-foreground transition-all duration-1000"
            style={{ width: `${Math.min(soldPercent, 100)}%` }}
          />
        </div>
        <div className="flex justify-between text-xs font-medium text-muted-foreground/60">
          <span>{sold} {t("products.details.stock.sold")}</span>
          <span>{quantity} {t("products.details.stock.remaining")}</span>
        </div>
      </div>
    </div>
  );
});

export default ProductStockStatus;
