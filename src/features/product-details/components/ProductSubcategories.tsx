import { memo } from "react";
import { useTranslation } from "react-i18next";
import type { Subcategory } from "@/features/products/types";

interface ProductSubcategoriesProps {
  subcategories: Subcategory[];
}

const ProductSubcategories = memo(function ProductSubcategories({ subcategories }: ProductSubcategoriesProps) {
  const { t } = useTranslation();
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        {t("products.details.subcategories.label")}
      </h3>
      <div className="flex flex-wrap gap-3">
        {subcategories.map((sub) => (
          <span
            key={sub._id}
            className="inline-flex items-center rounded-none border-2 border-border/40 bg-muted/20 px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80"
          >
            {sub.name}
          </span>
        ))}
      </div>
    </div>
  );
});

export default ProductSubcategories;
