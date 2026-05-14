import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { useOrders } from "@/features/orders/hooks/useOrders";
import OrderCard from "@/features/orders/components/OrderCard";
import OrdersLoader from "@/features/orders/components/OrdersLoader";
import OrdersEmpty from "@/features/orders/components/OrdersEmpty";
import OrdersError from "@/features/orders/components/OrdersError";
import OrdersPagination from "@/features/orders/components/OrdersPagination";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function OrdersPage() {
  const navigate = useNavigate();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading, error, refetch } = useOrders(page);

  if (isLoading) return <OrdersLoader />;

  if (error) {
    return (
      <OrdersError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const orders = data?.data ?? [];
  const metadata = data?.metadata;

  if (orders.length === 0) {
    return <OrdersEmpty />;
  }

  return (
    <div className="container-layout py-8">
      <PageHelmet title="My Orders" description="View your order history." />

      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">My Orders</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {data?.results ?? 0}{" "}
          {(data?.results ?? 0) === 1 ? "order" : "orders"} total
        </p>
      </div>

      <div className="space-y-4">
        {orders.map((order) => (
          <OrderCard key={order._id} order={order} />
        ))}
      </div>

      {metadata && (
        <OrdersPagination
          currentPage={metadata.currentPage}
          totalPages={metadata.numberOfPages}
          onPageChange={setPage}
        />
      )}
    </div>
  );
}
