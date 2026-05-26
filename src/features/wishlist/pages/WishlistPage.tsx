import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useRemoveWishlistItem } from "@/features/wishlist/hooks/useRemoveWishlistItem";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import WishlistItemCard from "@/features/wishlist/components/WishlistItemCard";
import WishlistEmpty from "@/features/wishlist/components/WishlistEmpty";
import WishlistLoader from "@/features/wishlist/components/WishlistLoader";
import WishlistError from "@/features/wishlist/components/WishlistError";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import heroVideo from "@/assets/adidas_-_you_got_this (1080p).mp4";

export default function WishlistPage() {
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

  const { data, isLoading, error, refetch } = useWishlist();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveWishlistItem();
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);

  if (isLoading) {
    return (
      <>
        <CampaignHeader
          title={t("wishlist.page.hero.title")}
          subtitle={t("wishlist.page.hero.subtitle")}
          description={t("wishlist.page.hero.description")}
          videoUrl={heroVideo}
        />
        <WishlistLoader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <CampaignHeader
          title={t("wishlist.page.hero.title")}
          subtitle={t("wishlist.page.hero.subtitle")}
          description={t("wishlist.page.hero.description")}
          videoUrl={heroVideo}
        />
        <WishlistError
          message={error instanceof Error ? error.message : t("wishlist.error.defaultMessage")}
          onRetry={() => refetch()}
        />
      </>
    );
  }

  const items = data?.data ?? [];
  const count = data?.count ?? 0;

  if (items.length === 0) {
    return (
      <>
        <CampaignHeader
          title={t("wishlist.page.hero.title")}
          subtitle={t("wishlist.page.hero.subtitle")}
          description={t("wishlist.page.hero.description")}
          videoUrl={heroVideo}
        />
        <WishlistEmpty />
      </>
    );
  }

  const handleRemove = useCallback((productId: string) => {
    setRemovingId(productId);
    removeItem(productId, {
      onSettled: () => setRemovingId(null),
      onSuccess: () => toast.success(t("wishlist.toast.removed")),
      onError: (err) => toast.error(err.message),
    });
  }, [removeItem, t]);

  const handleAddToCart = useCallback((productId: string) => {
    setAddingToCartId(productId);
    addToCart(
      { productId },
      {
        onSettled: () => setAddingToCartId(null),
        onSuccess: () => toast.success(t("wishlist.toast.addedToCart")),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToCart, t]);

  return (
    <>
      <CampaignHeader
        title={t("wishlist.page.hero.title")}
        subtitle={t("wishlist.page.hero.subtitle")}
        description={t("wishlist.page.hero.description")}
        videoUrl={heroVideo}
      />
      <PageHelmet title={t("wishlist.page.title")} description={t("wishlist.page.description")} />
      <div className="container-layout py-8">
        <Breadcrumb items={[{ label: t("wishlist.page.breadcrumb.home"), href: buildLocalizedPath("/", lang) }, { label: t("wishlist.page.breadcrumb.wishlist") }]} className="mb-6" />
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
                onRemove={handleRemove}
                onAddToCart={handleAddToCart}
                isRemoving={isRemoving && removingId === product._id}
                isAddingToCart={isAddingToCart && addingToCartId === product._id}
              />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </>
  );
}