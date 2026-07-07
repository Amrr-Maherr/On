import { Skeleton } from "@/components/ui/skeleton"
import { CategoryCardSkeleton } from "@/features/categories/components/CategoryCardSkeleton"

export function CategoriesSectionSkeleton() {
  return (
    <div className="container-layout py-8">
      <div className="mb-6 flex items-center justify-between">
        <div className="space-y-1">
          <Skeleton className="h-3 w-24" />
          <Skeleton className="h-7 w-48" />
        </div>
        <Skeleton className="h-4 w-20" />
      </div>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
        {Array.from({ length: 4 }).map((_, i) => (
          <CategoryCardSkeleton key={i} />
        ))}
      </div>
    </div>
  )
}
