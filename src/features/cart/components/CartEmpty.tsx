import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function CartEmpty() {
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <ShoppingCart className="h-16 w-16 text-muted-foreground/50" />
      <div>
        <h3 className="text-lg font-semibold">Your cart is empty</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
      </div>
      <Link to="/products">
        <Button variant="default" className="gap-2">
          <ShoppingCart className="h-4 w-4" />
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
}
