import { memo } from "react";
import { Card } from "@/components/ui/card";

const BrandsLoader = memo(function BrandsLoader() {
  return (
    <Card className="animate-pulse">
      <div className="h-60 w-full bg-muted" />
    </Card>
  );
});

export default BrandsLoader;
