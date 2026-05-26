import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Product } from "@/features/products/types";
import AddToCart from "./actions/AddToCart";
import AddToFav from "./actions/AddToFav";
import { Link } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";

function ProductCard({ product }: { product: Product }) {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  return (
    <Link
      to={buildLocalizedPath(`/products/${product.slug}/${product.id}`, lang)}
      className="group flex flex-col"
    >
      <div className="relative overflow-hidden bg-muted/30">
        <img
          src={product.imageCover}
          alt={product.title}
          loading="lazy"
          className="aspect-[3/4] w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-foreground/90 p-4 transition-all duration-300 group-hover:translate-y-0">
          <AddToCart productId={product.id} variant="overlay" />
        </div>
        <div className="absolute right-4 top-4 z-10 scale-90 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100">
          <AddToFav productId={product.id} />
        </div>
      </div>
      <div className="mt-5 flex flex-col gap-1.5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-sm font-bold uppercase tracking-tight text-foreground line-clamp-1">
            {product.title}
          </h3>
          <div className="flex flex-col items-end">
            <span className="text-base font-black tracking-tight text-foreground">
              ${product.priceAfterDiscount ?? product.price}
            </span>
            {product.priceAfterDiscount && (
              <span className="text-xs text-muted-foreground/40 line-through">
                ${product.price}
              </span>
            )}
          </div>
        </div>
        <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/60">
          <span className="inline-flex items-center gap-1">
            &#9733; {product.ratingsAverage || "—"}
          </span>
          <span>&middot;</span>
          <span>{product.sold} {t("products.card.sold")}</span>
        </div>
      </div>
    </Link>
  );
}

export default memo(ProductCard);
