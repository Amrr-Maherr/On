import { memo } from "react";
import type { Subcategory } from "@/features/products/types";

interface ProductSubcategoriesProps {
  subcategories: Subcategory[];
}

const ProductSubcategories = memo(function ProductSubcategories({ subcategories }: ProductSubcategoriesProps) {
  if (!subcategories || subcategories.length === 0) return null;

  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        Categories
      </h3>
      <div className="flex flex-wrap gap-2">
        {subcategories.map((sub) => (
          <span
            key={sub._id}
            className="inline-flex items-center rounded-full bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground"
          >
            {sub.name}
          </span>
        ))}
      </div>
    </div>
  );
});

export default ProductSubcategories;
