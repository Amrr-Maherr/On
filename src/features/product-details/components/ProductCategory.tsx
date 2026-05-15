import { memo } from "react";
import { Link } from "react-router-dom";
import type { Category } from "@/features/products/types";

interface ProductCategoryProps {
  category: Category;
}

const ProductCategory = memo(function ProductCategory({ category }: ProductCategoryProps) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        Category
      </h3>
      <Link
        to={`/categories/${category.slug}/${category._id}`}
        className="group inline-flex items-center gap-3 rounded-xl border border-border/40 bg-card p-3 transition-colors hover:bg-muted/50"
      >
        <div className="h-12 w-12 shrink-0 overflow-hidden rounded-lg bg-muted">
          <img
            src={category.image}
            alt={category.name}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <p className="text-sm font-medium text-foreground group-hover:text-foreground/70 transition-colors">
            {category.name}
          </p>
          <p className="text-xs text-muted-foreground/60">View category</p>
        </div>
      </Link>
    </div>
  );
});

export default ProductCategory;
