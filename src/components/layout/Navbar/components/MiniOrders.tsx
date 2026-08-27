import { Link } from "react-router-dom";
import { Package, ArrowRight, Loader2 } from "lucide-react";
import { buildLocalizedPath } from "@/lib/localized-path";
import { Button } from "@/components/ui/button";
import CardImage from "@/components/shared/CardImage";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useNavbar } from "../hooks/useNavbar";
import { NavbarIconButton } from "./NavbarIconButton";
import { formatBadgeCount } from "../utils";

type MiniOrdersProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function MiniOrders({ isOpen, onToggle, onClose }: MiniOrdersProps) {
  const { t, lang, isLoggedIn, ordersCount, ordersData } = useNavbar();

  const ordersHref = buildLocalizedPath("/orders", lang);
  const orders = ordersData ?? [];
  const isLoadingOrders = isLoggedIn && !ordersData;

  return (
    <div className="relative">
      {isLoggedIn ? (
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("nav.aria.orders")}
          onClick={onToggle}
          className="relative rounded-none text-muted-foreground hover:bg-muted/30 hover:text-foreground"
        >
          <Package className="h-5 w-5" />
          {ordersCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
              {formatBadgeCount(ordersCount)}
            </span>
          )}
        </Button>
      ) : (
        <NavbarIconButton
          href={ordersHref}
          ariaLabel={t("nav.aria.orders")}
          icon={<Package className="h-5 w-5" />}
          count={ordersCount}
        />
      )}

      <Sheet
        open={isOpen}
        onOpenChange={(open) => {
          if (!open) onClose();
        }}
      >
        <SheetContent
          side="right"
          overlayClassName="bg-black/10 supports-backdrop-filter:backdrop-blur-xs"
          className="flex w-full max-w-md flex-col gap-0 p-0"
        >
          <div className="border-b border-border/40 px-6 py-5 pr-12">
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
              {t("nav.miniOrders.title")}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
              {t("nav.miniOrders.count", { count: ordersCount })}
            </p>
          </div>

          {isLoadingOrders ? (
            <div className="flex flex-1 items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground/40" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                {t("nav.miniOrders.loading")}
              </span>
            </div>
          ) : orders.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-muted/40">
                <Package className="h-6 w-6 text-muted-foreground/50" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                {t("nav.miniOrders.empty")}
              </p>
              <Link
                to={buildLocalizedPath("/products", lang)}
                onClick={onClose}
                className="block"
              >
                <Button size="sm" className="rounded-none">
                  {t("nav.miniOrders.emptyAction")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-border/40 overflow-y-auto">
                {orders.map((order) => {
                  const date = new Date(order.createdAt).toLocaleDateString(
                    lang === "ar" ? "ar-EG" : "en-US",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    },
                  );
                  const firstItem = order.cartItems[0];
                  return (
                    <li key={order._id}>
                      <Link
                        to={ordersHref}
                        onClick={onClose}
                        className="flex items-center gap-4 px-6 py-5 transition-colors hover:bg-muted/30"
                      >
                        <div className="h-14 w-14 shrink-0 overflow-hidden bg-muted/40">
                          {firstItem && (
                            <CardImage
                              src={firstItem.product.imageCover}
                              alt={firstItem.product.title}
                              width={140}
                              height={140}
                              className="h-full w-full"
                            />
                          )}
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                            {t("orders.card.order")}:{" "}
                            {order._id.slice(-8).toUpperCase()}
                          </p>
                          <p className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                            {date}
                          </p>
                          <p className="mt-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground/50">
                            {order.cartItems.length}{" "}
                            {t("nav.miniOrders.items", {
                              count: order.cartItems.length,
                            })}
                          </p>
                        </div>
                        <p className="shrink-0 font-black tabular-nums text-foreground">
                          {order.totalOrderPrice.toLocaleString()} EGP
                        </p>
                      </Link>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-border/40 px-6 py-5">
                <Link to={ordersHref} onClick={onClose} className="block">
                  <Button variant="outline" size="sm" className="w-full rounded-none">
                    {t("nav.miniOrders.viewAll")}
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}