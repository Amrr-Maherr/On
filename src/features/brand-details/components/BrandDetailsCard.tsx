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
    <div className="grid gap-16 md:grid-cols-2">
      <div className="overflow-hidden bg-white ring-1 ring-border/40">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          className="aspect-[4/5] w-full object-contain p-16"
        />
      </div>

      <div className="flex flex-col justify-center gap-10">
        <div className="border-l-4 border-foreground pl-8">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">Partner</span>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tighter md:text-7xl">
            {brand.name}
          </h1>
          <div className="mt-6 flex items-center gap-3 text-xs font-black uppercase tracking-widest text-foreground">
            <Tag className="h-4 w-4 text-muted-foreground/40" strokeWidth={3} />
            <span>{brand.slug}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 border-t border-border/40 pt-8">
          <div className="flex h-12 w-12 items-center justify-center bg-muted/50 text-foreground">
            <Calendar className="h-5 w-5" strokeWidth={2.5} />
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">Affiliated Since</p>
            <p className="text-sm font-black uppercase tracking-tight text-foreground">{createdDate}</p>
          </div>
        </div>

        {brand._id && (
          <div className="mt-auto">
            <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/20">
              Merchant Code: {brand._id}
            </p>
          </div>
        )}
      </div>
    </div>
  );
});

export default BrandDetailsCard;
