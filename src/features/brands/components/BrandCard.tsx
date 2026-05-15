import { memo } from "react";
import { Link } from "react-router-dom";
import type { Brand } from "@/features/brands/types";

const BrandCard = memo(function BrandCard({ brand }: { brand: Brand }) {
  return (
    <Link
      to={`/brands/${brand.slug}/${brand._id}`}
      className="group relative block overflow-hidden rounded-3xl bg-card transition-all duration-500 hover:-translate-y-0.5"
    >
      <div className="aspect-[3/4] overflow-hidden bg-muted/10">
        <img
          src={brand.image}
          alt={brand.name}
          loading="lazy"
          className="h-full w-full object-contain p-10 transition-all duration-700 group-hover:scale-[1.04]"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6">
        <h3 className="text-lg font-bold text-white">{brand.name}</h3>
      </div>
    </Link>
  );
});

export default BrandCard;
