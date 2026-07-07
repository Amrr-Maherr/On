import { memo } from "react";
import { cn } from "@/lib/utils";

interface LoadingStateProps {
  className?: string;
  count?: number;
  variant?: "card" | "row" | "text";
  columns?: number;
}

const cardSkeleton = (key: number) => (
  <div key={key} className="animate-pulse">
    <div className="aspect-[4/5] w-full rounded-2xl bg-muted/60" />
    <div className="mt-4 space-y-2.5">
      <div className="h-3.5 w-2/3 rounded-full bg-muted/60" />
      <div className="h-3 w-1/4 rounded-full bg-muted/40" />
    </div>
  </div>
);

const rowSkeleton = (key: number) => (
  <div key={key} className="flex gap-5 rounded-2xl border border-border/50 bg-card p-5 animate-pulse">
    <div className="h-28 w-28 shrink-0 rounded-xl bg-muted md:h-32 md:w-32" />
    <div className="flex flex-1 flex-col justify-between gap-3">
      <div className="h-4 w-3/4 rounded-lg bg-muted" />
      <div className="h-3 w-1/4 rounded-lg bg-muted" />
      <div className="flex items-center justify-end">
        <div className="h-8 w-28 rounded-full bg-muted" />
      </div>
    </div>
  </div>
);

const textSkeleton = (key: number) => (
  <div key={key} className="animate-pulse space-y-2.5">
    <div className="h-4 w-full rounded-lg bg-muted" />
    <div className="h-4 w-3/4 rounded-lg bg-muted" />
  </div>
);

const gridCols: Record<number, string> = {
  2: "sm:grid-cols-2",
  3: "md:grid-cols-3",
  4: "lg:grid-cols-4",
};

const LoadingState = memo(function LoadingState({
  className,
  count = 6,
  variant = "card",
  columns = 4,
}: LoadingStateProps) {
  if (variant === "card") {
    return (
      <div className={cn("grid grid-cols-1 gap-x-4 gap-y-12", gridCols[columns] || "lg:grid-cols-4", className)}>
        {Array.from({ length: count }).map((_, i) => cardSkeleton(i))}
      </div>
    );
  }

  if (variant === "row") {
    return (
      <div className={cn("space-y-4", className)}>
        {Array.from({ length: count }).map((_, i) => rowSkeleton(i))}
      </div>
    );
  }

  return (
    <div className={cn("space-y-4", className)}>
      {Array.from({ length: count }).map((_, i) => textSkeleton(i))}
    </div>
  );
});

export default LoadingState;
