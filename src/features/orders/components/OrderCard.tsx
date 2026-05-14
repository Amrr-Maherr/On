import { Package, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import type { Order } from "@/features/orders/types/orders";

interface OrderCardProps {
  order: Order;
}

export default function OrderCard({ order }: OrderCardProps) {
  const date = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <Card data-size="sm" className="p-4">
      <div className="mb-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Package className="h-4 w-4 text-muted-foreground" />
          <span className="text-xs text-muted-foreground">
            {order._id.slice(-8).toUpperCase()}
          </span>
        </div>
        <span className="text-xs text-muted-foreground">{date}</span>
      </div>

      <div className="space-y-3">
        {order.cartItems.slice(0, 3).map((item) => (
          <div key={item._id} className="flex items-center gap-3">
            <div className="h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-muted">
              <img
                src={item.product.imageCover}
                alt={item.product.title}
                className="h-full w-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">
                {item.product.title}
              </p>
              <p className="text-xs text-muted-foreground">
                Qty: {item?.count} x {item?.product?.price?.toLocaleString()}{" "}
                EGP
              </p>
            </div>
            <p className="text-sm font-medium tabular-nums">
              {item.price.toLocaleString()} EGP
            </p>
          </div>
        ))}
        {order.cartItems.length > 3 && (
          <p className="text-xs text-muted-foreground">
            +{order.cartItems.length - 3} more items
          </p>
        )}
      </div>

      <hr className="my-3 border-foreground/10" />

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground">
            <CreditCard className="h-3.5 w-3.5" />
            {order.paymentMethodType === "cash" ? "Cash" : "Card"}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-xs",
              order.isPaid ? "text-green-600" : "text-muted-foreground",
            )}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            {order.isPaid ? "Paid" : "Unpaid"}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-xs",
              order.isDelivered ? "text-green-600" : "text-muted-foreground",
            )}
          >
            <Truck className="h-3.5 w-3.5" />
            {order.isDelivered ? "Delivered" : "Processing"}
          </span>
        </div>
        <p className="text-sm font-bold tabular-nums">
          {order.totalOrderPrice.toLocaleString()} EGP
        </p>
      </div>
    </Card>
  );
}
