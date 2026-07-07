import { Skeleton } from "@/components/ui/skeleton"

export function CartItemCardSkeleton() {
  return (
    <div className="flex gap-6 border-b border-border/50 pb-6">
      <Skeleton className="h-32 w-32 shrink-0 rounded-xl md:h-40 md:w-40" />
      <div className="flex flex-1 flex-col justify-between gap-2">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <Skeleton className="h-4 w-3/4" />
            <Skeleton className="h-3 w-16" />
          </div>
          <Skeleton className="h-8 w-8 rounded-full" />
        </div>
        <div className="flex items-end justify-between">
          <div className="flex items-center gap-2">
            <Skeleton className="h-9 w-9 rounded-lg" />
            <Skeleton className="h-5 w-6" />
            <Skeleton className="h-9 w-9 rounded-lg" />
          </div>
          <div className="space-y-1 text-right">
            <Skeleton className="h-3 w-10 ml-auto" />
            <Skeleton className="h-5 w-20 ml-auto" />
          </div>
        </div>
      </div>
    </div>
  )
}

export function CartItemsListSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="space-y-6">
      {Array.from({ length: count }).map((_, i) => (
        <CartItemCardSkeleton key={i} />
      ))}
    </div>
  )
}
