import { memo } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";

const ProductsLoader = memo(function ProductsLoader() {
  return (
    <div className="container-layout py-8">
      <div className="mb-8 h-8 w-48 animate-pulse rounded bg-muted" />
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {Array.from({ length: 8 }).map((_, i) => (
          <Card key={i} className="animate-pulse">
            <div className="h-60 w-full bg-muted" />
            <CardHeader>
              <div className="h-5 w-3/4 rounded bg-muted" />
              <div className="mt-2 h-6 w-1/3 rounded bg-muted" />
            </CardHeader>
            <CardContent>
              <div className="h-4 w-1/2 rounded bg-muted" />
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
});

export default ProductsLoader;
