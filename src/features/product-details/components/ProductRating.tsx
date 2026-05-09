import { Star } from "lucide-react";

interface ProductRatingProps {
  rating: number;
  ratingCount: number;
  sold: number;
}

export default function ProductRating({ rating, ratingCount, sold }: ProductRatingProps) {
  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-1">
        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
        <span className="font-semibold">{rating}</span>
        <span className="text-sm text-muted-foreground">({ratingCount})</span>
      </div>
      <span className="text-sm text-muted-foreground">{sold} sold</span>
    </div>
  );
}
