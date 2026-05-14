import { Link } from "react-router-dom";
import type { Category } from "@/features/products/types";

interface ProductCategoryProps {
  category: Category;
}

export default function ProductCategory({ category }: ProductCategoryProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Category
      </h3>
      <Link
        to={`/categories/${category.slug}/${category._id}`}
        className="group inline-flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition-colors hover:bg-muted"
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
          <p className="text-sm font-medium group-hover:text-primary transition-colors">
            {category.name}
          </p>
          <p className="text-xs text-muted-foreground">View category</p>
        </div>
      </Link>
    </div>
  );
}
