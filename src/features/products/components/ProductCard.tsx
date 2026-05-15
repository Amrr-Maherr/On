import { memo } from "react";
import type { Product } from "@/features/products/types";
import AddToCart from "./actions/AddToCart";
import AddToFav from "./actions/AddToFav";
import { Link } from "react-router-dom";

function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to={`/products/${product.title}/${product.id}`}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden rounded-2xl bg-muted/30">
        <img
          src={product.imageCover}
          alt={product.title}
          loading="lazy"
          className="h-72 w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
        />
        <div className="absolute right-3 top-3 flex flex-col gap-2 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <AddToFav productId={product.id} />
          <AddToCart productId={product.id} />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1.5">
        <h3 className="text-sm font-medium text-foreground/90 line-clamp-1">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-lg font-medium tracking-tight text-foreground">
            ${product.priceAfterDiscount ?? product.price}
          </span>
          {product.priceAfterDiscount && (
            <span className="text-sm text-muted-foreground/60 line-through">
              ${product.price}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground/60">
          <span>{product.ratingsAverage || "—"} / 5</span>
          <span>{product.sold} sold</span>
        </div>
      </div>
    </Link>
  );
}

export default memo(ProductCard);
