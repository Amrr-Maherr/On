import { Skeleton } from "@/components/ui/skeleton"

export function PaginationSkeleton() {
  return (
    <div className="flex items-center justify-center gap-1.5 pt-8">
      <Skeleton className="h-10 w-10 rounded-lg" />
      <Skeleton className="h-10 w-10 rounded-lg" />
      <Skeleton className="h-10 w-10 rounded-lg" />
      <Skeleton className="h-10 w-10 rounded-lg" />
      <Skeleton className="h-10 w-10 rounded-lg" />
      <Skeleton className="h-10 w-10 rounded-lg" />
    </div>
  )
}
