import { Skeleton } from "@/components/ui/skeleton"

function AuthFormSkeleton() {
  return (
    <div className="space-y-6">
      <div className="space-y-2 text-center">
        <Skeleton className="mx-auto h-8 w-48" />
        <Skeleton className="mx-auto h-4 w-64" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-14 w-full rounded-lg" />
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>
      <Skeleton className="h-14 w-full rounded-lg" />
      <div className="relative">
        <Skeleton className="h-px w-full" />
        <Skeleton className="mx-auto -mt-2.5 h-5 w-28" />
      </div>
      <Skeleton className="h-14 w-full rounded-lg" />
      <div className="text-center">
        <Skeleton className="mx-auto h-4 w-48" />
      </div>
    </div>
  )
}

export function AuthPageSkeleton() {
  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <AuthFormSkeleton />
      </div>
    </div>
  )
}

export function AuthFormSkeletonSimple() {
  return (
    <div className="w-full max-w-md mx-auto space-y-6">
      <div className="space-y-2 text-center">
        <Skeleton className="mx-auto h-8 w-48" />
        <Skeleton className="mx-auto h-4 w-64" />
      </div>
      <div className="space-y-4">
        <Skeleton className="h-14 w-full rounded-lg" />
        <Skeleton className="h-14 w-full rounded-lg" />
      </div>
      <Skeleton className="h-14 w-full rounded-lg" />
      <div className="relative">
        <Skeleton className="h-px w-full" />
        <Skeleton className="mx-auto -mt-2.5 h-5 w-28" />
      </div>
      <Skeleton className="h-14 w-full rounded-lg" />
      <div className="text-center">
        <Skeleton className="mx-auto h-4 w-48" />
      </div>
    </div>
  )
}
