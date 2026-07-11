import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Heart, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import WishlistItemCard from "@/features/wishlist/components/WishlistItemCard";
import { WishlistPageSkeleton } from "@/features/wishlist/components/WishlistPageSkeleton";
import ErrorState from "@/components/shared/Error";
import EmptyState from "@/components/shared/EmptyState";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroImage from "@/assets/imgi_1_em-emc-FOOTBALL-hp-tc-d.jpg";
import type { WishlistProduct } from "@/features/wishlist/types/wishlist";

type WishlistViewProps = {
  items: WishlistProduct[];
  count: number;
  isLoading: boolean;
  error: Error | null;
  removingId: string | null;
  addingToCartId: string | null;
  isRemoving: boolean;
  isAddingToCart: boolean;
  onRemove: (productId: string) => void;
  onAddToCart: (productId: string) => void;
  onRetry: () => void;
}

export default function WishlistView({
  items,
  count,
  isLoading,
  error,
  removingId,
  addingToCartId,
  isRemoving,
  isAddingToCart,
  onRemove,
  onAddToCart,
  onRetry,
}: WishlistViewProps) {
  const { t } = useTranslation();

  if (isLoading) {
    return <WishlistPageSkeleton />;
  }

  return (
    <>
      <CampaignHeader
        title={t("wishlist.page.hero.title")}
        subtitle={t("wishlist.page.hero.subtitle")}
        description={t("wishlist.page.hero.description")}
        backgroundImage={heroImage}
      />

      {error ? (
        <ErrorState
          title={t("wishlist.error.title")}
          message={error instanceof Error ? error.message : t("wishlist.error.defaultMessage")}
          onRetry={onRetry}
          retryLabel={t("wishlist.error.retry")}
        />
      ) : items.length === 0 ? (
        <EmptyState
          title={t("wishlist.empty.title")}
          description={t("wishlist.empty.description")}
          icon={<Heart className="h-9 w-9 text-muted-foreground/40" />}
          action={
            <Link
              to={`/products`}
              className="inline-flex items-center gap-2 rounded-none bg-foreground px-8 py-3 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
            >
              {t("wishlist.empty.browse")}
              <ArrowRight className="h-4 w-4" />
            </Link>
          }
        />
      ) : (
        <>
          <PageHelmet title={t("wishlist.page.title")} description={t("wishlist.page.description")} />
          <div className="container-layout py-8">
            <Breadcrumb items={[{ label: t("wishlist.page.breadcrumb.home"), href: "/" }, { label: t("wishlist.page.breadcrumb.wishlist") }]} className="mb-6" />
            <ScrollReveal>
              <div className="mb-10">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
                  {t("wishlist.page.catalog.label")}
                </span>
                <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground md:text-4xl">
                  {t("wishlist.page.catalog.title")}
                </h2>
                <p className="mt-1 text-sm font-medium text-muted-foreground/60">
                  {t("wishlist.page.catalog.count", { count })}
                </p>
              </div>
            </ScrollReveal>
            <div className="space-y-4" data-tour="wishlist-items">
              {items.map((product, index) => (
                <ScrollReveal key={product._id} delay={index * 0.04} direction="up" distance={16}>
                  <WishlistItemCard
                    product={product}
                    onRemove={onRemove}
                    onAddToCart={onAddToCart}
                    isRemoving={isRemoving && removingId === product._id}
                    isAddingToCart={isAddingToCart && addingToCartId === product._id}
                  />
                </ScrollReveal>
              ))}
            </div>
          </div>
        </>
      )}
    </>
  );
}
