import { memo, useState } from "react";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const AddReview = memo(function AddReview() {
  const [rating, setRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <section>
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          Your Feedback
        </span>
        <h2 className="mt-2 text-2xl font-black tracking-tight">Write a Review.</h2>
      </div>
      <form onSubmit={handleSubmit} className="rounded-2xl bg-card p-6 ring-1 ring-foreground/5 md:p-8">
        <div className="flex flex-col gap-2">
          <span className="text-sm font-medium text-foreground">Your Rating</span>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }, (_, i) => {
              const starValue = i + 1;
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => setRating(starValue)}
                  onMouseEnter={() => setHoveredStar(starValue)}
                  onMouseLeave={() => setHoveredStar(0)}
                  className="cursor-pointer transition-transform duration-150 active:scale-90"
                >
                  <Star
                    className={`h-6 w-6 transition-colors ${
                      starValue <= (hoveredStar || rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/20"
                    }`}
                  />
                </button>
              );
            })}
            {rating > 0 && (
              <span className="ml-2 text-sm text-muted-foreground/60">
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </span>
            )}
          </div>
        </div>

        <div className="mt-6 flex flex-col gap-2">
          <label htmlFor="review-text" className="text-sm font-medium text-foreground">
            Your Review
          </label>
          <textarea
            id="review-text"
            rows={4}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your thoughts about this product..."
            className="resize-none rounded-lg border border-border/40 bg-transparent p-4 text-sm leading-relaxed text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:ring-1 focus:ring-foreground/20"
          />
        </div>

        <div className="mt-6 flex flex-col items-end gap-3 sm:flex-row sm:items-center sm:justify-end">
          <span className="text-xs text-muted-foreground/40">
            Your review will be public
          </span>
          <Button
            type="submit"
            className="h-11 w-full cursor-pointer rounded-full bg-foreground px-6 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97] sm:h-10 sm:w-auto"
          >
            Submit Review
          </Button>
        </div>
      </form>
    </section>
  );
});

export default AddReview;
