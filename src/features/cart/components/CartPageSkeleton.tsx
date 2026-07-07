import { Skeleton } from "@/components/ui/skeleton"
import { CampaignHeaderSkeleton } from "@/components/shared/components/CampaignHeaderSkeleton"
import { CartItemsListSkeleton } from "./CartItemCardSkeleton"
import { CartSummarySkeleton } from "./CartSummarySkeleton"

export function CartPageSkeleton() {
  return (
    <div>
      <CampaignHeaderSkeleton />
      <div className="container-layout section-py pt-8">
        <Skeleton className="mb-8 h-4 w-40" />
        <div className="mb-8 flex items-center justify-between">
          <div className="flex items-center gap-4 border-l-4 border-foreground pl-6">
            <Skeleton className="h-8 w-32" />
          </div>
          <Skeleton className="hidden h-10 w-28 rounded-full lg:block" />
        </div>
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]">
          <CartItemsListSkeleton count={3} />
          <CartSummarySkeleton />
        </div>
      </div>
    </div>
  )
}
