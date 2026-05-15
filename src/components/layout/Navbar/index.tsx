import { useState, useCallback } from "react";
import { Search, User, ShoppingCart, Heart, Package, Menu, X, LogOut, LogIn, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo/Logo";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useOrders } from "@/features/orders/hooks/useOrders";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { data: cartData } = useCart();
  const { data: wishlistData } = useWishlist();
  const { data: ordersData } = useOrders();
  const cartCount = cartData?.numOfCartItems ?? 0;
  const favCount = wishlistData?.count ?? 0;
  const ordersCount = ordersData?.length ?? 0;
  const isLoggedIn = !!localStorage.getItem("token");
  const navigate = useNavigate();

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsDropdownOpen(false);
    navigate("/login");
  }, [navigate]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const closeMenu = useCallback(() => {
    setIsMenuOpen(false);
  }, []);

  const mobileLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    setIsMenuOpen(false);
    navigate("/login");
  }, [navigate]);

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-xl">
      <div className="container-layout flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
            <Input
              placeholder="Search products..."
              className="h-10 w-full rounded-2xl border-border/60 bg-muted/30 pl-11 text-sm placeholder:text-muted-foreground/50 focus:border-foreground/30"
            />
          </div>
        </div>

        <div className="hidden items-center gap-1 md:flex">
          <ThemeToggle />
          <Link to="/fave">
            <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative rounded-xl text-muted-foreground/70 hover:text-foreground">
              <Heart className="h-5 w-5" />
              {favCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-medium text-background">
                  {favCount > 99 ? "99+" : favCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/orders">
            <Button variant="ghost" size="icon" aria-label="Orders" className="relative rounded-xl text-muted-foreground/70 hover:text-foreground">
              <Package className="h-5 w-5" />
              {ordersCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-medium text-background">
                  {ordersCount > 99 ? "99+" : ordersCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative rounded-xl text-muted-foreground/70 hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-medium text-background">
                  {cartCount > 99 ? "99+" : cartCount}
                </span>
              )}
            </Button>
          </Link>
          <div className="relative">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Account"
              onClick={toggleDropdown}
              className="rounded-xl text-muted-foreground/70 hover:text-foreground"
            >
              <User className="h-5 w-5" />
            </Button>
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={closeDropdown} />
                <div className="absolute right-0 top-full mt-2 w-48 origin-top-right rounded-2xl border border-border/50 bg-card p-1.5 shadow-sm">
                  {isLoggedIn ? (
                    <div className="flex flex-col gap-0.5">
                      <Link
                        to="/orders"
                        className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <Package className="h-4 w-4" />
                        My Orders
                      </Link>
                      <Link
                        to="/profile"
                        className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <UserCircle className="h-4 w-4" />
                        Profile
                      </Link>
                      <hr className="my-1 border-border/40" />
                      <button
                        className="flex w-full items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4" />
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      <Link
                        to="/login"
                        className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <LogIn className="h-4 w-4" />
                        Login
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center gap-2.5 rounded-xl px-3.5 py-2.5 text-sm text-muted-foreground/80 transition-colors hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <UserCircle className="h-4 w-4" />
                        Register
                      </Link>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden rounded-xl text-muted-foreground/70"
          aria-label="Toggle menu"
          onClick={toggleMenu}
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </Button>
      </div>

      {isMenuOpen && (
        <div className="border-t border-border/40 bg-background/95 backdrop-blur-xl px-6 py-6 md:hidden">
          <div className="relative mb-6">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/50" />
            <Input
              placeholder="Search products..."
              className="h-10 w-full rounded-2xl border-border/60 bg-muted/30 pl-11 text-sm"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <ThemeToggle />
            <Link to="/fave" onClick={closeMenu}>
              <Button variant="ghost" size="sm" aria-label="Wishlist" className="gap-2 rounded-xl">
                <Heart className="h-4 w-4" />
                Wishlist
                {favCount > 0 && (
                  <span className="flex h-4 min-w-[14px] items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-medium text-background">
                    {favCount > 99 ? "99+" : favCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/orders" onClick={closeMenu}>
              <Button variant="ghost" size="sm" aria-label="Orders" className="gap-2 rounded-xl">
                <Package className="h-4 w-4" />
                Orders
                {ordersCount > 0 && (
                  <span className="flex h-4 min-w-[14px] items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-medium text-background">
                    {ordersCount > 99 ? "99+" : ordersCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart" onClick={closeMenu}>
              <Button variant="ghost" size="sm" aria-label="Cart" className="gap-2 rounded-xl">
                <ShoppingCart className="h-4 w-4" />
                Cart
                {cartCount > 0 && (
                  <span className="flex h-4 min-w-[14px] items-center justify-center rounded-full bg-foreground px-1 text-[9px] font-medium text-background">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Button>
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" onClick={closeMenu}>
                  <Button variant="ghost" size="sm" aria-label="Profile" className="gap-2 rounded-xl">
                    <UserCircle className="h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Logout"
                  onClick={mobileLogout}
                  className="gap-2 rounded-xl"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <Button variant="ghost" size="sm" aria-label="Account" className="gap-2 rounded-xl">
                  <LogIn className="h-4 w-4" />
                  Login
                </Button>
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
