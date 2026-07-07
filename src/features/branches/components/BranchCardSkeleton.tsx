import { Skeleton } from "@/components/ui/skeleton"

export function BranchCardSkeleton() {
  return (
    <div className="flex w-full items-start justify-between rounded-lg border border-border/40 p-5">
      <div className="space-y-3 flex-1">
        <Skeleton className="h-5 w-48" />
        <div className="flex gap-2">
          <Skeleton className="h-5 w-24 rounded-full" />
          <Skeleton className="h-5 w-32 rounded-full" />
        </div>
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3.5 w-56" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3.5 w-32" />
          </div>
          <div className="flex items-center gap-2">
            <Skeleton className="h-4 w-4" />
            <Skeleton className="h-3.5 w-44" />
          </div>
        </div>
      </div>
      <Skeleton className="h-12 w-12 shrink-0 rounded-lg" />
    </div>
  )
}

export function BranchListSkeleton({ count = 5 }: { count?: number }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: count }).map((_, i) => (
        <BranchCardSkeleton key={i} />
      ))}
    </div>
  )
}
