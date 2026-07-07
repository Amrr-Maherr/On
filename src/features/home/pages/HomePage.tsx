import { memo } from "react";
import { useTranslation } from "react-i18next";
import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import LazyLoad from "@/shared/components/LazyLoad";
import { TrendingProductsSectionSkeleton } from "../components/TrendingProductsSectionSkeleton";
import { ProductsSectionSkeleton } from "../components/ProductsSectionSkeleton";
import { CategoriesSectionSkeleton } from "../components/CategoriesSectionSkeleton";
import { BrandsSectionSkeleton } from "../components/BrandsSectionSkeleton";

const HomePage = memo(function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHelmet title={t("home.page.title")} />
      <Hero />
      <LazyLoad load={() => import("../components/HeroCampaignSection")} />
      <LazyLoad load={() => import("../components/ProductsSection")} fallback={<ProductsSectionSkeleton />} rootMargin="0px 0px 100px 0px" />
      <LazyLoad load={() => import("../components/FeaturedCollectionsSection")} />
      <LazyLoad load={() => import("../components/CategoriesSection")} fallback={<CategoriesSectionSkeleton />} />
      <LazyLoad load={() => import("../components/CategoryHighlightsSection")} />
      <LazyLoad load={() => import("../components/banner/banner")} />
      <LazyLoad load={() => import("../components/TrendingProductsSection")} fallback={<TrendingProductsSectionSkeleton />} />
      <LazyLoad load={() => import("../components/BrandsSection")} fallback={<BrandsSectionSkeleton />} />
      <LazyLoad load={() => import("../components/PromotionalBannerSection")} />
      <LazyLoad load={() => import("../components/TestimonialsSection")} />
      <LazyLoad load={() => import("../components/BrandStorySection")} />
      <LazyLoad load={() => import("../components/ValuesSection")} />
      <LazyLoad load={() => import("../components/FeaturesSection")} />
      <LazyLoad load={() => import("../components/TeamSection")} />
      <LazyLoad load={() => import("../components/CtaSection")} />
      <LazyLoad load={() => import("../components/BlogSection")} />
    </>
  );
});

export default HomePage;
