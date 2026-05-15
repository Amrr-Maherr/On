import { memo } from "react";

const BannerSkeleton = memo(function BannerSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-3xl bg-muted/30 px-8 py-16 md:px-14 md:py-20 lg:px-16 lg:py-28">
      <div className="h-3 w-16 animate-pulse rounded bg-muted" />
      <div className="mt-3 h-12 w-2/3 animate-pulse rounded-lg bg-muted sm:h-14 lg:h-16" />
      <div className="mt-2 h-4 w-1/2 animate-pulse rounded bg-muted" />
      <div className="mt-4 h-12 w-36 animate-pulse rounded-full bg-muted" />
    </div>
  );
});

export default BannerSkeleton;
