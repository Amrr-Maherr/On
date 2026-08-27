import { useState, useCallback } from "react";
import Logo from "@/components/shared/logo/Logo";
import LanguageSwitcher from "@/components/shared/LanguageSwitcher";
import { NavbarLinks } from "./components/NavbarLinks";
import { NavbarSearch } from "./components/NavbarSearch";
import { NavbarActions } from "./components/NavbarActions";
import { NavbarMobileMenu } from "./components/NavbarMobileMenu";
import MobileNavSheet from "./MobileNavSheet";
import Ticker from "./Ticker";

function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMiniCartOpen, setIsMiniCartOpen] = useState(false);
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isOrdersOpen, setIsOrdersOpen] = useState(false);

  const toggleDropdown = useCallback(() => {
    setIsMiniCartOpen(false);
    setIsWishlistOpen(false);
    setIsOrdersOpen(false);
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  const toggleMiniCart = useCallback(() => {
    setIsDropdownOpen(false);
    setIsWishlistOpen(false);
    setIsOrdersOpen(false);
    setIsMiniCartOpen((prev) => !prev);
  }, []);

  const closeMiniCart = useCallback(() => {
    setIsMiniCartOpen(false);
  }, []);

  const toggleWishlist = useCallback(() => {
    setIsDropdownOpen(false);
    setIsMiniCartOpen(false);
    setIsOrdersOpen(false);
    setIsWishlistOpen((prev) => !prev);
  }, []);

  const closeWishlist = useCallback(() => {
    setIsWishlistOpen(false);
  }, []);

  const toggleOrders = useCallback(() => {
    setIsDropdownOpen(false);
    setIsMiniCartOpen(false);
    setIsWishlistOpen(false);
    setIsOrdersOpen((prev) => !prev);
  }, []);

  const closeOrders = useCallback(() => {
    setIsOrdersOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-border/40 bg-background backdrop-blur-xl">
      <Ticker />
      <div className="container-layout flex h-16 items-center justify-between gap-4 md:h-20">
        <div className="flex items-center gap-8 lg:gap-12">
          <Logo />
          <LanguageSwitcher />
          <NavbarLinks />
        </div>

        <NavbarSearch />

        <NavbarActions
          isDropdownOpen={isDropdownOpen}
          isMiniCartOpen={isMiniCartOpen}
          isWishlistOpen={isWishlistOpen}
          isOrdersOpen={isOrdersOpen}
          onToggleDropdown={toggleDropdown}
          onCloseDropdown={closeDropdown}
          onToggleMiniCart={toggleMiniCart}
          onCloseMiniCart={closeMiniCart}
          onToggleWishlist={toggleWishlist}
          onCloseWishlist={closeWishlist}
          onToggleOrders={toggleOrders}
          onCloseOrders={closeOrders}
        />

        <NavbarMobileMenu onClick={() => setMobileMenuOpen(true)} />
      </div>

      <MobileNavSheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </nav>
  );
}

export default Navbar;
