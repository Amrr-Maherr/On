import { LazyLoadImage } from "react-lazy-load-image-component";
import type { Category } from "@/features/categories/types";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Calendar, Tag } from "lucide-react";

interface CategoryDetailsCardProps {
  category: Category;
}

export default function CategoryDetailsCard({
  category,
}: CategoryDetailsCardProps) {
  const createdDate = new Date(category.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <LazyLoadImage
          src={category.image}
          alt={category.name}
          className="h-full w-full object-cover"
          effect="blur"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            {category.name}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>{category.slug}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Since {createdDate}</span>
        </div>

        {category._id && (
          <p className="text-xs text-muted-foreground/60">
            Reference ID: {category._id}
          </p>
        )}
      </div>
    </div>
  );
}
