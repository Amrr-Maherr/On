import { memo } from "react";
import { Skeleton } from "@/components/ui/skeleton";

const BannerSkeleton = memo(function BannerSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-none bg-muted/30 px-8 py-16 md:px-14 md:py-20 lg:px-16 lg:py-28">
      <Skeleton className="h-3 w-16" />
      <Skeleton className="mt-3 h-12 w-2/3 sm:h-14 lg:h-16" />
      <Skeleton className="mt-2 h-4 w-1/2" />
      <Skeleton className="mt-4 h-12 w-36" />
    </div>
  );
});

export default BannerSkeleton;
