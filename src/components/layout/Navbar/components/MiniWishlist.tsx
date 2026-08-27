import { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { Heart, Trash2, ArrowRight, Loader2 } from "lucide-react";
import { buildLocalizedPath } from "@/lib/localized-path";
import { Button } from "@/components/ui/button";
import CardImage from "@/components/shared/CardImage";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useNavbar } from "../hooks/useNavbar";
import { NavbarIconButton } from "./NavbarIconButton";
import { useRemoveWishlistItem } from "@/features/wishlist/hooks/useRemoveWishlistItem";
import { formatBadgeCount } from "../utils";

type MiniWishlistProps = {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
};

export function MiniWishlist({ isOpen, onToggle, onClose }: MiniWishlistProps) {
  const { t, lang, isLoggedIn, favCount, wishlistData } = useNavbar();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveWishlistItem();
  const [pendingId, setPendingId] = useState<string | null>(null);

  const handleRemove = useCallback(
    (productId: string) => {
      setPendingId(productId);
      removeItem(productId, {
        onSettled: () => setPendingId(null),
      });
    },
    [removeItem],
  );

  const wishlistHref = buildLocalizedPath("/wishlist", lang);
  const productHref = (title: string, id: string) =>
    buildLocalizedPath(`/products/${title}/${id}`, lang);
  const products = wishlistData?.data ?? [];
  const isLoadingWishlist = isLoggedIn && !wishlistData;

  return (
    <div className="relative">
      {isLoggedIn ? (
        <Button
          variant="ghost"
          size="icon"
          aria-label={t("nav.aria.wishlist")}
          onClick={onToggle}
          className="relative rounded-none text-muted-foreground hover:bg-muted/30 hover:text-foreground"
        >
          <Heart className="h-5 w-5" />
          {favCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
              {formatBadgeCount(favCount)}
            </span>
          )}
        </Button>
      ) : (
        <NavbarIconButton
          href={wishlistHref}
          ariaLabel={t("nav.aria.wishlist")}
          icon={<Heart className="h-5 w-5" />}
          count={favCount}
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
              {t("nav.miniWishlist.title")}
            </p>
            <p className="mt-1 text-xs font-bold uppercase tracking-widest text-muted-foreground/40">
              {t("nav.miniWishlist.count", { count: favCount })}
            </p>
          </div>

          {isLoadingWishlist ? (
            <div className="flex flex-1 items-center justify-center gap-2">
              <Loader2 className="h-5 w-5 animate-spin text-muted-foreground/40" />
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                {t("nav.miniWishlist.loading")}
              </span>
            </div>
          ) : products.length === 0 ? (
            <div className="flex flex-1 flex-col items-center justify-center gap-4 px-6 text-center">
              <div className="flex h-14 w-14 items-center justify-center rounded-none bg-muted/40">
                <Heart className="h-6 w-6 text-muted-foreground/50" />
              </div>
              <p className="text-xs font-black uppercase tracking-widest text-muted-foreground/60">
                {t("nav.miniWishlist.empty")}
              </p>
              <Link
                to={buildLocalizedPath("/products", lang)}
                onClick={onClose}
                className="block"
              >
                <Button size="sm" className="rounded-none">
                  {t("nav.miniWishlist.emptyAction")}
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <ul className="flex-1 divide-y divide-border/40 overflow-y-auto">
                {products.map((product) => {
                  const displayPrice = product.priceAfterDiscount ?? product.price;
                  const hasDiscount = !!product.priceAfterDiscount;
                  return (
                    <li key={product._id} className="flex gap-4 px-6 py-5">
                      <Link
                        to={productHref(product.title, product._id)}
                        onClick={onClose}
                        className="shrink-0"
                      >
                        <div className="h-20 w-20 overflow-hidden bg-muted/30">
                          <CardImage
                            src={product.imageCover}
                            alt={product.title}
                            width={160}
                            height={160}
                            className="h-full w-full"
                          />
                        </div>
                      </Link>

                      <div className="flex min-w-0 flex-1 flex-col justify-between py-0.5">
                        <div className="flex items-start justify-between gap-3">
                          <Link
                            to={productHref(product.title, product._id)}
                            onClick={onClose}
                            className="min-w-0"
                          >
                            <p className="truncate text-sm font-black uppercase tracking-wide text-foreground">
                              {product.title}
                            </p>
                          </Link>
                          <button
                            onClick={() => handleRemove(product._id)}
                            disabled={isRemoving && pendingId === product._id}
                            aria-label={t("wishlist.item.remove")}
                            className="shrink-0 rounded-none p-1 text-muted-foreground/50 transition-colors hover:text-destructive disabled:opacity-40"
                          >
                            {isRemoving && pendingId === product._id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4" />
                            )}
                          </button>
                        </div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-base font-black tabular-nums text-foreground">
                            {displayPrice.toLocaleString()} EGP
                          </span>
                          {hasDiscount && (
                            <span className="text-[10px] font-bold tabular-nums text-muted-foreground/40 line-through">
                              {product.price.toLocaleString()} EGP
                            </span>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>

              <div className="border-t border-border/40 px-6 py-5">
                <Link to={wishlistHref} onClick={onClose} className="block">
                  <Button variant="outline" size="sm" className="w-full rounded-none">
                    {t("nav.miniWishlist.viewAll")}
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