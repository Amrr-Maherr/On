import { Skeleton } from "@/components/ui/skeleton"

export function ProfileHeaderSkeleton() {
  return (
    <div className="flex flex-col items-start gap-6 md:flex-row md:items-center md:justify-between">
      <div className="flex items-center gap-6">
        <Skeleton className="h-20 w-20 rounded-full md:h-28 md:w-28" />
        <div className="space-y-2">
          <Skeleton className="h-6 w-40" />
          <Skeleton className="h-4 w-56" />
        </div>
      </div>
      <div className="flex gap-3">
        <Skeleton className="h-10 w-28 rounded-full" />
        <Skeleton className="h-10 w-28 rounded-full" />
      </div>
    </div>
  )
}

export function ProfileInfoCardSkeleton() {
  return (
    <div className="space-y-4 rounded-lg border border-border/50 bg-card p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="space-y-1.5">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-5 w-48" />
          </div>
        ))}
      </div>
    </div>
  )
}

export function ProfilePageSkeleton() {
  return (
    <div className="container-layout section-py pt-8">
      <Skeleton className="mb-2 h-4 w-48" />
      <Skeleton className="mb-8 h-8 w-36" />
      <div className="mx-auto max-w-3xl space-y-8">
        <ProfileHeaderSkeleton />
        <ProfileInfoCardSkeleton />
      </div>
    </div>
  )
}
