import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import ScrollReveal from "@/components/shared/ScrollReveal";
import HeroBackground from "./HeroBackground";

const Hero = memo(function Hero() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <HeroBackground />

      <ScrollReveal className="container-layout relative z-10 w-full" distance={40}>
        <div className="max-w-2xl">
          <span className="mb-6 inline-block text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
            {t("home.hero.badge")}
          </span>
          <h1 className="font-heading text-7xl font-black uppercase leading-[0.85] tracking-tighter text-foreground md:text-9xl lg:text-[10rem]">
            {t("home.hero.titleLine1")}
            <br />
            {t("home.hero.titleLine2")}
          </h1>
          <p className="mt-8 max-w-md text-base font-bold uppercase tracking-widest text-muted-foreground/70 md:text-lg">
            {t("home.hero.description")}
          </p>
          <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Button
              data-tour="hero-cta"
              onClick={() => navigate(buildLocalizedPath("/products", lang))}
              className="h-16 w-full cursor-pointer rounded-none bg-foreground px-10 text-xs font-black uppercase tracking-[0.3em] text-background transition-all duration-500 hover:bg-foreground/90 active:scale-[0.98] sm:w-auto"
            >
              {t("home.hero.cta")}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate(buildLocalizedPath("/categories", lang))}
              className="h-16 w-full cursor-pointer rounded-none border-2 border-foreground px-10 text-xs font-black uppercase tracking-[0.3em] text-foreground transition-all duration-500 hover:bg-foreground hover:text-background active:scale-[0.98] sm:w-auto"
            >
              {t("home.hero.secondaryCta")}
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default Hero;
