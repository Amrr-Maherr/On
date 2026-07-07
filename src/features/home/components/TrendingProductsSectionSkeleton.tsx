import { Skeleton } from "@/components/ui/skeleton"
import { ProductCardSkeleton } from "@/features/products/components/ProductCardSkeleton"

export function TrendingProductsSectionSkeleton() {
  return (
    <section className="section-py bg-background">
      <div className="container-layout">
        <div className="mb-10 flex items-start gap-4">
          <Skeleton className="h-16 w-2 shrink-0" />
          <div className="flex-1 space-y-2">
            <div className="flex items-center gap-2">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="h-14 w-72 md:h-16" />
          </div>
          <Skeleton className="hidden h-10 w-28 rounded-full md:block" />
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <ProductCardSkeleton key={i} />
          ))}
        </div>
        <div className="mt-8 text-center md:hidden">
          <Skeleton className="mx-auto h-12 w-40 rounded-full" />
        </div>
      </div>
    </section>
  )
}
