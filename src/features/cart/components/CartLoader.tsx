import { memo } from "react";

const CartLoader = memo(function CartLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-8 h-8 w-56 animate-pulse rounded bg-muted" />
      <div className="grid gap-4 lg:grid-cols-[1fr_320px] lg:gap-8">
        <div className="space-y-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <div key={i} className="flex-row gap-4 rounded-2xl border border-border/50 p-4">
              <div className="h-24 w-24 shrink-0 animate-pulse rounded-xl bg-muted md:h-28 md:w-28" />
              <div className="flex flex-1 flex-col justify-between gap-3">
                <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
                <div className="h-3 w-1/4 animate-pulse rounded bg-muted" />
                <div className="flex items-center justify-between">
                  <div className="flex gap-1">
                    <div className="h-7 w-7 animate-pulse rounded-lg bg-muted" />
                    <div className="h-7 w-10 animate-pulse rounded bg-muted" />
                    <div className="h-7 w-7 animate-pulse rounded-lg bg-muted" />
                  </div>
                  <div className="h-5 w-16 animate-pulse rounded bg-muted" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div className="rounded-2xl border border-border/50 p-6">
            <div className="mb-4 h-5 w-32 animate-pulse rounded bg-muted" />
            <div className="space-y-3">
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
              <div className="h-4 w-full animate-pulse rounded bg-muted" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CartLoader;
