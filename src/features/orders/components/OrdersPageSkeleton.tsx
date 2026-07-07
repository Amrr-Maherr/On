import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { OrderListSkeleton } from "./OrderCardSkeleton"

export function OrdersPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout py-8">
        <Skeleton className="mb-8 h-4 w-40" />
        <div className="mb-8">
          <Skeleton className="h-8 w-40" />
        </div>
        <OrderListSkeleton count={4} />
      </div>
    </div>
  )
}
