import { lazy, memo, Suspense } from "react";
import { useTranslation } from "react-i18next";
import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import { TrendingProductsSectionSkeleton } from "../components/TrendingProductsSectionSkeleton";
import { ProductsSectionSkeleton } from "../components/ProductsSectionSkeleton";
import { CategoriesSectionSkeleton } from "../components/CategoriesSectionSkeleton";
import { BrandsSectionSkeleton } from "../components/BrandsSectionSkeleton";

const ProductsSection = lazy(() => import("../components/ProductsSection"));
const CategoriesSection = lazy(() => import("../components/CategoriesSection"));
const Banner = lazy(() => import("../components/banner/banner"));
const BrandsSection = lazy(() => import("../components/BrandsSection"));
const TestimonialsSection = lazy(() => import("../components/TestimonialsSection"));
const FeaturesSection = lazy(() => import("../components/FeaturesSection"));
const ValuesSection = lazy(() => import("../components/ValuesSection"));
const TeamSection = lazy(() => import("../components/TeamSection"));
const CtaSection = lazy(() => import("../components/CtaSection"));
const BlogSection = lazy(() => import("../components/BlogSection"));
const HeroCampaignSection = lazy(() => import("../components/HeroCampaignSection"));
const FeaturedCollectionsSection = lazy(() => import("../components/FeaturedCollectionsSection"));
const CategoryHighlightsSection = lazy(() => import("../components/CategoryHighlightsSection"));
const TrendingProductsSection = lazy(() => import("../components/TrendingProductsSection"));
const PromotionalBannerSection = lazy(() => import("../components/PromotionalBannerSection"));
const BrandStorySection = lazy(() => import("../components/BrandStorySection"));

const HomePage = memo(function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHelmet title={t("home.page.title")} />
      <Hero />
      <Suspense fallback={null}><HeroCampaignSection /></Suspense>
      <Suspense fallback={<ProductsSectionSkeleton />}><ProductsSection /></Suspense>
      <Suspense fallback={null}><FeaturedCollectionsSection /></Suspense>
      <Suspense fallback={<CategoriesSectionSkeleton />}><CategoriesSection /></Suspense>
      <Suspense fallback={null}><CategoryHighlightsSection /></Suspense>
      <Suspense fallback={null}><Banner /></Suspense>
      <Suspense fallback={<TrendingProductsSectionSkeleton />}><TrendingProductsSection /></Suspense>
      <Suspense fallback={<BrandsSectionSkeleton />}><BrandsSection /></Suspense>
      <Suspense fallback={null}><PromotionalBannerSection /></Suspense>
      <Suspense fallback={null}><TestimonialsSection /></Suspense>
      <Suspense fallback={null}><BrandStorySection /></Suspense>
      <Suspense fallback={null}><ValuesSection /></Suspense>
      <Suspense fallback={null}><FeaturesSection /></Suspense>
      <Suspense fallback={null}><TeamSection /></Suspense>
      <Suspense fallback={null}><CtaSection /></Suspense>
      <Suspense fallback={null}><BlogSection /></Suspense>
    </>
  );
});

export default HomePage;
