import { Card } from "@/components/ui/card";

export default function CategoryDetailsLoader() {
  return (
    <div className="container-layout py-8">
      <div className="grid gap-10 md:grid-cols-2">
        <Card className="animate-pulse">
          <div className="aspect-square w-full bg-muted" />
        </Card>
        <div className="flex flex-col justify-center gap-6">
          <div className="h-10 w-2/3 rounded bg-muted" />
          <div className="h-4 w-1/3 rounded bg-muted" />
          <div className="h-4 w-1/4 rounded bg-muted" />
        </div>
      </div>
    </div>
  );
}
