import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Package, CreditCard, Truck, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Order } from "@/features/orders/types/orders";
import CardImage from "@/components/shared/CardImage";

type OrderCardProps = {
  order: Order;
};

const OrderCard = memo(function OrderCard({ order }: OrderCardProps) {
  const { t } = useTranslation();
  const date = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <div className="rounded-none border-2 border-border/40 bg-card p-6 transition-all duration-300 hover:border-foreground/20">
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Package className="h-4 w-4 text-muted-foreground/50" />
          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
            {t("orders.card.order")}: {order._id.slice(-8).toUpperCase()}
          </span>
        </div>
        <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">{date}</span>
      </div>

      <div className="space-y-4">
        {order.cartItems.slice(0, 3).map((item) => (
          <div key={item._id} className="flex items-center gap-4">
            <div className="h-16 w-16 shrink-0 overflow-hidden rounded-none bg-muted/40 border border-border/20">
              <CardImage
                src={item.product.imageCover}
                alt={item.product.title}
                width={400}
                height={400}
                className="h-full w-full"
              />
            </div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm text-foreground/90">
                {item.product.title}
              </p>
              <p className="text-xs text-muted-foreground/60">
                {t("orders.card.qty")}: {item?.count} x {item?.product?.price?.toLocaleString()} EGP
              </p>
            </div>
            <p className="text-sm font-medium tabular-nums text-foreground/90">
              {item.price.toLocaleString()} EGP
            </p>
          </div>
        ))}
        {order.cartItems.length > 3 && (
          <p className="text-xs text-muted-foreground/50">
            {t("orders.card.moreItems", { count: order.cartItems.length - 3 })}
          </p>
        )}
      </div>

      <hr className="my-4 border-border/40" />

      <div className="flex items-center justify-between" data-tour="order-status">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-xs text-muted-foreground/60">
            <CreditCard className="h-3.5 w-3.5" />
            {order.paymentMethodType === "cash" ? t("orders.card.cash") : t("orders.card.card")}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-xs",
              order.isPaid ? "text-green-600/80" : "text-muted-foreground/60",
            )}
          >
            <CheckCircle2 className="h-3.5 w-3.5" />
            {order.isPaid ? t("orders.card.paid") : t("orders.card.unpaid")}
          </span>
          <span
            className={cn(
              "flex items-center gap-1 text-xs",
              order.isDelivered ? "text-green-600/80" : "text-muted-foreground/60",
            )}
          >
            <Truck className="h-3.5 w-3.5" />
            {order.isDelivered ? t("orders.card.delivered") : t("orders.card.processing")}
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