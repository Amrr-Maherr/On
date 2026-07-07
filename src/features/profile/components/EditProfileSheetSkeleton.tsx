import { Skeleton } from "@/components/ui/skeleton"

export function EditProfileSheetSkeleton() {
  return (
    <div className="space-y-6 p-6">
      <div className="space-y-1">
        <Skeleton className="h-6 w-32" />
        <Skeleton className="h-4 w-56" />
      </div>
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="space-y-2">
          <Skeleton className="h-3.5 w-20" />
          <Skeleton className="h-14 w-full rounded-none" />
        </div>
      ))}
      <div className="flex gap-3 pt-4">
        <Skeleton className="h-12 flex-1 rounded-lg" />
        <Skeleton className="h-12 flex-1 rounded-lg" />
      </div>
    </div>
  )
}
