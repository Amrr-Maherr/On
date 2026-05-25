import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroVideo from "@/assets/adidas_-_you_got_this (1080p).mp4";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useOrders } from "@/features/orders/hooks/useOrders";
import OrderCard from "@/features/orders/components/OrderCard";
import OrdersLoader from "@/features/orders/components/OrdersLoader";
import OrdersEmpty from "@/features/orders/components/OrdersEmpty";
import OrdersError from "@/features/orders/components/OrdersError";
import { isAxiosError } from "axios";

export default function OrdersPage() {
  const { t } = useTranslation();
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

  if (isLoading) {
    return (
      <>
        <CampaignHeader
          title={t("orders.page.hero.title")}
          subtitle={t("orders.page.hero.subtitle")}
          description={t("orders.page.hero.description")}
          videoUrl={heroVideo}
        />
        <OrdersLoader />
      </>
    );
  }

  if (error) {
    console.log(error);

    return (
      <>
        <CampaignHeader
          title={t("orders.page.hero.title")}
          subtitle={t("orders.page.hero.subtitle")}
          description={t("orders.page.hero.description")}
          videoUrl={heroVideo}
        />
        <OrdersError
          message={
            isAxiosError(error)
              ? error.response?.data?.message
              : error instanceof Error
                ? error.message
                : t("orders.error.defaultMessage")
          }
          onRetry={() => refetch()}
        />
      </>
    );
  }

  const orders = data ?? [];

  if (orders.length === 0) {
    return (
      <>
        <CampaignHeader
          title={t("orders.page.hero.title")}
          subtitle={t("orders.page.hero.subtitle")}
          description={t("orders.page.hero.description")}
          videoUrl={heroVideo}
        />
        <OrdersEmpty />
      </>
    );
  }

  return (
    <>
      <CampaignHeader
        title={t("orders.page.hero.title")}
        subtitle={t("orders.page.hero.subtitle")}
        description={t("orders.page.hero.description")}
        videoUrl={heroVideo}
      />
      <PageHelmet
        title={t("orders.page.title")}
        description={t("orders.page.description")}
      />
      <div className="container-layout py-8">
        <Breadcrumb
          items={[
            {
              label: t("orders.page.breadcrumb.home"),
              href: buildLocalizedPath("/", lang),
            },
            { label: t("orders.page.breadcrumb.orders") },
          ]}
          className="mb-6"
        />
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            {t("orders.page.catalog.label")}
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground md:text-4xl">
            {t("orders.page.catalog.title")}
          </h2>
          <p className="mt-1 text-sm font-medium text-muted-foreground/60">
            {t("orders.page.catalog.count", { count: orders.length })}
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
