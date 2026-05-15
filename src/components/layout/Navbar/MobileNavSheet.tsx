import { memo, useCallback } from "react";
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
} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetClose } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo/Logo";
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

  return (
    <Sheet open={open} onOpenChange={onOpenChange}>
      <SheetContent side="left" className="flex w-full max-w-sm flex-col p-0">
        <SheetHeader className="border-b border-border/20 px-6 py-5">
          <SheetClose asChild>
            <button type="button" className="flex w-full cursor-pointer">
              <Logo />
            </button>
          </SheetClose>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
            <Input
              placeholder="Search products..."
              className="h-11 w-full rounded-2xl border-border/60 bg-muted/30 pl-11 text-sm placeholder:text-muted-foreground/50"
            />
          </div>

          <div className="mb-8">
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
              Shop
            </p>
            <div className="space-y-0.5">
              {shopLinks.map((link) => (
                <SheetClose key={link.href} asChild>
                  <Link
                    to={link.href}
                    className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                  >
                    <link.icon className="h-4 w-4" strokeWidth={1.5} />
                    {link.label}
                  </Link>
                </SheetClose>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/50">
              Account
            </p>
            <div className="space-y-0.5">
              <SheetClose asChild>
                <Link
                  to="/fave"
                  className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <Heart className="h-4 w-4" strokeWidth={1.5} />
                  <span className="flex-1">Wishlist</span>
                  {favCount > 0 && (
                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-foreground px-1.5 text-[10px] font-medium text-background">
                      {favCount > 99 ? "99+" : favCount}
                    </span>
                  )}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/orders"
                  className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <Package className="h-4 w-4" strokeWidth={1.5} />
                  <span className="flex-1">Orders</span>
                  {ordersCount > 0 && (
                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-foreground px-1.5 text-[10px] font-medium text-background">
                      {ordersCount > 99 ? "99+" : ordersCount}
                    </span>
                  )}
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  to="/cart"
                  className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                >
                  <ShoppingCart className="h-4 w-4" strokeWidth={1.5} />
                  <span className="flex-1">Cart</span>
                  {cartCount > 0 && (
                    <span className="flex h-5 min-w-[20px] items-center justify-center rounded-full bg-foreground px-1.5 text-[10px] font-medium text-background">
                      {cartCount > 99 ? "99+" : cartCount}
                    </span>
                  )}
                </Link>
              </SheetClose>
              {isLoggedIn ? (
                <>
                  <SheetClose asChild>
                    <Link
                      to="/profile"
                      className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                    >
                      <UserCircle className="h-4 w-4" strokeWidth={1.5} />
                      Profile
                    </Link>
                  </SheetClose>
                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                  >
                    <LogOut className="h-4 w-4" strokeWidth={1.5} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <SheetClose asChild>
                    <Link
                      to="/login"
                      className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                    >
                      <LogIn className="h-4 w-4" strokeWidth={1.5} />
                      Login
                    </Link>
                  </SheetClose>
                  <SheetClose asChild>
                    <Link
                      to="/register"
                      className="flex items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                    >
                      <UserCircle className="h-4 w-4" strokeWidth={1.5} />
                      Register
                    </Link>
                  </SheetClose>
                </>
              )}
            </div>
          </div>
        </div>

        <div className="border-t border-border/20 px-6 py-4">
          <button
            onClick={toggleTheme}
            className="flex w-full items-center gap-3.5 rounded-xl px-3.5 py-3 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" strokeWidth={1.5} />
            ) : (
              <Moon className="h-4 w-4" strokeWidth={1.5} />
            )}
            {theme === "dark" ? "Light Mode" : "Dark Mode"}
          </button>
        </div>
      </SheetContent>
    </Sheet>
  );
});

export default MobileNavSheet;
