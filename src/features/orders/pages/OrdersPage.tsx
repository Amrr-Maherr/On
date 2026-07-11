import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useOrders } from "@/features/orders/hooks/useOrders";
import OrdersView from "@/features/orders/components/OrdersView";

export default function OrdersPage() {
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(buildLocalizedPath("/login", lang));
    }
  }, [navigate, lang]);

  const { data, isLoading, error, refetch } = useOrders();

  return (
    <OrdersView
      orders={data ?? []}
      lang={lang}
      isLoading={isLoading}
      error={error}
      onRetry={() => refetch()}
    />
  );
}
