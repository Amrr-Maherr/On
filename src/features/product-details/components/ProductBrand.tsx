import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { Brand } from "@/features/products/types";

interface ProductBrandProps {
  brand: Brand;
}

const ProductBrand = memo(function ProductBrand({ brand }: ProductBrandProps) {
  const { t } = useTranslation();
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        {t("products.details.brand.label")}
      </h3>
      <Link
        to={`/brands/${brand.slug}/${brand._id}`}
        className="group inline-flex items-center gap-4 rounded-none border-2 border-border/40 bg-card p-4 transition-all duration-300 hover:border-foreground/20 hover:bg-muted/30"
      >
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-none bg-muted">
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
          <p className="text-xs text-muted-foreground/60">{t("products.details.brand.view")}</p>
        </div>
      </Link>
    </div>
  );
});

export default ProductBrand;
