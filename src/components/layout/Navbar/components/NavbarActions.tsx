import { memo } from "react";
import ThemeToggle from "@/components/shared/ThemeToggle";
import { NavbarUserMenu } from "./NavbarUserMenu";
import { MiniCart } from "./MiniCart";
import { MiniWishlist } from "./MiniWishlist";
import { MiniOrders } from "./MiniOrders";

type NavbarActionsProps = {
  isDropdownOpen: boolean;
  isMiniCartOpen: boolean;
  isWishlistOpen: boolean;
  isOrdersOpen: boolean;
  onToggleDropdown: () => void;
  onCloseDropdown: () => void;
  onToggleMiniCart: () => void;
  onCloseMiniCart: () => void;
  onToggleWishlist: () => void;
  onCloseWishlist: () => void;
  onToggleOrders: () => void;
  onCloseOrders: () => void;
};

export const NavbarActions = memo(function NavbarActions({
  isDropdownOpen,
  isMiniCartOpen,
  isWishlistOpen,
  isOrdersOpen,
  onToggleDropdown,
  onCloseDropdown,
  onToggleMiniCart,
  onCloseMiniCart,
  onToggleWishlist,
  onCloseWishlist,
  onToggleOrders,
  onCloseOrders,
}: NavbarActionsProps) {
  return (
    <div className="hidden items-center gap-0.5 md:flex">
      <ThemeToggle />
      <MiniWishlist
        isOpen={isWishlistOpen}
        onToggle={onToggleWishlist}
        onClose={onCloseWishlist}
      />
      <MiniOrders
        isOpen={isOrdersOpen}
        onToggle={onToggleOrders}
        onClose={onCloseOrders}
      />
      <MiniCart
        isOpen={isMiniCartOpen}
        onToggle={onToggleMiniCart}
        onClose={onCloseMiniCart}
      />
      <NavbarUserMenu
        isOpen={isDropdownOpen}
        onToggle={onToggleDropdown}
        onClose={onCloseDropdown}
      />
    </div>
  );
});
