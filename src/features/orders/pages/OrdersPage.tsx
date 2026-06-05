import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroImage from "@/assets/imgi_1_em-walking-sportswear-ss26-launch-tc.jpg";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useOrders } from "@/features/orders/hooks/useOrders";
import OrderCard from "@/features/orders/components/OrderCard";
import { CampaignHeaderSkeleton } from "@/components/shared/Skeleton";
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
        <CampaignHeaderSkeleton />
        <div className="container-layout py-8">
          <div className="mb-8 h-8 w-48 animate-pulse rounded-xl bg-muted" />
          <div className="space-y-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="rounded-2xl border border-border/50 bg-card p-5">
                <div className="mb-4 flex items-center justify-between">
                  <div className="h-4 w-24 animate-pulse rounded-lg bg-muted" />
                  <div className="h-4 w-20 animate-pulse rounded-lg bg-muted" />
                </div>
                <div className="space-y-3">
                  {Array.from({ length: 2 }).map((_, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="h-14 w-14 shrink-0 animate-pulse rounded-xl bg-muted" />
                      <div className="flex-1 space-y-2">
                        <div className="h-4 w-3/4 animate-pulse rounded-lg bg-muted" />
                        <div className="h-3 w-1/4 animate-pulse rounded-lg bg-muted" />
                      </div>
                    </div>
                  ))}
                </div>
                <hr className="my-4 border-border/40" />
                <div className="flex items-center justify-between">
                  <div className="h-4 w-32 animate-pulse rounded-lg bg-muted" />
                  <div className="h-5 w-20 animate-pulse rounded-lg bg-muted" />
                </div>
              </div>
            ))}
          </div>
        </div>
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
          backgroundImage={heroImage}
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
          backgroundImage={heroImage}
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
        backgroundImage={heroImage}
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
        <ScrollReveal>
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
        </ScrollReveal>
        <div className="space-y-4" data-tour="orders-list">
          {orders.map((order, index) => (
            <ScrollReveal key={order._id} delay={index * 0.04} direction="up" distance={16}>
              <OrderCard order={order} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}
