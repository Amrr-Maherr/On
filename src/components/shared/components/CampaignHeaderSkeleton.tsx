import { Skeleton } from "@/components/ui/skeleton"

export function CampaignHeaderSkeleton() {
  return (
    <section className="bg-neutral-950 py-16 md:py-20">
      <div className="container-layout relative z-10 space-y-4">
        <Skeleton className="h-4 w-24 bg-white/20" />
        <Skeleton className="h-14 w-96 bg-white/30 md:h-16" />
        <Skeleton className="h-5 w-80 bg-white/10" />
      </div>
    </section>
  )
}
