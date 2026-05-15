import { memo } from "react";
import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  ratingCount: number;
  sold: number;
}

const ProductRating = memo(function ProductRating({ rating, ratingCount, sold }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1.5">
        <Star className="h-5 w-5 fill-amber-400 text-amber-400" />
        <span className="text-base font-bold">{rating}</span>
        <span className="text-sm text-muted-foreground">({ratingCount})</span>
      </div>
      <span className="h-4 w-px bg-border/50" />
      <span className="text-sm font-medium text-muted-foreground">{sold} sold</span>
    </div>
  );
});

export default ProductRating;
