import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { WishlistListSkeleton } from "./WishlistItemCardSkeleton"

export function WishlistPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout py-8">
        <Skeleton className="mb-8 h-4 w-40" />
        <div className="mb-8">
          <Skeleton className="h-8 w-48" />
        </div>
        <WishlistListSkeleton count={3} />
      </div>
    </div>
  )
}
