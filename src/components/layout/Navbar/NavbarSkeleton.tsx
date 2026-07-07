import { Skeleton } from "@/components/ui/skeleton"

export function NavbarSkeleton() {
  return (
    <div className="sticky top-0 z-50 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container-layout flex h-16 items-center justify-between md:h-20">
        <div className="flex items-center gap-6">
          <Skeleton className="h-8 w-24" />
          <div className="hidden items-center gap-4 md:flex">
            <Skeleton className="h-4 w-16" />
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-4 w-14" />
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Skeleton className="hidden h-10 w-48 rounded-full md:block" />
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-5 w-5" />
          <Skeleton className="h-8 w-8 rounded-full md:hidden" />
        </div>
      </div>
    </div>
  )
}
