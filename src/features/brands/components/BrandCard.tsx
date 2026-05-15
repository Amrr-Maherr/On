import { memo } from "react";
import { Link } from "react-router-dom";
import type { Brand } from "@/features/brands/types";

const BrandCard = memo(function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      to={`/brands/${brand.slug}/${brand._id}`}
      className="group relative block overflow-hidden rounded-2xl bg-card transition-all duration-500 hover:-translate-y-0.5 hover:shadow-sm"
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted/20">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          className="h-full w-full object-contain p-8 transition-all duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-5">
        <h3 className="text-lg font-medium text-white">{brand.name}</h3>
      </div>
    </Link>
  );
});

export default BrandCard;
