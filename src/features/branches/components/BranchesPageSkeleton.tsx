import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { BranchMapSkeleton } from "./BranchMapSkeleton"
import { BranchListSkeleton } from "./BranchCardSkeleton"

export function BranchesPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout section-py pt-8">
        <Skeleton className="mb-8 h-4 w-48" />
        <div className="mb-8 border-l-4 border-foreground pl-6">
          <Skeleton className="h-3 w-20" />
          <Skeleton className="mt-1 h-8 w-48" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
          <div className="lg:sticky lg:top-24">
            <BranchMapSkeleton />
          </div>
          <div className="max-h-[600px] overflow-y-auto">
            <BranchListSkeleton count={5} />
          </div>
        </div>
      </div>
    </div>
  )
}
