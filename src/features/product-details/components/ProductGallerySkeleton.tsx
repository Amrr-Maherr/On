import { Skeleton } from "@/components/ui/skeleton"

export function ProductGallerySkeleton() {
  return (
    <div className="space-y-4">
      <div className="relative">
        <Skeleton className="aspect-square w-full rounded-2xl" />
        <Skeleton className="absolute right-4 top-4 h-9 w-9 rounded-lg" />
      </div>
      <div className="flex gap-3">
        {Array.from({ length: 4 }).map((_, i) => (
          <Skeleton key={i} className="h-16 w-16 shrink-0 rounded-lg sm:h-20 sm:w-20" />
        ))}
      </div>
    </div>
  )
}
