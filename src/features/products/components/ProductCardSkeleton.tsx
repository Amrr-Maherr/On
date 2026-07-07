import { Skeleton } from "@/components/ui/skeleton"

export function ProductCardSkeleton() {
  return (
    <div className="group">
      <div className="relative overflow-hidden">
        <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
        <Skeleton className="absolute right-3 top-3 h-8 w-8 rounded-full" />
      </div>
      <div className="mt-5 space-y-2.5">
        <div className="flex items-start justify-between gap-2">
          <Skeleton className="h-4 flex-1" />
          <Skeleton className="h-5 w-16 shrink-0" />
        </div>
        <div className="flex items-center gap-1.5">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="h-3 w-0.5 rounded-full" />
          <Skeleton className="h-3 w-12" />
        </div>
      </div>
    </div>
  )
}

export function ProductCardGridSkeleton({ count = 8 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  )
}
