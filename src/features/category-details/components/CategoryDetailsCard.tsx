import { memo, useMemo } from "react";
import type { Category } from "@/features/categories/types";
import { Calendar, Tag } from "lucide-react";

interface CategoryDetailsCardProps {
  category: Category;
}

const CategoryDetailsCard = memo(function CategoryDetailsCard({
  category,
}: CategoryDetailsCardProps) {
  const createdDate = useMemo(() => new Date(category.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }), [category.createdAt]);

  return (
    <div className="grid gap-16 md:grid-cols-2">
      <div className="overflow-hidden bg-muted/10">
        <img
          src={category.image}
          alt={category.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-cover"
        />
      </div>

      <div className="flex flex-col justify-center gap-10">
        <div className="border-l-4 border-foreground pl-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Details</span>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tighter md:text-7xl">
            {category.name}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-foreground">
            <Tag className="h-4 w-4 text-muted-foreground/40" strokeWidth={3} />
            <span>{category.slug}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-border/40 pt-8">
          <div className="flex h-12 w-12 items-center justify-center bg-muted/50 text-foreground">
            <Calendar className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">Active Since</p>
            <p className="text-sm font-black uppercase tracking-tight text-foreground">{createdDate}</p>
          </div>
        </div>

        {category._id && (
          <div className="mt-auto">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/20">
              Reference ID: {category._id}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export default CategoryDetailsCard;
