interface ProductPriceProps {
  price: number;
  priceAfterDiscount?: number;
}

export default function ProductPrice({ price, priceAfterDiscount }: ProductPriceProps) {
  return (
    <div className="flex items-baseline gap-3">
      <span className="text-3xl font-bold">
        ${priceAfterDiscount ?? price}
      </span>
      {priceAfterDiscount && (
        <span className="text-lg text-muted-foreground line-through">
          ${price}
        </span>
      )}
    </div>
  );
}
