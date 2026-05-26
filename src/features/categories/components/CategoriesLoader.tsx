import { memo } from "react";

const CategoriesLoader = memo(function CategoriesLoader() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[4/5] w-full rounded-2xl bg-muted/60" />
      <div className="mt-4 space-y-2.5">
        <div className="h-3.5 w-2/3 rounded-full bg-muted/60" />
        <div className="h-3 w-1/4 rounded-full bg-muted/40" />
      </div>
    </div>
  );
});

export default CategoriesLoader;