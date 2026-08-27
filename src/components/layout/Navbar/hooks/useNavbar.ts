import { useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import { useCart } from "@/features/cart/hooks/useCart";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useOrders } from "@/features/orders/hooks/useOrders";

export function useNavbar() {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  const navigate = useNavigate();

  const { data: cartData } = useCart();
  const { data: wishlistData } = useWishlist();
  const { data: ordersData } = useOrders();

  const cartCount = cartData?.numOfCartItems ?? 0;
  const favCount = wishlistData?.count ?? 0;
  const ordersCount = ordersData?.length ?? 0;

  const isLoggedIn = !!localStorage.getItem("token");

  const handleLogout = useCallback(
    (onLogout?: () => void) => {
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      window.location.reload()
      onLogout?.();
      navigate(buildLocalizedPath("/login", lang));
    },
    [navigate, lang],
  );

  const handleSearch = useCallback(
    (query: string, onSearch?: () => void) => {
      if (query.trim()) {
        navigate(
          `${buildLocalizedPath("/products", lang)}?q=${encodeURIComponent(query.trim())}`,
        );
        onSearch?.();
      }
    },
    [navigate, lang],
  );

  return {
    t,
    lang,
    cartCount,
    favCount,
    ordersCount,
    isLoggedIn,
    handleLogout,
    handleSearch,
  };
}
