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

  const toggleDropdown = useCallback(() => {
    setIsDropdownOpen((prev) => !prev);
  }, []);

  const closeDropdown = useCallback(() => {
    setIsDropdownOpen(false);
  }, []);

  return (
    <nav className="sticky top-0 z-50 border-b-2 border-border/40 bg-background backdrop-blur-xl">
      <Ticker
        messages={[
          "Free shipping on orders over $100",
          "New arrivals every week",
          "Up to 50% off select styles",
        ]}
      />
      <div className="container-layout flex h-16 items-center justify-between gap-4 md:h-20">
        <div className="flex items-center gap-8 lg:gap-12">
          <Logo />
          <LanguageSwitcher />
          <NavbarLinks />
        </div>

        <NavbarSearch />

        <NavbarActions
          isDropdownOpen={isDropdownOpen}
          onToggleDropdown={toggleDropdown}
          onCloseDropdown={closeDropdown}
        />

        <NavbarMobileMenu onClick={() => setMobileMenuOpen(true)} />
      </div>

      <MobileNavSheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen} />
    </nav>
  );
}

export default Navbar;
