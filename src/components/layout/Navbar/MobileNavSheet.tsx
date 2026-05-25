import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import {
  Heart,
  Package,
  ShoppingCart,
  UserCircle,
  LogIn,
  LogOut,
  Search,
  X,
  Sun,
  Moon,
  ChevronRight,
} from "lucide-react";
import { Sheet, SheetContent, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/shared/providers/theme-provider";
import { getNavLinks } from "./constants/navbar-links";
import { useNavbar } from "./hooks/useNavbar";
import { useSearchDropdown } from "./hooks/useSearchDropdown";

interface MobileNavSheetProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const MobileNavSheet = memo(function MobileNavSheet({ open, onOpenChange }: MobileNavSheetProps) {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  const { theme, setTheme } = useTheme();
  const { cartCount, favCount, ordersCount, isLoggedIn, handleLogout, handleSearch } = useNavbar();
  const {
    query,
    showDropdown,
    filteredProducts,
    isLoading,
    handleInputChange,
    clearSearch,
  } = useSearchDropdown();

  const onLogout = useCallback(() => {
    handleLogout(() => onOpenChange(false));
  }, [handleLogout, onOpenChange]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const onSearchKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter") {
        handleSearch(query, () => onOpenChange(false));
        clearSearch();
      }
    },
    [handleSearch, query, onOpenChange, clearSearch],
  );

  const onProductClick = useCallback(() => {
    clearSearch();
    onOpenChange(false);
  }, [clearSearch, onOpenChange]);

  const navLinks = getNavLinks(lang);

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
              value={query}
              onChange={(e) => handleInputChange(e.target.value)}
              onKeyDown={onSearchKeyDown}
              className="h-14 w-full border-2 border-white/10 bg-white/5 pl-11 text-sm font-bold text-white placeholder:text-white/30 focus:border-white/40 focus:ring-0"
            />

            {query && (
              <button
                type="button"
                onClick={clearSearch}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 transition-colors hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            )}

            {showDropdown && (
              <div className="absolute left-0 top-full z-50 mt-2 max-h-[320px] w-full overflow-y-auto border border-white/10 bg-neutral-900 shadow-2xl">
                {isLoading ? (
                  <div className="flex items-center justify-center py-6">
                    <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  </div>
                ) : filteredProducts.length === 0 ? (
                  <div className="flex flex-col items-center justify-center gap-2 py-6 text-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10">
                      <Search className="h-4 w-4 text-white/50" />
                    </div>
                    <p className="text-sm font-semibold text-white/70">
                      No products found
                    </p>
                    <span className="text-xs text-white/40">
                      Try another search
                    </span>
                  </div>
                ) : (
                  filteredProducts.map((product) => (
                    <Link
                      to={buildLocalizedPath(
                        `/products/${product.slug}/${product.id}`,
                        lang,
                      )}
                      key={product.id}
                      onClick={onProductClick}
                      className="flex w-full items-center gap-3 border-b border-white/10 p-3 text-left transition-colors hover:bg-white/10"
                    >
                      <img
                        src={product.imageCover}
                        alt={product.title}
                        className="h-14 w-14 shrink-0 object-cover"
                      />
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-sm font-bold text-white">
                          {product.title}
                        </p>
                        <p className="mt-1 text-xs text-white/60">
                          {product.price} EGP
                        </p>
                      </div>
                    </Link>
                  ))
                )}
              </div>
            )}
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="mb-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              {t("nav.mobile.shop")}
            </p>
            <div className="space-y-1">
              {navLinks.map((link) => (
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
                to={buildLocalizedPath("/fave", lang)}
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
                to={buildLocalizedPath("/orders", lang)}
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
                to={buildLocalizedPath("/cart", lang)}
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
                    to={buildLocalizedPath("/profile", lang)}
                    onClick={() => onOpenChange(false)}
                    className="flex items-center gap-4 rounded-none px-4 py-4 transition-all hover:bg-muted/50"
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-none bg-muted/30">
                      <UserCircle className="h-5 w-5" />
                    </div>
                    <span className="text-sm font-black uppercase tracking-widest text-foreground">{t("nav.mobile.profile")}</span>
                  </Link>
                  <button
                    onClick={onLogout}
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
                    to={buildLocalizedPath("/login", lang)}
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
                    to={buildLocalizedPath("/register", lang)}
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
