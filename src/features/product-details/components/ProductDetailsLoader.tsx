import { memo } from "react";

const ProductDetailsLoader = memo(function ProductDetailsLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-6 h-4 w-64 animate-pulse rounded bg-muted" />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="animate-pulse rounded-2xl border border-border/50">
            <div className="aspect-square w-full rounded-t-2xl bg-muted" />
            <div className="mt-3 flex gap-2 px-4 pb-4">
              <div className="h-16 w-16 rounded-lg bg-muted sm:h-20 sm:w-20" />
              <div className="h-16 w-16 rounded-lg bg-muted sm:h-20 sm:w-20" />
              <div className="h-16 w-16 rounded-lg bg-muted sm:h-20 sm:w-20" />
              <div className="h-16 w-16 rounded-lg bg-muted sm:h-20 sm:w-20" />
            </div>
          </div>

          <div className="space-y-5">
            <div className="h-8 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-4 w-1/4 animate-pulse rounded bg-muted" />
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <div className="h-5 w-1/3 animate-pulse rounded bg-muted" />
              <div className="mt-4 h-8 w-1/4 animate-pulse rounded bg-muted" />
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <div className="space-y-2">
                <div className="h-4 w-full animate-pulse rounded bg-muted" />
                <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
                <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
              </div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <div className="flex items-center gap-3">
                <div className="h-5 w-5 rounded-full border-2 border-foreground/10 border-t-foreground/40 animate-spin" />
                <div className="h-10 w-48 animate-pulse rounded-lg bg-muted" />
              </div>
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8">
              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
              <div className="mt-3 h-4 w-full animate-pulse rounded bg-muted" />
              <div className="mt-2 h-2 w-full animate-pulse rounded bg-muted" />
            </div>
            <div className="rounded-2xl border border-border/50 bg-card p-6 md:p-8 space-y-5">
              <div className="h-4 w-24 animate-pulse rounded bg-muted" />
              <div className="flex gap-3">
                <div className="h-12 w-12 rounded-lg bg-muted" />
                <div className="space-y-2">
                  <div className="h-4 w-24 animate-pulse rounded bg-muted" />
                  <div className="h-3 w-16 animate-pulse rounded bg-muted" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default ProductDetailsLoader;
