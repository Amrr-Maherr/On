import { Routes, Route } from "react-router-dom";
import HomePage from "@/features/home/pages/HomePage";
import AuthPage from "@/features/auth/pages/AuthPage";
import ProductsPage from "@/features/products/pages/ProductsPage";
import CartPage from "@/features/cart/pages/CartPage";
import CheckoutPage from "@/features/checkout/pages/CheckoutPage";
import OrdersPage from "@/features/orders/pages/OrdersPage";
import UserProfilePage from "@/features/user-profile/pages/UserProfilePage";
import WishlistPage from "@/features/wishlist/pages/WishlistPage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/auth" element={<AuthPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/checkout" element={<CheckoutPage />} />
      <Route path="/orders" element={<OrdersPage />} />
      <Route path="/profile" element={<UserProfilePage />} />
      <Route path="/wishlist" element={<WishlistPage />} />
    </Routes>
  );
}
