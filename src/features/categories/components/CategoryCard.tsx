import { Link } from "react-router-dom";
import type { Category } from "@/features/categories/types";
import { ArrowRight } from "lucide-react";

export default function CategoryCard({ category }: { category: Category }) {
  return (
    <Link
      to={`/categories/${category.slug}/${category._id}`}
      className="group relative block w-full overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
    >
      <img
        src={category.image}
        alt={category.name}
        loading="lazy"
        className="h-100 w-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-5">
        <h3 className="text-lg font-semibold text-white">{category.name}</h3>
        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/20 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
          <ArrowRight className="h-4 w-4 text-white" />
        </div>
      </div>
    </Link>
  );
}
