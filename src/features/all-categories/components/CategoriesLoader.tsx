import { Card } from "@/components/ui/card";

export default function CategoriesLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-8 h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-60 w-full bg-muted" />
          </Card>
        ))}
      </div>
    </div>
  );
}
