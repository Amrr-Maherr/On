import { memo, useCallback } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import ScrollReveal from "@/components/shared/ScrollReveal";
import image from "../../../assets/imgi_1_eg-mr-em-TERRACE_LOWPROFILE-hp-tc-d.jpg";
const HeroCampaignSection = memo(function HeroCampaignSection() {
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

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-neutral-950 md:mt-[50px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent md:bg-gradient-to-r md:from-neutral-950/80 md:via-neutral-950/40 md:to-transparent" />
      </div>

      <div className="container-layout relative z-10 flex min-h-[80vh] items-center pt-20 md:pt-0">
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
      </div>
    </section>
  );
});

export default HeroCampaignSection;
