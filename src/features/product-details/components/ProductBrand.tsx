import { memo } from "react";
import { Link } from "react-router-dom";
import type { Brand } from "@/features/products/types";

interface ProductBrandProps {
  brand: Brand;
}

const ProductBrand = memo(function ProductBrand({ brand }: ProductBrandProps) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        Brand
      </h3>
      <Link
        to={`/brands/${brand.slug}/${brand._id}`}
        className="group inline-flex items-center gap-3 rounded-xl border border-border/40 bg-card p-3 transition-colors hover:bg-muted/50"
      >
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
          <img
            src={brand.image}
            alt={brand.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground group-hover:text-foreground/70 transition-colors">
            {brand.name}
          </p>
          <p className="text-xs text-muted-foreground/60">View brand</p>
        </div>
      </Link>
    </div>
  );
});

export default ProductBrand;
