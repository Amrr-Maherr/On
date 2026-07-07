import { Skeleton } from "@/components/ui/skeleton"

export function FooterSkeleton() {
  return (
    <div className="border-t border-border/50 bg-neutral-950">
      <div className="container-layout py-16">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6">
          <div className="col-span-2 space-y-4">
            <Skeleton className="h-8 w-32 bg-white/20" />
            <Skeleton className="h-4 w-64 bg-white/10" />
            <div className="flex gap-3">
              <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />
              <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />
              <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />
              <Skeleton className="h-10 w-10 rounded-lg bg-white/10" />
            </div>
          </div>
          {Array.from({ length: 4 }).map((_, colIdx) => (
            <div key={colIdx} className="space-y-3">
              <Skeleton className="h-4 w-20 bg-white/20" />
              {Array.from({ length: 4 }).map((_, linkIdx) => (
                <Skeleton key={linkIdx} className="h-3.5 w-24 bg-white/10" />
              ))}
            </div>
          ))}
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 border-t border-white/10 pt-12 md:grid-cols-3">
          <div className="space-y-3">
            <Skeleton className="h-5 w-24 bg-white/20" />
            <Skeleton className="h-4 w-48 bg-white/10" />
            <div className="flex gap-2">
              <Skeleton className="h-12 w-40 rounded-lg bg-white/10" />
              <Skeleton className="h-12 w-28 rounded-lg bg-white/10" />
            </div>
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-20 bg-white/20" />
            <Skeleton className="h-4 w-36 bg-white/10" />
            <Skeleton className="h-4 w-40 bg-white/10" />
          </div>
          <div className="space-y-3">
            <Skeleton className="h-5 w-16 bg-white/20" />
            <div className="flex gap-2">
              <Skeleton className="h-12 w-32 rounded-lg bg-white/10" />
              <Skeleton className="h-12 w-32 rounded-lg bg-white/10" />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-border/50 bg-white py-4">
        <div className="container-layout flex flex-col items-center justify-between gap-4 md:flex-row">
          <Skeleton className="h-4 w-64" />
          <div className="flex gap-4">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-12" />
            <Skeleton className="h-4 w-16" />
          </div>
          <div className="flex gap-2">
            <Skeleton className="h-6 w-10 rounded" />
            <Skeleton className="h-6 w-10 rounded" />
            <Skeleton className="h-6 w-10 rounded" />
            <Skeleton className="h-6 w-10 rounded" />
          </div>
        </div>
      </div>
    </div>
  )
}
