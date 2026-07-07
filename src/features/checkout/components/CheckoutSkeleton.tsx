import { Skeleton } from "@/components/ui/skeleton"

function CheckoutFormSkeleton() {
  return (
    <div className="space-y-10">
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-44" />
        </div>
        <div className="space-y-4 pl-14">
          <div className="space-y-2">
            <Skeleton className="h-3.5 w-20" />
            <Skeleton className="h-14 w-full rounded-lg" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-12" />
              <Skeleton className="h-14 w-full rounded-lg" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-3.5 w-14" />
              <Skeleton className="h-14 w-full rounded-lg" />
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-6">
        <div className="flex items-center gap-4">
          <Skeleton className="h-10 w-10 rounded-full" />
          <Skeleton className="h-5 w-36" />
        </div>
        <div className="grid grid-cols-2 gap-4 pl-14">
          <Skeleton className="h-20 w-full rounded-xl" />
          <Skeleton className="h-20 w-full rounded-xl" />
        </div>
      </div>
    </div>
  )
}

function CheckoutSummarySkeleton() {
  return (
    <div className="sticky top-24 space-y-5 rounded-lg border border-border/50 bg-card p-6">
      <Skeleton className="h-5 w-32" />
      <div className="space-y-4 max-h-60 overflow-hidden">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="flex items-center gap-3">
            <Skeleton className="h-14 w-14 shrink-0 rounded-lg" />
            <div className="flex-1 space-y-1.5">
              <Skeleton className="h-3.5 w-3/4" />
              <Skeleton className="h-3 w-20" />
            </div>
            <Skeleton className="h-3.5 w-12" />
          </div>
        ))}
      </div>
      <Skeleton className="h-px w-full" />
      <div className="space-y-2">
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
        <div className="flex justify-between">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-12" />
        </div>
      </div>
      <Skeleton className="h-px w-full border-dashed" />
      <div className="flex justify-between">
        <Skeleton className="h-6 w-12" />
        <Skeleton className="h-6 w-28" />
      </div>
      <Skeleton className="h-14 w-full rounded-xl" />
      <Skeleton className="h-3 w-56 mx-auto" />
    </div>
  )
}

export function CheckoutPageSkeleton() {
  return (
    <div className="container-layout py-8">
      <Skeleton className="mb-8 h-4 w-64" />
      <div className="mb-8">
        <Skeleton className="mb-1 h-3 w-24" />
        <Skeleton className="mb-2 h-8 w-72" />
        <Skeleton className="h-4 w-96" />
      </div>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1fr_420px]">
        <CheckoutFormSkeleton />
        <CheckoutSummarySkeleton />
      </div>
    </div>
  )
}
