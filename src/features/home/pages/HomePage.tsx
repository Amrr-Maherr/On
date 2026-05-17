import { memo } from "react";
import { useTranslation } from "react-i18next";
import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import ProductsSection from "../components/ProductsSection";
import CategoriesSection from "../components/CategoriesSection";
import Banner from "../components/banner/banner";
import BrandsSection from "../components/BrandsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FeaturesSection from "../components/FeaturesSection";
import ValuesSection from "../components/ValuesSection";
import TeamSection from "../components/TeamSection";
import CtaSection from "../components/CtaSection";
import BlogSection from "../components/BlogSection";
import HeroCampaignSection from "../components/HeroCampaignSection";
import FeaturedCollectionsSection from "../components/FeaturedCollectionsSection";
import CategoryHighlightsSection from "../components/CategoryHighlightsSection";
import TrendingProductsSection from "../components/TrendingProductsSection";
import PromotionalBannerSection from "../components/PromotionalBannerSection";
import BrandStorySection from "../components/BrandStorySection";

const HomePage = memo(function HomePage() {
  const { t } = useTranslation();
  return (
    <>
      <PageHelmet title={t("home.page.title")} />
      <Hero />
      <HeroCampaignSection />
      <ProductsSection />
      <FeaturedCollectionsSection />
      <CategoriesSection />
      <CategoryHighlightsSection />
      <Banner />
      <TrendingProductsSection />
      <BrandsSection />
      <PromotionalBannerSection />
      <TestimonialsSection />
      <BrandStorySection />
      <ValuesSection />
      <FeaturesSection />
      <TeamSection />
      <CtaSection />
      <BlogSection />
    </>
  );
});

export default HomePage;
