import { memo } from "react";

interface ProductPriceProps {
  price: number;
  priceAfterDiscount?: number;
}

const ProductPrice = memo(function ProductPrice({ price, priceAfterDiscount }: ProductPriceProps) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-medium tracking-tight">
        ${priceAfterDiscount ?? price}
      </span>
      {priceAfterDiscount && (
        <span className="text-base text-muted-foreground/50 line-through">
          ${price}
        </span>
      )}
    </div>
  );
});

export default ProductPrice;
