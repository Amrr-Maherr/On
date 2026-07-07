import { Skeleton } from "@/components/ui/skeleton"

export function CartSummarySkeleton() {
  return (
    <div className="sticky top-24 space-y-4 rounded-lg border border-border/50 bg-card p-6">
      <Skeleton className="h-5 w-24" />
      <div className="space-y-3">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-28" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
      <Skeleton className="h-px w-full" />
      <div className="flex justify-between">
        <Skeleton className="h-6 w-16" />
        <Skeleton className="h-6 w-28" />
      </div>
      <Skeleton className="h-3 w-40" />
      <Skeleton className="h-14 w-full rounded-xl" />
      <Skeleton className="h-3 w-44 mx-auto" />
    </div>
  )
}
