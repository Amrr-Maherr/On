import { memo } from "react";

const WishlistLoader = memo(function WishlistLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-8">
        <p className="font-semibold uppercase tracking-wider text-muted-foreground/60">Loading your wishlist...</p>
        <div className="mt-2 h-8 w-56 animate-pulse rounded-xl bg-muted" />
      </div>
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex gap-5 rounded-2xl border border-border/50 bg-card p-5">
            <div className="h-28 w-28 shrink-0 animate-pulse rounded-xl bg-muted md:h-32 md:w-32" />
            <div className="flex flex-1 flex-col justify-between gap-3">
              <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted" />
              <div className="h-3 w-1/4 animate-pulse rounded-lg bg-muted" />
              <div className="flex items-center justify-end">
                <div className="h-8 w-28 animate-pulse rounded-full bg-muted" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default WishlistLoader;
