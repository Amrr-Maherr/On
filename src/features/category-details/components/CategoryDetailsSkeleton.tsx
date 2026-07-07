import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { ProductCardGridSkeleton } from "@/features/products/components/ProductCardSkeleton"

export function CategoryDetailsPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout py-12">
        <Skeleton className="mb-12 h-4 w-72" />
        <div className="space-y-4">
          <Skeleton className="h-6 w-48" />
          <Skeleton className="h-4 w-96" />
          <Skeleton className="h-4 w-80" />
        </div>
      </div>
      <div className="section-py mt-20 border-t border-border/40">
        <div className="container-layout">
          <div className="mb-8 border-l-4 border-foreground pl-6">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="mt-1 h-8 w-56" />
          </div>
          <ProductCardGridSkeleton count={6} />
        </div>
      </div>
    </div>
  )
}
