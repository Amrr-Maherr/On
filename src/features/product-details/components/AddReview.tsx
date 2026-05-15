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
      <form onSubmit={handleSubmit} className="rounded-none border-2 border-border/40 bg-card p-6 md:p-10">
        <div className="flex flex-col gap-3">
          <span className="text-xs font-black uppercase tracking-widest text-foreground/60">Your Rating</span>
          <div className="flex items-center gap-1.5">
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
                    className={`h-7 w-7 transition-colors ${
                      starValue <= (hoveredStar || rating)
                        ? "fill-amber-400 text-amber-400"
                        : "text-muted-foreground/20"
                    }`}
                    strokeWidth={starValue <= (hoveredStar || rating) ? 0 : 2}
                  />
                </button>
              );
            })}
            {rating > 0 && (
              <span className="ml-3 text-[10px] font-black uppercase tracking-widest text-amber-500">
                {rating === 1 && "Poor"}
                {rating === 2 && "Fair"}
                {rating === 3 && "Good"}
                {rating === 4 && "Very Good"}
                {rating === 5 && "Excellent"}
              </span>
            )}
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3">
          <label htmlFor="review-text" className="text-xs font-black uppercase tracking-widest text-foreground/60">
            Your Review
          </label>
          <textarea
            id="review-text"
            rows={5}
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Share your thoughts about this product..."
            className="resize-none rounded-none border-2 border-border/40 bg-transparent p-6 text-sm font-bold leading-relaxed text-foreground placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none transition-all duration-300"
          />
        </div>

        <div className="mt-8 flex flex-col items-end gap-4 sm:flex-row sm:items-center sm:justify-end">
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
            Your review will be public
          </span>
          <Button
            type="submit"
            className="h-14 w-full cursor-pointer px-10 text-sm font-black sm:w-auto"
          >
            Submit Review
          </Button>
        </div>
      </form>
    </section>
  );
});

export default AddReview;
