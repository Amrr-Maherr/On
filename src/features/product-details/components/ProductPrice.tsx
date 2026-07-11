import { memo } from "react";
import { useTranslation } from "react-i18next";

type ProductPriceProps = {
  price: number;
  priceAfterDiscount?: number;
};

const ProductPrice = memo(function ProductPrice({ price, priceAfterDiscount }: ProductPriceProps) {
  const { t } = useTranslation();
  return (
    <div className="flex items-end gap-4">
      <div className="flex flex-col">
        <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">{t("products.details.price.label")}</span>
        <span className="text-5xl font-black tracking-tighter text-foreground">
          ${priceAfterDiscount ?? price}
        </span>
      </div>
      {priceAfterDiscount && (
        <span className="mb-1 text-xl font-bold text-muted-foreground/30 line-through decoration-destructive decoration-2">
          ${price}
        </span>
      )}
    </div>
  );
});

export default ProductPrice;
