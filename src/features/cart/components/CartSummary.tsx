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
    <div className="sticky top-24 rounded-2xl border border-border/30 bg-card">
      <div className="px-6 pt-6">
        <h3 className="text-lg font-bold tracking-tight">Order Summary</h3>
      </div>
      <div className="space-y-4 px-6 pt-5">
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Items</span>
          <span className="font-semibold tabular-nums">{numOfCartItems}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold tabular-nums">
            {totalCartPrice.toLocaleString()} EGP
          </span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-muted-foreground">Shipping</span>
          <span className="text-muted-foreground text-xs font-medium">Calculated at checkout</span>
        </div>
        <hr className="border-border/40" />
        <div className="flex items-center justify-between">
          <span className="text-base font-bold">Total</span>
          <span className="text-2xl font-black tracking-tight tabular-nums text-foreground">
            {totalCartPrice.toLocaleString()} EGP
          </span>
        </div>
      </div>
      <div className="px-6 pb-6 pt-5">
        <button
          onClick={onCheckout}
          className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
        >
          <ShoppingBag className="h-4 w-4" />
          Checkout
        </button>
      </div>
    </div>
  );
});

export default CartSummary;
