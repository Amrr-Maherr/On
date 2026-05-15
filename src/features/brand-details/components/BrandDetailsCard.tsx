import { memo, useMemo } from "react";
import type { Brand } from "@/features/brands/types";
import { Calendar, Tag } from "lucide-react";

interface BrandDetailsCardProps {
  brand: Brand;
}

const BrandDetailsCard = memo(function BrandDetailsCard({ brand }: BrandDetailsCardProps) {
  const createdDate = useMemo(() => new Date(brand.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }), [brand.createdAt]);

  return (
    <div className="grid gap-10 md:grid-cols-2">
      <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          className="h-full w-full object-contain p-8"
        />
      </div>

      <div className="flex flex-col justify-center gap-6">
        <div>
          <h1 className="text-3xl font-bold leading-tight md:text-4xl">
            {brand.name}
          </h1>
          <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
            <Tag className="h-4 w-4" />
            <span>{brand.slug}</span>
          </div>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Calendar className="h-4 w-4" />
          <span>Since {createdDate}</span>
        </div>

        {brand._id && (
          <p className="text-xs text-muted-foreground/60">
            Reference ID: {brand._id}
          </p>
        )}
      </div>
    </div>
  );
});

export default BrandDetailsCard;
