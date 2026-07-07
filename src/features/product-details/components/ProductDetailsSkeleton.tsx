import { Skeleton } from "@/components/ui/skeleton"
import { ProductGallerySkeleton } from "./ProductGallerySkeleton"

export function ProductInfoSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Skeleton className="h-4 w-20" />
        <Skeleton className="h-8 w-3/4" />
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Skeleton key={i} className="h-4 w-4" />
            ))}
          </div>
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
      <div className="flex items-baseline gap-3">
        <Skeleton className="h-8 w-24" />
        <Skeleton className="h-5 w-16" />
      </div>
      <Skeleton className="h-px w-full" />
      <div className="space-y-3">
        <Skeleton className="h-4 w-16" />
        <div className="flex gap-2">
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-12 w-12 rounded-lg" />
          <Skeleton className="h-12 w-12 rounded-lg" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-4 w-24" />
        <div className="flex gap-2 flex-wrap">
          <Skeleton className="h-8 w-16 rounded-full" />
          <Skeleton className="h-8 w-20 rounded-full" />
          <Skeleton className="h-8 w-14 rounded-full" />
        </div>
      </div>
      <div className="space-y-3">
        <Skeleton className="h-14 w-full rounded-xl" />
        <Skeleton className="h-14 w-full rounded-xl" />
      </div>
      <div className="space-y-2">
        <Skeleton className="h-4 w-32" />
        <Skeleton className="h-3 w-full" />
        <Skeleton className="h-3 w-5/6" />
        <Skeleton className="h-3 w-4/6" />
      </div>
    </div>
  )
}

export function ProductDetailsPageSkeleton() {
  return (
    <div className="container-layout py-12">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
        <ProductGallerySkeleton />
        <ProductInfoSkeleton />
      </div>
    </div>
  )
}
