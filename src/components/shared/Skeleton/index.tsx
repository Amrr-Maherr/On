import { memo } from "react";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  variant?: "text" | "rectangular" | "circular" | "card";
  width?: string | number;
  height?: string | number;
  count?: number;
  containerClassName?: string;
}

const variantClasses = {
  text: "h-4 w-full rounded",
  rectangular: "rounded-md",
  circular: "rounded-full",
  card: "rounded-lg",
};

const Skeleton = memo(function Skeleton({
  className,
  variant = "text",
  width,
  height,
  count = 1,
  containerClassName,
}: SkeletonProps) {
  const style: React.CSSProperties = {};
  if (width) style.width = typeof width === "number" ? `${width}px` : width;
  if (height) style.height = typeof height === "number" ? `${height}px` : height;

  const items = Array.from({ length: count }, (_, i) => (
    <div
      key={i}
      className={cn(
        "animate-pulse bg-muted",
        variantClasses[variant],
        className,
      )}
      style={style}
      aria-hidden="true"
    />
  ));

  if (count === 1) return items[0];

  return (
    <div className={cn("flex flex-col gap-3", containerClassName)} role="status" aria-label="Loading">
      {items}
      <span className="sr-only">Loading...</span>
    </div>
  );
});

const gridCols: Record<number, string> = {
  1: "grid-cols-1",
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
  4: "lg:grid-cols-4",
};

interface GridSkeletonProps {
  columns?: number;
  count?: number;
  aspectRatio?: string;
  titleWidth?: number;
}

const GridSkeleton = memo(function GridSkeleton({
  columns = 4,
  count = 8,
  aspectRatio = "aspect-[4/5]",
  titleWidth = 160,
}: GridSkeletonProps) {
  return (
    <div className="container-layout py-8">
      <div className="mb-8">
        <Skeleton variant="text" width={titleWidth} height={24} className="mb-2" />
        <Skeleton variant="text" width={80} height={14} />
      </div>
      <div className={cn("grid grid-cols-1 gap-8", gridCols[columns] || "lg:grid-cols-4")}>
        {Array.from({ length: count }).map((_, i) => (
          <div key={i} className="overflow-hidden rounded-lg bg-muted/10">
            <Skeleton variant="rectangular" className={cn("w-full", aspectRatio)} />
          </div>
        ))}
      </div>
    </div>
  );
});

interface CampaignHeaderSkeletonProps {
  className?: string;
}

const CampaignHeaderSkeleton = memo(function CampaignHeaderSkeleton({
  className,
}: CampaignHeaderSkeletonProps) {
  return (
    <div
      className={cn(
        "h-48 animate-pulse bg-muted md:h-56",
        className,
      )}
      aria-hidden="true"
    />
  );
});

export { GridSkeleton, CampaignHeaderSkeleton };
export default Skeleton;
