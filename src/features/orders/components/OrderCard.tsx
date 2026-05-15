import { memo } from "react";
import { Package, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Order } from "@/features/orders/types/orders";

interface OrderCardProps {
  order: Order;
}

const OrderCard = memo(function OrderCard({ order }: OrderCardProps) {
  const date = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-2xl border border-border/50 bg-card p-5">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Package className="h-4 w-4 text-muted-foreground/50" />
          <span className="text-xs text-muted-foreground/60">
            {order._id.slice(-8).toUpperCase()}
          </span>
        </div>
        <span className="text-xs text-muted-foreground/60">{date}</span>
      </div>

      <div className="space-y-3">
        {order.cartItems.slice(0, 3).map((item) => (
          <div key={item._id} className="flex items-center gap-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-xl bg-muted/40">
              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-foreground/90">
                {item.product.title}
              </p>
              <p className="text-xs text-muted-foreground/60">
                Qty: {item?.count} x {item?.product?.price?.toLocaleString()} EGP
              </p>
            </div>
            <p className="text-sm font-medium tabular-nums text-foreground/90">
              {item.price.toLocaleString()} EGP
            </p>
          </div>
        ))}
        {order.cartItems.length > 3 && (
          <p className="text-xs text-muted-foreground/50">
            +{order.cartItems.length - 3} more items
          </p>
        )}
      </div>

      <hr className="my-4 border-border/40" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
            <CreditCard className="h-3.5 w-3.5" />
            {order.paymentMethodType === "cash" ? "Cash" : "Card"}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-xs",
              order.isPaid ? "text-green-600/80" : "text-muted-foreground/60",
            )}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            {order.isPaid ? "Paid" : "Unpaid"}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-xs",
              order.isDelivered ? "text-green-600/80" : "text-muted-foreground/60",
            )}
          >
            <Truck className="h-3.5 w-3.5" />
            {order.isDelivered ? "Delivered" : "Processing"}
          </span>
        </div>
        <p className="text-sm font-medium tabular-nums">
          {order.totalOrderPrice.toLocaleString()} EGP
        </p>
      </div>
    </div>
  );
});

export default OrderCard;
