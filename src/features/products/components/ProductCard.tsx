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
      <div className="relative overflow-hidden rounded-2xl bg-muted/20">
        <img
          src={product.imageCover}
          alt={product.title}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover transition-all duration-700 group-hover:scale-[1.05]"
        />
        <div className="absolute inset-x-0 bottom-0 flex items-center justify-center p-4 opacity-0 transition-all duration-300 group-hover:opacity-100">
          <AddToCart productId={product.id} variant="overlay" />
        </div>
        <div className="absolute right-3 top-3 z-10">
          <AddToFav productId={product.id} />
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-1">
        <h3 className="text-base font-semibold leading-tight text-foreground line-clamp-1">
          {product.title}
        </h3>
        <div className="flex items-baseline gap-2">
          <span className="text-xl font-bold tracking-tight text-foreground">
            ${product.priceAfterDiscount ?? product.price}
          </span>
          {product.priceAfterDiscount && (
            <span className="text-sm text-muted-foreground/40 line-through">
              ${product.price}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3 text-xs text-muted-foreground">
          <span className="inline-flex items-center gap-1 font-medium">
            &#9733; {product.ratingsAverage || "—"}
          </span>
          <span className="text-muted-foreground/50">{product.sold} sold</span>
        </div>
      </div>
    </Link>
  );
}

export default memo(ProductCard);
