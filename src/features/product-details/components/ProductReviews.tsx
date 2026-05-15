import { memo, useMemo } from "react";
import { Star, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { Review } from "@/features/products/types";

interface ProductReviewsProps {
  reviews: Review[];
  showAll: boolean;
  onToggleShowAll: () => void;
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

const ProductReviews = memo(function ProductReviews({ reviews, showAll, onToggleShowAll }: ProductReviewsProps) {
  const displayed = useMemo(() => showAll ? reviews : reviews.slice(0, 3), [reviews, showAll]);

  if (reviews.length === 0) {
    return (
      <section>
        <div className="mb-8">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            Social Proof
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Customer Reviews.</h2>
        </div>
        <div className="flex flex-col items-center gap-4 rounded-none border-2 border-border/40 bg-card py-12 text-center md:py-20">
          <MessageSquare className="h-10 w-10 text-muted-foreground/30" />
          <div>
            <p className="text-sm font-black uppercase tracking-widest text-foreground">No reviews yet</p>
            <p className="mt-2 text-sm font-bold text-muted-foreground/60">
              Be the first to review this product.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section>
      <div className="mb-8 flex items-end justify-between border-b-2 border-border/40 pb-6">
        <div>
          <span className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/60">
            Social Proof
          </span>
          <h2 className="mt-2 text-2xl font-black tracking-tight">Customer Reviews.</h2>
        </div>
        <span className="text-[10px] font-black uppercase tracking-widest tabular-nums text-muted-foreground/60">{reviews.length} reviews</span>
      </div>
      <div className="grid gap-4">
        {displayed.map((review) => (
          <div
            key={review._id}
            className="rounded-none border-2 border-border/40 bg-card p-6 transition-all duration-300 hover:border-foreground/20"
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-none bg-muted text-sm font-black">
                  {review.user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-black uppercase tracking-tight">{review.user.name}</p>
                  <div className="flex items-center gap-0.5 mt-1.5">
                    {Array.from({ length: 5 }, (_, i) => (
                      <Star
                        key={i}
                        className={`h-3.5 w-3.5 ${
                          i < Math.round(review.rating)
                            ? "fill-amber-400 text-amber-400"
                            : "text-muted-foreground/20"
                        }`}
                        strokeWidth={i < Math.round(review.rating) ? 0 : 2}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                {formatDate(review.createdAt)}
              </span>
            </div>
            {review.review && (
              <p className="mt-4 text-sm font-bold leading-relaxed text-muted-foreground/80">
                {review.review}
              </p>
            )}
          </div>
        ))}
      </div>
      {reviews.length > 3 && (
        <div className="mt-8 text-center">
          <Button variant="outline" className="h-14 px-10 text-[10px] font-black uppercase tracking-[0.2em]" onClick={onToggleShowAll}>
            {showAll ? "Show Less" : `Show all ${reviews.length} reviews`}
          </Button>
        </div>
      )}
    </section>
  );
});

export default ProductReviews;
