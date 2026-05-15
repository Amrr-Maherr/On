import { memo } from "react";
import { ShoppingBag } from "lucide-react";

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
    <div className="sticky top-24 rounded-2xl border border-border/50 bg-card">
      <div className="px-6 pt-6">
        <h3 className="text-base font-semibold">Order Summary</h3>
      </div>
      <div className="space-y-3 px-6 pt-4">
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
      </div>
      <div className="px-6 pb-6 pt-5">
        <button
          onClick={onCheckout}
          className="flex w-full items-center justify-center gap-2 rounded-xl bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          <ShoppingBag className="h-4 w-4" />
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
});

export default CartSummary;
