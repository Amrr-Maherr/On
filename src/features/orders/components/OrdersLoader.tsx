import { memo } from "react";

const OrdersLoader = memo(function OrdersLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-8 h-8 w-48 animate-pulse rounded-xl bg-muted" />
      <div className="space-y-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="rounded-2xl border border-border/50 bg-card p-5">
            <div className="mb-4 flex items-center justify-between">
              <div className="h-4 w-24 animate-pulse rounded-lg bg-muted" />
              <div className="h-4 w-20 animate-pulse rounded-lg bg-muted" />
            </div>
            <div className="space-y-3">
              {Array.from({ length: 2 }).map((_, j) => (
                <div key={j} className="flex items-center gap-3">
                  <div className="h-14 w-14 shrink-0 animate-pulse rounded-xl bg-muted" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted" />
                    <div className="h-3 w-1/4 animate-pulse rounded-lg bg-muted" />
                  </div>
                </div>
              ))}
            </div>
            <hr className="my-4 border-border/40" />
            <div className="flex items-center justify-between">
              <div className="h-4 w-32 animate-pulse rounded-lg bg-muted" />
              <div className="h-5 w-20 animate-pulse rounded-lg bg-muted" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default OrdersLoader;
