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
        <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
        <span className="text-sm font-medium">{rating}</span>
        <span className="text-sm text-muted-foreground">({ratingCount})</span>
      </div>
      <span className="text-xs text-muted-foreground/60">{sold} sold</span>
    </div>
  );
});

export default ProductRating;
