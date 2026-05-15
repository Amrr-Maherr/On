import { memo } from "react";
import { Card } from "@/components/ui/card";

const CategoriesLoader = memo(function CategoriesLoader() {
  return (
    <Card className="animate-pulse">
      <div className="h-60 w-full bg-muted" />
    </Card>
  );
});

export default CategoriesLoader;
