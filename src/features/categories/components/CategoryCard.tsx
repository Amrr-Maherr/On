import { memo } from "react";
import { Link } from "react-router-dom";
import type { Category } from "@/features/categories/types";

const CategoryCard = memo(function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/categories/${category.slug}/${category._id}`}
      className="group relative block overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-0.5 hover:shadow-sm"
    >
      <div className="aspect-[3/4] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-medium text-white">{category.name}</h3>
      </div>
    </Link>
  );
});

export default CategoryCard;
