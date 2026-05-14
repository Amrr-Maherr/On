import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function ProductsLoader() {
  return (
    <Card className="animate-pulse">
      <div className="h-60 w-full bg-muted" />
      <CardHeader>
        <div className="h-5 w-3/4 rounded bg-muted" />
        <div className="mt-2 h-6 w-1/3 rounded bg-muted" />
      </CardHeader>
      <CardContent>
        <div className="h-4 w-1/2 rounded bg-muted" />
      </CardContent>
    </Card>
  );
}

