import { memo, useCallback, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Store,
  Grid3X3,
  Tag,
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

const shopLinks = [
  { label: "Products", href: "/products", icon: Store },
  { label: "Categories", href: "/categories", icon: Grid3X3 },
  { label: "Brands", href: "/brands", icon: Tag },
] as const;

const MobileNavSheet = memo(function MobileNavSheet({ open, onOpenChange }: MobileNavSheetProps) {
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
    navigate("/login");
  }, [navigate, onOpenChange]);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
      onOpenChange(false);
    }
  }, [navigate, searchQuery, onOpenChange]);

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex w-full max-w-sm flex-col p-0">
        <div className="bg-neutral-950 px-6 py-8">
          <div className="flex items-center justify-between">
            <span className="text-sm font-black uppercase tracking-[0.3em] text-white">Menu</span>
            <SheetClose asChild>
              <button
                type="button"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                aria-label="Close menu"
              >
                <span className="text-2xl leading-none">&times;</span>
              </button>
            </SheetClose>
          </div>
          <div className="relative mt-8">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-white/50" />
            <Input
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="h-12 w-full border-0 bg-white/10 pl-11 text-sm text-white placeholder:text-white/40 focus:ring-2 focus:ring-white/20 rounded-full font-medium"
            />
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="mb-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              Shop
            </p>
            <div className="space-y-1">
              {shopLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    to={link.href}
                    className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-bold uppercase tracking-tight text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.98]"
                  >
                    <link.icon className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-foreground" strokeWidth={2} />
                    {link.label}
                    <ChevronRight className="ml-auto h-4 w-4 text-muted-foreground/30 transition-all group-hover:translate-x-0.5 group-hover:text-foreground/50" />
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>

          <div className="mb-10">
            <p className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-muted-foreground/40">
              Account
            </p>
            <div className="space-y-1">
              <SheetClose asChild>
                <Link
                  to="/fave"
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-bold uppercase tracking-tight text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.98]"
                >
                  <Heart className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-foreground" strokeWidth={2} />
                  <span className="flex-1">Wishlist</span>
                  {favCount > 0 && (
                    <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-foreground px-2 text-[11px] font-black text-background">
                      {favCount > 99 ? "99+" : favCount}
                    </span>
                  )}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/orders"
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-bold uppercase tracking-tight text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.98]"
                >
                  <Package className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-foreground" strokeWidth={2} />
                  <span className="flex-1">Orders</span>
                  {ordersCount > 0 && (
                    <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-foreground px-2 text-[11px] font-black text-background">
                      {ordersCount > 99 ? "99+" : ordersCount}
                    </span>
                  )}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/cart"
                  className="group flex items-center gap-4 rounded-2xl px-4 py-4 text-base font-bold uppercase tracking-tight text-foreground transition-all duration-200 hover:bg-muted/50 active:scale-[0.98]"
                >
                  <ShoppingCart className="h-5 w-5 text-foreground/40 transition-colors group-hover:text-foreground" strokeWidth={2} />
                  <span className="flex-1">Cart</span>
                  {cartCount > 0 && (
                    <span className="flex h-6 min-w-[24px] items-center justify-center rounded-full bg-foreground px-2 text-[11px] font-black text-background">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </Link>
              </SheetClose>
            </div>
          </div>

          {isLoggedIn ? (
            <div>
              <p className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                Profile
              </p>
              <div className="space-y-0.5">
                <SheetClose asChild>
                  <Link
                    to="/profile"
                    className="group flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm font-semibold text-foreground/80 transition-all duration-200 hover:bg-muted/50 hover:text-foreground"
                  >
                    <UserCircle className="h-4 w-4 text-muted-foreground/50 transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                    My Profile
                  </Link>
                </SheetClose>
                <button
                  onClick={handleLogout}
                  className="flex w-full items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm font-semibold text-destructive/70 transition-all duration-200 hover:bg-destructive/10 hover:text-destructive"
                >
                  <LogOut className="h-4 w-4" strokeWidth={1.5} />
                  Sign Out
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/50">
                Sign In
              </p>
              <SheetClose asChild>
                <Link
                  to="/login"
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
                >
                  <LogIn className="h-4 w-4" />
                  Sign In
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/register"
                  className="flex w-full items-center justify-center gap-2 rounded-full border border-border/60 px-6 py-3 text-sm font-bold uppercase tracking-wider text-foreground/80 transition-all duration-200 hover:bg-muted/30 hover:text-foreground active:scale-[0.98]"
                >
                  <UserCircle className="h-4 w-4" />
                  Create Account
                </Link>
              </SheetClose>
            </div>
          )}
        </div>

        <div className="border-t border-border/20 px-6 py-4">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm font-semibold text-muted-foreground/70 transition-all duration-200 hover:bg-muted/50 hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={1.5} />
            )}
            <span>{theme === "dark" ? "Light Mode" : "Dark Mode"}</span>
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
});

export default MobileNavSheet;
