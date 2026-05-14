import { Card } from "@/components/ui/card";

export default function WishlistLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-8 h-8 w-56 animate-pulse rounded bg-muted" />
      <div className="space-y-4">
        {Array.from({ length: 3 }).map((_, i) => (
          <Card key={i} className="flex-row gap-4 p-4">
            <div className="h-24 w-24 shrink-0 animate-pulse rounded-lg bg-muted md:h-28 md:w-28" />
            <div className="flex flex-1 flex-col justify-between gap-3">
              <div className="h-4 w-3/4 animate-pulse rounded bg-muted" />
              <div className="h-3 w-1/4 animate-pulse rounded bg-muted" />
              <div className="flex items-center justify-end">
                <div className="h-7 w-24 animate-pulse rounded-lg bg-muted" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
