import { memo } from "react";

const CategoryDetailsLoader = memo(function CategoryDetailsLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-6 h-4 w-64 animate-pulse rounded bg-muted" />
      <div className="grid gap-16 md:grid-cols-2">
        <div className="animate-pulse">
          <div className="aspect-[4/5] w-full rounded-2xl bg-muted/60" />
        </div>
        <div className="flex flex-col justify-center gap-10">
          <div className="space-y-4 pl-8">
            <div className="h-3 w-16 animate-pulse rounded bg-muted/60" />
            <div className="h-10 w-3/4 animate-pulse rounded bg-muted/60" />
            <div className="h-4 w-1/3 animate-pulse rounded bg-muted/40" />
          </div>
          <div className="flex items-center gap-4 border-t border-border/40 pt-8">
            <div className="h-12 w-12 animate-pulse bg-muted/60" />
            <div className="space-y-2">
              <div className="h-3 w-20 animate-pulse rounded bg-muted/40" />
              <div className="h-4 w-32 animate-pulse rounded bg-muted/60" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
});

export default CategoryDetailsLoader;