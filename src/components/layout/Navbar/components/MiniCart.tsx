import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Trash2, ArrowRight, Loader2 } from "lucide-react";
import { buildLocalizedPath } from "@/lib/localized-path";
import { Button } from "@/components/ui/button";
import CardImage from "@/components/shared/CardImage";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useNavbar } from "../hooks/useNavbar";
import { NavbarIconButton } from "./NavbarIconButton";
import { useRemoveCartItem } from "@/features/cart/hooks/useRemoveCartItem";
import { formatBadgeCount } from "../utils";

type MiniCartProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function MiniCart({ isOpen, onToggle, onClose }: MiniCartProps) {
  const { t, lang, isLoggedIn, cartCount, cartData } = useNavbar();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveCartItem();
  const [pendingItemId, setPendingItemId] = useState<string | null>(null);

  const handleRemove = useCallback(
    (itemId: string) => {
      setPendingItemId(itemId);
      removeItem(itemId, {
        onSettled: () => setPendingItemId(null),
      });
    },
    [removeItem],
  );

  const cartHref = buildLocalizedPath("/cart", lang);
  const productHref = (title: string, id: string) =>
    buildLocalizedPath(`/products/${title}/${id}`, lang);
  const products = cartData?.data?.products ?? [];
  const totalCartPrice = cartData?.data?.totalCartPrice ?? 0;
  const isLoadingCart = isLoggedIn && !cartData;

  return (
    <div className="relative">
      {isLoggedIn ? (
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("nav.aria.cart")}
          onClick={onToggle}
          className="relative rounded-none text-muted-foreground hover:bg-muted/30 hover:text-foreground"
        >
          <ShoppingCart className="h-5 w-5" />
          {cartCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
              {formatBadgeCount(cartCount)}
            </span>
          )}
        </Button>
      ) : (
        <NavbarIconButton
          href={cartHref}
          ariaLabel={t("nav.aria.cart")}
          icon={<ShoppingCart className="h-5 w-5" />}
          count={cartCount}
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
              {t("nav.miniCart.title")}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
              {t("nav.miniCart.count", { count: cartCount })}
            </p>
          </div>

          {isLoadingCart ? (
            <div className="flex flex-1 items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground/40" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                {t("nav.miniCart.loading")}
              </span>
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-muted/40">
                <ShoppingCart className="h-6 w-6 text-muted-foreground/50" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                {t("nav.miniCart.empty")}
              </p>
              <Link to={buildLocalizedPath("/products", lang)} onClick={onClose} className="block">
                <Button size="sm" className="rounded-none">
                  {t("nav.miniCart.emptyAction")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-border/40 overflow-y-auto">
                {products.map((item) => (
                  <li key={item._id} className="flex gap-4 px-6 py-5">
                    <Link
                      to={productHref(item.product.title, item.product.id)}
                      onClick={onClose}
                      className="shrink-0"
                    >
                      <div className="h-20 w-20 overflow-hidden bg-muted/30">
                        <CardImage
                          src={item.product.imageCover}
                          alt={item.product.title}
                          width={160}
                          height={160}
                          className="h-full w-full"
                        />
                      </div>
                    </Link>

                    <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                      <div className="flex items-start justify-between gap-3">
                        <Link
                          to={productHref(item.product.title, item.product.id)}
                          onClick={onClose}
                          className="min-w-0"
                        >
                          <p className="truncate text-sm font-black uppercase tracking-wide text-foreground">
                            {item.product.title}
                          </p>
                          <p className="mt-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground/50">
                            {item.count} × {item.product.price?.toLocaleString()}{" "}
                            EGP
                          </p>
                        </Link>
                        <button
                          onClick={() => handleRemove(item.product.id)}
                          disabled={
                            isRemoving && pendingItemId === item.product.id
                          }
                          aria-label={t("nav.miniCart.remove")}
                          className="shrink-0 rounded-none p-1 text-muted-foreground/50 transition-colors hover:text-destructive disabled:opacity-40"
                        >
                          {isRemoving && pendingItemId === item.product.id ? (
                            <Loader2 className="h-4 w-4 animate-spin" />
                          ) : (
                            <Trash2 className="h-4 w-4" />
                          )}
                        </button>
                      </div>
                      <p className="text-base font-black tabular-nums text-foreground">
                        {item.price.toLocaleString()} EGP
                      </p>
                    </div>
                  </li>
                ))}
              </ul>

              <div className="border-t border-border/40 px-6 py-5">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                    {t("nav.miniCart.subtotal")}
                  </span>
                  <span className="font-black tabular-nums text-foreground">
                    {totalCartPrice.toLocaleString()} EGP
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-2">
                  <Link to={cartHref} onClick={onClose} className="block">
                    <Button variant="outline" size="sm" className="w-full rounded-none">
                      {t("nav.miniCart.viewBag")}
                    </Button>
                  </Link>
                  <Link
                    to={buildLocalizedPath("/checkout", lang)}
                    onClick={onClose}
                    className="block"
                  >
                    <Button size="sm" className="w-full rounded-none">
                      {t("cart.summary.checkout")}
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
            </>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}