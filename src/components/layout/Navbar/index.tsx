import { useState, useCallback } from "react";
import { Search, User, ShoppingCart, Heart, Package, Menu, LogOut, LogIn, UserCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Logo from "@/components/shared/logo/Logo";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useOrders } from "@/features/orders/hooks/useOrders";
import MobileNavSheet from "./MobileNavSheet";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);


  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      navigate(`/products?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery("");
    }
  }, [navigate, searchQuery]);

  const navLinks = [
    { label: "Men", href: "/categories/men" },
    { label: "Women", href: "/categories/women" },
    { label: "Kids", href: "/categories/kids" },
    { label: "Sale", href: "/products?onSale=true" },
    { label: "Brands", href: "/brands" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-border/40 bg-background/90 backdrop-blur-xl">
      <div className="container-layout flex h-16 items-center justify-between gap-4 md:h-20">
        <div className="flex items-center gap-8 lg:gap-12">
          <Logo />
          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-black uppercase tracking-[0.2em] text-foreground/70 transition-all hover:text-foreground hover:underline underline-offset-8"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden flex-1 items-center justify-end px-8 md:flex">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
            <Input
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleSearch}
              className="h-10 w-full rounded-none border-2 border-border/40 bg-muted/20 pl-11 text-sm font-bold placeholder:text-muted-foreground/30 focus-visible:border-foreground"
            />
          </div>
        </div>

        <div className="hidden items-center gap-0.5 md:flex">
          <ThemeToggle />
          <Link to="/fave">
            <Button variant="ghost" size="icon" aria-label="Wishlist" className="relative rounded-none text-muted-foreground/60 hover:bg-muted/30 hover:text-foreground">
              <Heart className="h-5 w-5" />
              {favCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
                  {favCount > 99 ? "99+" : favCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/orders">
            <Button variant="ghost" size="icon" aria-label="Orders" className="relative rounded-none text-muted-foreground/60 hover:bg-muted/30 hover:text-foreground">
              <Package className="h-5 w-5" />
              {ordersCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
                  {ordersCount > 99 ? "99+" : ordersCount}
                </span>
              )}
            </Button>
          </Link>
          <Link to="/cart">
            <Button variant="ghost" size="icon" aria-label="Cart" className="relative rounded-none text-muted-foreground/60 hover:bg-muted/30 hover:text-foreground">
              <ShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
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
              className="rounded-none text-muted-foreground/60 hover:bg-muted/30 hover:text-foreground"
            >
              <User className="h-5 w-5" />
            </Button>
            {isDropdownOpen && (
              <>
                <div className="fixed inset-0 z-10" onClick={closeDropdown} />
                <div className="absolute right-0 top-full mt-2 w-52 origin-top-right rounded-none border-2 border-border/40 bg-card p-1.5 shadow-xl">
                  {isLoggedIn ? (
                    <div className="flex flex-col gap-0.5">
                      <Link
                        to="/orders"
                        className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <Package className="h-4 w-4" />
                        My Orders
                      </Link>
                      <Link
                        to="/profile"
                        className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <UserCircle className="h-4 w-4" />
                        Profile
                      </Link>
                      <hr className="my-1 border-border/40" />
                      <button
                        className="flex w-full items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-destructive/70 transition-all hover:bg-destructive/10 hover:text-destructive"
                        onClick={handleLogout}
                      >
                        <LogOut className="h-4 w-4" />
                        Sign Out
                      </button>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-0.5">
                      <Link
                        to="/login"
                        className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <LogIn className="h-4 w-4" />
                        Sign In
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                        onClick={closeDropdown}
                      >
                        <UserCircle className="h-4 w-4" />
                        Create Account
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
          className="md:hidden rounded-none text-muted-foreground/70"
          aria-label="Open menu"
          onClick={() => setMobileMenuOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </Button>
      </div>

      <MobileNavSheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </nav>
  );
}

export default Navbar;
