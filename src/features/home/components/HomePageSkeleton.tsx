import { Skeleton } from "@/components/ui/skeleton"

export function HomePageSkeleton() {
  return (
    <div>
      <section className="relative h-[80vh] min-h-[500px] bg-neutral-950 md:h-screen">
        <div className="absolute inset-0">
          <Skeleton className="h-full w-full rounded-none bg-neutral-900" />
        </div>
        <div className="container-layout relative z-10 flex h-full flex-col justify-end pb-20">
          <Skeleton className="mb-4 h-4 w-32 bg-white/20" />
          <Skeleton className="mb-2 h-16 w-3/4 bg-white/30 md:h-24" />
          <Skeleton className="mb-8 h-5 w-96 bg-white/10" />
          <div className="flex gap-4">
            <Skeleton className="h-14 w-44 bg-white/20" />
            <Skeleton className="h-14 w-44 bg-white/10" />
          </div>
        </div>
      </section>

      <section className="container-layout section-py">
        <div className="mb-10 flex items-center justify-between">
          <div className="space-y-2">
            <Skeleton className="h-3 w-24" />
            <Skeleton className="h-8 w-56" />
          </div>
          <Skeleton className="h-4 w-20" />
        </div>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-5 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section-py bg-muted/20">
        <div className="container-layout">
          <div className="mb-10 flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-28" />
              <Skeleton className="h-8 w-64" />
            </div>
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="aspect-[4/5] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py">
        <div className="container-layout">
          <div className="relative overflow-hidden bg-muted/30 px-8 py-16 md:px-14 md:py-20 lg:px-16 lg:py-28">
            <Skeleton className="h-3 w-16" />
            <Skeleton className="mt-3 h-12 w-2/3 sm:h-14 lg:h-16" />
            <Skeleton className="mt-2 h-4 w-1/2" />
            <Skeleton className="mt-6 h-12 w-36" />
          </div>
        </div>
      </section>

      <section className="section-py bg-background">
        <div className="container-layout">
          <div className="mb-12 border-l-8 border-foreground pl-6">
            <div className="flex items-center gap-3">
              <Skeleton className="h-5 w-5" />
              <Skeleton className="h-3 w-24" />
            </div>
            <Skeleton className="mt-3 h-14 w-72 md:h-16" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="space-y-4">
                <Skeleton className="aspect-[3/4] w-full rounded-2xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4" />
                  <Skeleton className="h-5 w-1/3" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-py bg-muted/20">
        <div className="container-layout">
          <div className="mb-10 flex items-center justify-between">
            <div className="space-y-2">
              <Skeleton className="h-3 w-20" />
              <Skeleton className="h-8 w-48" />
            </div>
            <Skeleton className="h-4 w-20" />
          </div>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <Skeleton key={i} className="aspect-[4/5] w-full rounded-lg" />
            ))}
          </div>
        </div>
      </section>

      <section className="section-py border-t border-border/30">
        <div className="container-layout">
          <div className="mx-auto max-w-2xl text-center space-y-4">
            <Skeleton className="mx-auto h-10 w-10" />
            <Skeleton className="mx-auto h-6 w-48" />
            <Skeleton className="mx-auto h-4 w-96" />
            <Skeleton className="mx-auto h-4 w-80" />
            <div className="flex justify-center gap-1 pt-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Skeleton key={i} className="h-4 w-4" />
              ))}
            </div>
            <div className="flex items-center justify-center gap-4 pt-4">
              <Skeleton className="h-12 w-12 rounded-full" />
              <div className="text-left space-y-1">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-3 w-20" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
