import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Package, ArrowRight } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath, useCurrentLang } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroImage from "@/assets/imgi_1_em-walking-sportswear-ss26-launch-tc.jpg";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useOrders } from "@/features/orders/hooks/useOrders";
import OrderCard from "@/features/orders/components/OrderCard";
import LoadingState from "@/components/shared/LoadingState";
import ErrorState from "@/components/shared/Error";
import EmptyState from "@/components/shared/EmptyState";
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
        <LoadingState variant="row" count={4} />
      </>
    );
  }

  if (error) {
    return (
      <>
        <CampaignHeader
          title={t("orders.page.hero.title")}
          subtitle={t("orders.page.hero.subtitle")}
          description={t("orders.page.hero.description")}
          backgroundImage={heroImage}
        />
        <ErrorState
          title={t("orders.error.title")}
          message={
            isAxiosError(error)
              ? error.response?.data?.message
              : error instanceof Error
                ? error.message
                : t("orders.error.defaultMessage")
          }
          onRetry={() => refetch()}
          retryLabel={t("orders.error.retry")}
        />
      </>
    );
  }

  const orders = data ?? [];
  const langOrders = useCurrentLang();

  if (orders.length === 0) {
    return (
      <>
        <CampaignHeader
          title={t("orders.page.hero.title")}
          subtitle={t("orders.page.hero.subtitle")}
          description={t("orders.page.hero.description")}
          backgroundImage={heroImage}
        />
        <EmptyState
          title={t("orders.empty.title")}
          description={t("orders.empty.description")}
          icon={<Package className="h-9 w-9 text-muted-foreground/40" />}
          action={
            <Link
              to={buildLocalizedPath("/products", langOrders)}
              className="inline-flex items-center gap-2 rounded-none bg-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              {t("orders.empty.shopNow")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
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
