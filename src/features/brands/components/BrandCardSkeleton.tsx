import { Skeleton } from "@/components/ui/skeleton"

export function BrandCardSkeleton() {
  return (
    <div className="group relative overflow-hidden rounded-lg">
      <Skeleton className="aspect-[4/5] w-full" />
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-2">
        <Skeleton className="h-3 w-12 bg-white/40" />
        <Skeleton className="h-7 w-3/4 bg-white/60" />
      </div>
    </div>
  )
}

export function BrandCardGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <BrandCardSkeleton key={i} />
      ))}
    </div>
  )
}
