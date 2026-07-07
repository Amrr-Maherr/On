import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { FiltersPanelSkeleton } from "@/components/shared/filters/FiltersPanelSkeleton"
import { CategoryCardGridSkeleton } from "./CategoryCardSkeleton"
import { PaginationSkeleton } from "@/components/shared/Pagination/PaginationSkeleton"

export function CategoriesPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout section-py pt-8">
        <Skeleton className="mb-8 h-4 w-64" />
        <div className="mb-8">
          <div className="flex items-center gap-4 border-l-4 border-foreground pl-6">
            <div className="space-y-1">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-64" />
              <Skeleton className="h-4 w-36" />
            </div>
          </div>
        </div>
        <div className="flex gap-8">
          <FiltersPanelSkeleton />
          <div className="min-w-0 flex-1">
            <Skeleton className="mb-4 h-10 w-full rounded-lg lg:hidden" />
            <CategoryCardGridSkeleton count={6} />
            <div className="mt-8 border-t border-border/40 pt-8">
              <PaginationSkeleton />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
