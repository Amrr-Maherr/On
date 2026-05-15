import { memo } from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const CartEmpty = memo(function CartEmpty() {
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-6 py-24 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted/30">
        <ShoppingCart className="h-7 w-7 text-muted-foreground/40" />
      </div>
      <div>
        <h3 className="text-lg font-medium text-foreground">Your cart is empty</h3>
        <p className="mt-1.5 text-sm text-muted-foreground/70">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
      </div>
      <Link to="/products">
        <Button className="rounded-full px-6">
          Continue Shopping
        </Button>
      </Link>
    </div>
  );
});

export default CartEmpty;
