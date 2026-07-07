import { Skeleton } from "@/components/ui/skeleton"
import { BrandCardSkeleton } from "@/features/brands/components/BrandCardSkeleton"

export function BrandsSectionSkeleton() {
  return (
    <div className="container-layout py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <Skeleton className="h-3 w-16" />
          <Skeleton className="h-7 w-40" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <BrandCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
