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
    <nav className="sticky top-0 z-50 bg-background container-layout">
      <div className="flex h-16 items-center justify-between gap-4">
        <Logo />

        <div className="hidden flex-1 items-center justify-center px-8 md:flex">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="h-9 w-full rounded-full pl-9"
            />
          </div>
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link to="/fave">
            <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative">
              <Heart className="h-5 w-5" />
              {favCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
                  {favCount > 99 ? "99+" : favCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/orders">
            <Button variant="ghost" size="icon" aria-label="Orders" className="relative">
              <Package className="h-5 w-5" />
              {ordersCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
                  {ordersCount > 99 ? "99+" : ordersCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
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
            >
              <User className="h-5 w-5" />
            </Button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-44 rounded-md border bg-background shadow-lg">
                {isLoggedIn ? (
                  <>
                    <Link
                      to="/orders"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                      onClick={closeDropdown}
                    >
                      <Package className="h-4 w-4" />
                      My Orders
                    </Link>
                    <Link
                      to="/profile"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                      onClick={closeDropdown}
                    >
                      <UserCircle className="h-4 w-4" />
                      Profile
                    </Link>
                    <button
                      className="flex w-full items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                      onClick={handleLogout}
                    >
                      <LogOut className="h-4 w-4" />
                      Logout
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      to="/login"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                      onClick={closeDropdown}
                    >
                      <LogIn className="h-4 w-4" />
                      Login
                    </Link>
                    <Link
                      to="/register"
                      className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-muted"
                      onClick={closeDropdown}
                    >
                      <UserCircle className="h-4 w-4" />
                      Register
                    </Link>
                  </>
                )}
              </div>
            )}
          </div>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
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
        <div className="border-t px-4 py-4 md:hidden">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Search products..."
              className="h-9 w-full rounded-full pl-9"
            />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-2">
            <ThemeToggle />
            <Link to="/fave" onClick={closeMenu}>
              <Button variant="ghost" size="sm" aria-label="Wishlist" className="gap-1.5">
                <Heart className="h-4 w-4" />
                Wishlist
                {favCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
                    {favCount > 99 ? "99+" : favCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/orders" onClick={closeMenu}>
              <Button variant="ghost" size="sm" aria-label="Orders" className="gap-1.5">
                <Package className="h-4 w-4" />
                Orders
                {ordersCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
                    {ordersCount > 99 ? "99+" : ordersCount}
                  </span>
                )}
              </Button>
            </Link>
            <Link to="/cart" onClick={closeMenu}>
              <Button variant="ghost" size="sm" aria-label="Cart" className="gap-1.5">
                <ShoppingCart className="h-4 w-4" />
                Cart
                {cartCount > 0 && (
                  <span className="flex h-4 min-w-4 items-center justify-center rounded-full bg-primary px-1 text-[10px] font-bold leading-none text-primary-foreground">
                    {cartCount > 99 ? "99+" : cartCount}
                  </span>
                )}
              </Button>
            </Link>
            {isLoggedIn ? (
              <>
                <Link to="/profile" onClick={closeMenu}>
                  <Button variant="ghost" size="sm" aria-label="Profile">
                    <UserCircle className="mr-2 h-4 w-4" />
                    Profile
                  </Button>
                </Link>
                <Button
                  variant="ghost"
                  size="sm"
                  aria-label="Logout"
                  onClick={mobileLogout}
                >
                  <LogOut className="mr-2 h-4 w-4" />
                  Logout
                </Button>
              </>
            ) : (
              <Link to="/login" onClick={closeMenu}>
                <Button variant="ghost" size="sm" aria-label="Account">
                  <LogIn className="mr-2 h-4 w-4" />
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
