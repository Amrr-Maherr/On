import { memo } from "react";
import { Heart, Package, ShoppingCart } from "lucide-react";
import { buildLocalizedPath } from "@/lib/localized-path";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { NavbarIconButton } from "./NavbarIconButton";
import { NavbarUserMenu } from "./NavbarUserMenu";
import { useNavbar } from "../hooks/useNavbar";

type NavbarActionsProps = {
  isDropdownOpen: boolean;
  onToggleDropdown: () => void;
  onCloseDropdown: () => void;
};

export const NavbarActions = memo(function NavbarActions({
  isDropdownOpen,
  onToggleDropdown,
  onCloseDropdown,
}: NavbarActionsProps) {
  const { t, lang, favCount, ordersCount, cartCount } = useNavbar();

  return (
    <div className="hidden items-center gap-0.5 md:flex">
      <ThemeToggle />
      <NavbarIconButton
        href={buildLocalizedPath("/wishlist", lang)}
        ariaLabel={t("nav.aria.wishlist")}
        icon={<Heart className="h-5 w-5" />}
        count={favCount}
      />
      <NavbarIconButton
        href={buildLocalizedPath("/orders", lang)}
        ariaLabel={t("nav.aria.orders")}
        icon={<Package className="h-5 w-5" />}
        count={ordersCount}
      />
      <NavbarIconButton
        href={buildLocalizedPath("/cart", lang)}
        ariaLabel={t("nav.aria.cart")}
        icon={<ShoppingCart className="h-5 w-5" />}
        count={cartCount}
      />
      <NavbarUserMenu
        isOpen={isDropdownOpen}
        onToggle={onToggleDropdown}
        onClose={onCloseDropdown}
      />
    </div>
  );
});
