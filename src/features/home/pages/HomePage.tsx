import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import Hero from "@/components/layout/Hero";
import LazyLoad from "@/shared/components/LazyLoad";
import ScrollReveal from "@/components/shared/ScrollReveal";
import HeroCampaignSection from "../components/HeroCampaignSection";
import heroCampaignBg1 from "../../../assets/imgi_1_eg-mr-em-TERRACE_LOWPROFILE-hp-tc-d.jpg";
import heroCampaignBg2 from "../../../assets/imgi_2_men-s-shoes-clothing-accessories.jpeg";
import heroCampaignBg3 from "../../../assets/imgi_3_men-s-shoes-clothing-accessories.jpeg";
import { TrendingProductsSectionSkeleton } from "../components/TrendingProductsSectionSkeleton";
import { ProductsSectionSkeleton } from "../components/ProductsSectionSkeleton";
import { CategoriesSectionSkeleton } from "../components/CategoriesSectionSkeleton";
import { BrandsSectionSkeleton } from "../components/BrandsSectionSkeleton";

const HomePage = memo(function HomePage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();
  const handleShopNow = useCallback(
    () => navigate(buildLocalizedPath("/products", lang)),
    [navigate, lang],
  );
  const handleExploreCollections = useCallback(
    () => navigate(buildLocalizedPath("/categories", lang)),
    [navigate, lang],
  );

  const heroCampaignContent1 = (
    <div className="max-w-4xl">
      <ScrollReveal direction="up" distance={40}>
        <span className="inline-block border-l-4 border-white pl-4 text-xs font-black uppercase tracking-[0.3em] text-white">
          {t("home.sections.heroCampaign.badge")}
        </span>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.15}>
        <h1 className="mt-8 text-7xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[10rem]">
          {t("home.sections.heroCampaign.title")}
          <br />
          <span className="text-white/60">
            {t("home.sections.heroCampaign.titleAccent")}
          </span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.3}>
        <p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-white/80 md:text-xl">
          {t("home.sections.heroCampaign.description")} <br />
          {t("home.sections.heroCampaign.descriptionAccent")}
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.45}>
        <div className="mt-12 flex flex-wrap gap-5">
          <button
            onClick={handleShopNow}
            className="flex h-16 items-center justify-center bg-white px-12 text-sm font-black uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:bg-neutral-200 active:scale-[0.97]"
          >
            {t("home.sections.heroCampaign.shopNow")}
          </button>
          <button
            onClick={handleExploreCollections}
            className="flex h-16 items-center justify-center border-2 border-white/40 bg-transparent px-12 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.97]"
          >
            {t("home.sections.heroCampaign.explore")}
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.6}>
        <div className="mt-16 flex items-center gap-8 text-white/50">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">200+</span>
            <span className="text-xs uppercase tracking-wider">
              {t("home.sections.heroCampaign.statProducts")}
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">50+</span>
            <span className="text-xs uppercase tracking-wider">
              {t("home.sections.heroCampaign.statBrands")}
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">10K+</span>
            <span className="text-xs uppercase tracking-wider">
              {t("home.sections.heroCampaign.statCustomers")}
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  const heroCampaignContent2 = (
    <div className="max-w-4xl">
      <ScrollReveal direction="up" distance={40}>
        <span className="inline-block border-l-4 border-white pl-4 text-xs font-black uppercase tracking-[0.3em] text-white">
          New Collection
        </span>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.15}>
        <h1 className="mt-8 text-7xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[10rem]">
          Run
          <br />
          <span className="text-white/60">Faster</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.3}>
        <p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-white/80 md:text-xl">
          Engineered for speed and comfort. <br />
          Push your limits with our latest running gear.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.45}>
        <div className="mt-12 flex flex-wrap gap-5">
          <button
            onClick={handleShopNow}
            className="flex h-16 items-center justify-center bg-white px-12 text-sm font-black uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:bg-neutral-200 active:scale-[0.97]"
          >
            Shop Running
          </button>
          <button
            onClick={handleExploreCollections}
            className="flex h-16 items-center justify-center border-2 border-white/40 bg-transparent px-12 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.97]"
          >
            View Catalog
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.6}>
        <div className="mt-16 flex items-center gap-8 text-white/50">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">150+</span>
            <span className="text-xs uppercase tracking-wider">
              Running Shoes
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">30+</span>
            <span className="text-xs uppercase tracking-wider">
              Pro Athletes
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">5K+</span>
            <span className="text-xs uppercase tracking-wider">
              Reviews
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  const heroCampaignContent3 = (
    <div className="max-w-4xl">
      <ScrollReveal direction="up" distance={40}>
        <span className="inline-block border-l-4 border-white pl-4 text-xs font-black uppercase tracking-[0.3em] text-white">
          Game Day
        </span>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.15}>
        <h1 className="mt-8 text-7xl font-black leading-[0.85] tracking-tighter text-white sm:text-8xl md:text-9xl lg:text-[10rem]">
          Play
          <br />
          <span className="text-white/60">Like a Pro</span>
        </h1>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.3}>
        <p className="mt-8 max-w-md text-lg font-medium leading-relaxed text-white/80 md:text-xl">
          Dominate the pitch with professional-grade football kits. <br />
          Built for champions.
        </p>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.45}>
        <div className="mt-12 flex flex-wrap gap-5">
          <button
            onClick={handleShopNow}
            className="flex h-16 items-center justify-center bg-white px-12 text-sm font-black uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:bg-neutral-200 active:scale-[0.97]"
          >
            Shop Football
          </button>
          <button
            onClick={handleExploreCollections}
            className="flex h-16 items-center justify-center border-2 border-white/40 bg-transparent px-12 text-sm font-black uppercase tracking-[0.2em] text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.97]"
          >
            See Teams
          </button>
        </div>
      </ScrollReveal>

      <ScrollReveal direction="up" distance={40} delay={0.6}>
        <div className="mt-16 flex items-center gap-8 text-white/50">
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">80+</span>
            <span className="text-xs uppercase tracking-wider">
              Kits Available
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">25+</span>
            <span className="text-xs uppercase tracking-wider">
              Club Partners
            </span>
          </div>
          <div className="h-8 w-px bg-white/20" />
          <div className="flex items-center gap-3">
            <span className="text-2xl font-bold text-white">100K+</span>
            <span className="text-xs uppercase tracking-wider">
              Fans
            </span>
          </div>
        </div>
      </ScrollReveal>
    </div>
  );

  return (
    <>
      <PageHelmet title={t("home.page.title")} />
      <Hero />
      <HeroCampaignSection image={heroCampaignBg1}>
        {heroCampaignContent1}
      </HeroCampaignSection>
      <LazyLoad
        load={() => import("../components/ProductsSection")}
        fallback={<ProductsSectionSkeleton />}
        rootMargin="0px 0px 100px 0px"
      />
      <LazyLoad
        load={() => import("../components/FeaturedCollectionsSection")}
      />
      <LazyLoad
        load={() => import("../components/CategoriesSection")}
        fallback={<CategoriesSectionSkeleton />}
      />
      <LazyLoad
        load={() => import("../components/CategoryHighlightsSection")}
      />
      <HeroCampaignSection image={heroCampaignBg2}>
        {heroCampaignContent2}
      </HeroCampaignSection>
      <LazyLoad load={() => import("../components/banner/banner")} />
      <LazyLoad
        load={() => import("../components/TrendingProductsSection")}
        fallback={<TrendingProductsSectionSkeleton />}
      />
      <LazyLoad
        load={() => import("../components/BrandsSection")}
        fallback={<BrandsSectionSkeleton />}
      />
      <LazyLoad load={() => import("../components/PromotionalBannerSection")} />
      <LazyLoad load={() => import("../components/TestimonialsSection")} />
      <HeroCampaignSection image={heroCampaignBg3}>
        {heroCampaignContent3}
      </HeroCampaignSection>
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
