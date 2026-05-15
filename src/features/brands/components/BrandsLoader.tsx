import { memo } from "react";

const BrandsLoader = memo(function BrandsLoader() {
  return (
    <div className="animate-pulse">
      <div className="aspect-[3/4] w-full rounded-2xl bg-muted/60" />
    </div>
  );
});

export default BrandsLoader;
