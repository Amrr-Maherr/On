import { memo, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  Heart,
  Package,
  ShoppingCart,
  UserCircle,
  LogIn,
  LogOut,
  Search,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useOrders } from "@/features/orders/hooks/useOrders";
import { useTheme } from "@/shared/providers/theme-provider";

interface MobileNavSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNavSheet = memo(function MobileNavSheet({ open, onOpenChange }: MobileNavSheetProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = location.pathname.match(/^\/([a-z]{2})(\/|$)/)?.[1] || "en";
  const { data: cartData } = useCart();
  const { data: wishlistData } = useWishlist();
  const { data: ordersData } = useOrders();
  const { theme, setTheme } = useTheme();
  const cartCount = cartData?.numOfCartItems ?? 0;
  const favCount = wishlistData?.count ?? 0;
  const ordersCount = ordersData?.length ?? 0;
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    onOpenChange(false);
    navigate(`/${lang}/login`);
  }, [navigate, lang, onOpenChange]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/${lang}/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      onOpenChange(false);
    }
  }, [navigate, lang, searchQuery, onOpenChange]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex w-full max-w-sm flex-col p-0">
        <div className="bg-neutral-950 px-6 py-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-white">{t("nav.mobile.menu")}</span>
            <SheetClose asChild>
              <button
                type="button"
                className="flex h-12 w-12 items-center justify-center rounded-none bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label={t("nav.aria.closeMenu")}
              >
                <span className="text-3xl leading-none">&times;</span>
              </button>
            </SheetClose>
          </div>
          <div className="relative mt-10">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            <Input
              placeholder={t("nav.mobile.searchPlaceholder")}
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="h-14 w-full border-2 border-white/10 bg-white/5 pl-11 text-sm font-bold text-white placeholder:text-white/30 focus:border-white/40 focus:ring-0"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="mb-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              {t("nav.mobile.shop")}
            </p>
            <div className="space-y-1">
              {[
                { key: "nav.links.men", href: `/${lang}/categories/men` },
                { key: "nav.links.women", href: `/${lang}/categories/women` },
                { key: "nav.links.kids", href: `/${lang}/categories/kids` },
                { key: "nav.links.sale", href: `/${lang}/products?onSale=true` },
                { key: "nav.links.brands", href: `/${lang}/brands` },
              ].map((link) => (
                <Link
                  key={link.key}
                  to={link.href}
                  onClick={() => onOpenChange(false)}
                  className="flex items-center justify-between rounded-none px-4 py-4 transition-all hover:bg-muted/50"
                >
                  <div className="flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                      <UserCircle className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-foreground">
                      {t(link.key)}
                    </span>
                  </div>
                  <ChevronRight className="h-4 w-4 text-muted-foreground/30" />
                </Link>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              {t("nav.mobile.account")}
            </p>
            <div className="space-y-1">
              <Link
                to={`/${lang}/fave`}
                onClick={() => onOpenChange(false)}
                className="flex items-center justify-between rounded-none px-4 py-4 transition-all hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                    <Heart className="h-5 w-5" />
                    {favCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
                        {favCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.wishlist")}</span>
                </div>
              </Link>
              <Link
                to={`/${lang}/orders`}
                onClick={() => onOpenChange(false)}
                className="flex items-center justify-between rounded-none px-4 py-4 transition-all hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                    <Package className="h-5 w-5" />
                    {ordersCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
                        {ordersCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.orders")}</span>
                </div>
              </Link>
              <Link
                to={`/${lang}/cart`}
                onClick={() => onOpenChange(false)}
                className="flex items-center justify-between rounded-none px-4 py-4 transition-all hover:bg-muted/50"
              >
                <div className="flex items-center gap-4">
                  <div className="relative flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                    <ShoppingCart className="h-5 w-5" />
                    {cartCount > 0 && (
                      <span className="absolute -right-1 -top-1 flex h-4 min-w-[16px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
                        {cartCount}
                      </span>
                    )}
                  </div>
                  <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.cart")}</span>
                </div>
              </Link>
            </div>
          </div>

          <div className="mb-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              {t("nav.mobile.account")}
            </p>
            <div className="space-y-1">
              {isLoggedIn ? (
                <>
                  <Link
                    to={`/${lang}/profile`}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-4 rounded-none px-4 py-4 transition-all hover:bg-muted/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                      <UserCircle className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.profile")}</span>
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-4 rounded-none px-4 py-4 text-destructive transition-all hover:bg-destructive/5"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-destructive/10">
                      <LogOut className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest">{t("nav.mobile.signOut")}</span>
                  </button>
                </>
              ) : (
                <>
                  <Link
                    to={`/${lang}/login`}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-4 rounded-none px-4 py-4 transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                        <LogIn className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.signIn")}</span>
                    </div>
                  </Link>
                  <Link
                    to={`/${lang}/register`}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-4 rounded-none px-4 py-4 transition-all hover:bg-muted/50"
                  >
                    <div className="flex items-center gap-4">
                      <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                        <UserCircle className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.joinUs")}</span>
                    </div>
                  </Link>
                  <Link
                    to={`/${lang}/register`}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-4 rounded-none px-4 py-4 transition-all hover:bg-muted/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                      <UserCircle className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.joinUs")}</span>
                  </Link>
                </>
              )}
            </div>
          </div>

          <div className="mb-8">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              {t("nav.mobile.preferences")}
            </p>
            <button
              onClick={toggleTheme}
              className="flex w-full items-center justify-between rounded-none px-4 py-4 transition-all hover:bg-muted/50"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30 text-foreground">
                  {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                </div>
                <span className="text-sm font-black uppercase tracking-widest text-foreground">
                  {theme === "dark" ? t("nav.mobile.lightMode") : t("nav.mobile.darkMode")}
                </span>
              </div>
            </button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
});

export default MobileNavSheet;
