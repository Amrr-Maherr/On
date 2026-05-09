import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Review } from "@/features/products/types";

interface ProductReviewsProps {
  reviews: Review[];
  showAll: boolean;
  onToggleShowAll: () => void;
}

export default function ProductReviews({ reviews, showAll, onToggleShowAll }: ProductReviewsProps) {
  const displayed = showAll ? reviews : reviews.slice(0, 3);

  return (
    <section className="mt-16">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-bold">Customer Reviews</h2>
        <span className="text-sm text-muted-foreground">{reviews.length} reviews</span>
      </div>
      <div className="grid gap-4">
        {displayed.map((review) => (
          <div
            key={review._id}
            className="rounded-xl bg-card p-5 ring-1 ring-foreground/10"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-sm font-semibold">
                  {review.user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium">{review.user.name}</p>
                  <div className="flex items-center gap-0.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.round(review.rating)
                            ? "fill-yellow-400 text-yellow-400"
                            : "text-muted-foreground/30"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-xs text-muted-foreground">
                {new Date(review.createdAt).toLocaleDateString()}
              </span>
            </div>
            {review.review && (
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {review.review}
              </p>
            )}
          </div>
        ))}
      </div>
      {reviews.length > 3 && (
        <div className="mt-6 text-center">
          <Button variant="outline" onClick={onToggleShowAll}>
            {showAll ? "Show Less" : `Show More (${reviews.length - 3} more)`}
          </Button>
        </div>
      )}
    </section>
  );
}
