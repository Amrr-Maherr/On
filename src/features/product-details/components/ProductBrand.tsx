import { memo } from "react";
import { Link } from "react-router-dom";
import type { Brand } from "@/features/products/types";

interface ProductBrandProps {
  brand: Brand;
}

const ProductBrand = memo(function ProductBrand({ brand }: ProductBrandProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Brand
      </h3>
      <Link
        to={`/brands/${brand.slug}/${brand._id}`}
        className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:bg-muted"
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
          <p className="text-sm font-medium group-hover:text-primary transition-colors">
            {brand.name}
          </p>
          <p className="text-xs text-muted-foreground">View brand</p>
        </div>
      </Link>
    </div>
  );
});

export default ProductBrand;
