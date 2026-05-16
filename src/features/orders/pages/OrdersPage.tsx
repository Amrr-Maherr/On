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

function CampaignHeader() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553729459-afe8f2e2e065?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
      <div className="container-layout relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Track</p>
        <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">Orders.</h1>
        <p className="mt-4 max-w-lg text-lg text-white/70">
          Your complete order history, all in one place.
        </p>
      </div>
    </section>
  );
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

  if (isLoading) {
    return (
      <>
        <CampaignHeader />
        <OrdersLoader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <CampaignHeader />
        <OrdersError message={getErrorMessage(error)} onRetry={() => refetch()} />
      </>
    );
  }

  const orders = data ?? [];

  if (orders.length === 0) {
    return (
      <>
        <CampaignHeader />
        <OrdersEmpty />
      </>
    );
  }

  return (
    <>
      <CampaignHeader />
      <PageHelmet title="My Orders" description="View your order history." />
      <div className="container-layout py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Orders" }]} className="mb-6" />
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            History
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground md:text-4xl">Order History.</h2>
          <p className="mt-1 text-sm font-medium text-muted-foreground/60">
            {orders.length} {orders.length === 1 ? "order" : "orders"} tracked in your account
          </p>
        </div>
        <div className="space-y-4" data-tour="orders-list">
          {orders.map((order) => (
            <OrderCard key={order._id} order={order} />
          ))}
        </div>
      </div>
    </>
  );
}
