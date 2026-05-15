import { memo } from "react";
import { ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

interface CartSummaryProps {
  totalCartPrice: number;
  numOfCartItems: number;
  onCheckout?: () => void;
}

const CartSummary = memo(function CartSummary({
  totalCartPrice,
  numOfCartItems,
  onCheckout,
}: CartSummaryProps) {
  return (
    <Card className="sticky top-24">
      <div className="px-4 pt-4">
        <h3 className="text-base font-semibold">Order Summary</h3>
      </div>
      <CardContent className="space-y-3 pt-3">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Items</span>
          <span className="font-medium tabular-nums">{numOfCartItems}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-medium tabular-nums">
            {totalCartPrice.toLocaleString()} EGP
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="font-medium">Calculated at checkout</span>
        </div>
        <hr className="border-foreground/10" />
        <div className="flex items-center justify-between">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-lg font-bold tabular-nums">
            {totalCartPrice.toLocaleString()} EGP
          </span>
        </div>
      </CardContent>
      <CardFooter>
        <Button
          className="w-full gap-2"
          size="lg"
          onClick={onCheckout}
        >
          <ShoppingBag className="h-4 w-4" />
          Proceed to Checkout
        </Button>
      </CardFooter>
    </Card>
  );
});

export default CartSummary;
