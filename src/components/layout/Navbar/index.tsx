import { useState } from "react";
import { Search, User, ShoppingCart, Heart, Menu, X } from "lucide-react";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useTheme } from "@/shared/providers/theme-provider";
import Logo from "@/components/shared/logo/Logo";
function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme } = useTheme();
  console.log(theme);

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
          <Button variant="ghost" size="icon" aria-label="Account">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Wishlist">
            <Heart className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" aria-label="Cart">
            <ShoppingCart className="h-5 w-5" />
          </Button>
        </div>

        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
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
          <div className="flex items-center justify-around">
            <ThemeToggle />
            <Button variant="ghost" size="sm" aria-label="Account">
              <User className="mr-2 h-4 w-4" />
              Account
            </Button>
            <Button variant="ghost" size="sm" aria-label="Wishlist">
              <Heart className="mr-2 h-4 w-4" />
              Wishlist
            </Button>
            <Button variant="ghost" size="sm" aria-label="Cart">
              <ShoppingCart className="mr-2 h-4 w-4" />
              Cart
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
