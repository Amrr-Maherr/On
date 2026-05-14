import { Package } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function OrdersEmpty() {
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <Package className="h-16 w-16 text-muted-foreground/50" />
      <div>
        <h3 className="text-lg font-semibold">No orders yet</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          You haven&apos;t placed any orders yet. Start shopping to see your orders here.
        </p>
      </div>
      <Link to="/products">
        <Button variant="default" className="gap-2">
          <Package className="h-4 w-4" />
          Browse Products
        </Button>
      </Link>
    </div>
  );
}
