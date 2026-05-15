import { memo } from "react";

const CategoriesLoader = memo(function CategoriesLoader() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] w-full rounded-2xl bg-muted/60" />
    </div>
  );
});

export default CategoriesLoader;
