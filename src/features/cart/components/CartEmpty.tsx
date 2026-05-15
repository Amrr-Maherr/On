import { memo } from "react";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CartEmpty = memo(function CartEmpty() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted/30">
        <ShoppingCart className="h-9 w-9 text-muted-foreground/40" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground">Your cart is empty</h3>
        <p className="mt-2 text-sm text-muted-foreground/70 max-w-xs">
          Looks like you haven&apos;t added anything yet. Explore our collection and find your next gear.
        </p>
      </div>
      <Link
        to="/products"
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
      >
        Shop Now
        <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
});

export default CartEmpty;
