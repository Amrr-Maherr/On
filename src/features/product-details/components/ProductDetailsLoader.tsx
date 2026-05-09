import { Card } from "@/components/ui/card";

export default function ProductDetailsLoader() {
  return (
    <div className="container-layout py-8">
      <div className="grid gap-8 md:grid-cols-2">
        <Card className="animate-pulse">
          <div className="aspect-square w-full bg-muted" />
          <div className="mt-4 flex gap-2 px-4 pb-4">
            <div className="h-20 w-20 rounded-lg bg-muted" />
            <div className="h-20 w-20 rounded-lg bg-muted" />
            <div className="h-20 w-20 rounded-lg bg-muted" />
          </div>
        </Card>
        <div className="space-y-4">
          <div className="h-8 w-3/4 rounded bg-muted" />
          <div className="h-4 w-1/4 rounded bg-muted" />
          <div className="h-6 w-1/3 rounded bg-muted" />
          <div className="h-20 w-full rounded bg-muted" />
          <div className="h-12 w-48 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
