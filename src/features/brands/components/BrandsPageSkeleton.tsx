import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { BrandCardGridSkeleton } from "./BrandCardSkeleton"
import { PaginationSkeleton } from "@/components/shared/Pagination/PaginationSkeleton"

export function BrandsPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout section-py pt-8">
        <Skeleton className="mb-8 h-4 w-64" />
        <div className="mb-8">
          <div className="flex items-center gap-4 border-l-4 border-foreground pl-6">
            <div className="space-y-1">
              <Skeleton className="h-3 w-16" />
              <Skeleton className="h-8 w-48" />
              <Skeleton className="h-4 w-32" />
            </div>
          </div>
        </div>
        <BrandCardGridSkeleton count={6} />
        <div className="mt-8 border-t border-border/40 pt-8">
          <PaginationSkeleton />
        </div>
      </div>
    </div>
  )
}
