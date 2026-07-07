import { Skeleton } from "@/components/ui/skeleton"

export function WishlistItemCardSkeleton() {
  return (
    <div className="flex gap-5 rounded-2xl border border-border/50 bg-card p-5">
      <Skeleton className="h-28 w-28 shrink-0 rounded-xl md:h-32 md:w-32" />
      <div className="flex flex-1 flex-col justify-between gap-3">
        <div className="flex items-start justify-between">
          <div className="space-y-1.5">
            <Skeleton className="h-4 w-48" />
            <Skeleton className="h-5 w-20" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Skeleton className="h-3 w-3" />
            <Skeleton className="h-3 w-3" />
            <Skeleton className="h-3 w-3" />
            <Skeleton className="h-3 w-3" />
            <Skeleton className="h-3 w-3" />
            <Skeleton className="h-3 w-8 ml-1" />
          </div>
          <Skeleton className="h-10 w-36 rounded-full" />
        </div>
      </div>
    </div>
  )
}

export function WishlistListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-4">
      {Array.from({ length: count }).map((_, i) => (
        <WishlistItemCardSkeleton key={i} />
      ))}
    </div>
  )
}
