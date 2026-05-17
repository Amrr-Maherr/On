import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import type { Category } from "@/features/categories/types";

const CategoryCard = memo(function CategoryCard({
  category,
}: {
  category: Category;
}) {
  const { t } = useTranslation();
  return (
    <Link
      to={`/categories/${category.slug}/${category._id}`}
      className="group relative block overflow-hidden bg-muted/10 transition-all duration-500"
    >
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-110"
        />
      </div>
      <div className="absolute inset-0 bg-neutral-950/10 transition-colors duration-500 group-hover:bg-neutral-950/30" />
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-neutral-950/20 to-transparent" />

      <div className="absolute bottom-0 left-0 right-0 p-8 transition-transform duration-500 group-hover:-translate-y-2">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-white/60">
          {t("categories.card.explore")}
        </span>
        <h3 className="mt-3 text-2xl font-black uppercase tracking-tighter text-white">
          {category.name}
        </h3>
        <div className="mt-6 inline-flex h-10 w-10 items-center justify-center bg-white text-neutral-950 transition-transform duration-300 group-hover:translate-x-1">
          <svg
            viewBox="0 0 24 24"
            className="h-5 w-5"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
          >
            <path d="M5 12h14m-7-7l7 7-7 7" />
          </svg>
        </div>
      </div>
    </Link>
  );
});

export default CategoryCard;
