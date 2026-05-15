import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useOrders } from "@/features/orders/hooks/useOrders";
import OrderCard from "@/features/orders/components/OrderCard";
import OrdersLoader from "@/features/orders/components/OrdersLoader";
import OrdersEmpty from "@/features/orders/components/OrdersEmpty";
import OrdersError from "@/features/orders/components/OrdersError";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function OrdersPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading, error, refetch } = useOrders();

  if (isLoading) return <OrdersLoader />;

  if (error) {
    return (
      <OrdersError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const orders = data ?? [];

  if (orders.length === 0) {
    return <OrdersEmpty />;
  }

  return (
    <div className="container-layout py-8">
      <PageHelmet title="My Orders" description="View your order history." />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Orders" }]} className="mb-6" />

      <div className="mb-8">
        <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">My Orders</h1>
        <p className="mt-1 text-sm text-muted-foreground/70">
          {orders.length} {orders.length === 1 ? "order" : "orders"} total
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>
    </div>
  );
}
