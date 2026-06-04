import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight, Shield, Truck, RefreshCw } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";
import CardImage from "@/components/shared/CardImage";

const BrandStorySection = memo(function BrandStorySection() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();

  const stats = [
    { label: t("home.sections.brandStory.statYears"), value: "12+" },
    { label: t("home.sections.brandStory.statAthletes"), value: "500+" },
    { label: t("home.sections.brandStory.statCountries"), value: "80+" },
  ];

  const features = [
    {
      icon: Shield,
      title: t("home.sections.brandStory.featureQuality"),
      description: t("home.sections.brandStory.featureQualityDesc"),
    },
    {
      icon: Truck,
      title: t("home.sections.brandStory.featureDelivery"),
      description: t("home.sections.brandStory.featureDeliveryDesc"),
    },
    {
      icon: RefreshCw,
      title: t("home.sections.brandStory.featureReturns"),
      description: t("home.sections.brandStory.featureReturnsDesc"),
    },
  ];

  return (
    <section className="section-py bg-muted/30">
      <div className="container-layout">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal direction="left" distance={60}>
            <div className="relative">
              <div className="overflow-hidden rounded-none">
                <CardImage
                  src="https://images.unsplash.com/photo-1511556532299-8f662fc26c06?auto=format&fit=crop&w=1200&q=80"
                  alt={t("home.sections.brandStory.label")}
                  className="h-[500px] w-full transition-all duration-700 hover:scale-105 md:h-[600px]"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden rounded-none bg-background p-6 shadow-2xl lg:block">
                <div className="flex items-center gap-4">
                  <div className="text-4xl font-black text-foreground">
                    50K+
                  </div>
                  <div className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {t("home.sections.brandStory.happyCustomers")}
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" distance={60}>
            <div className="border-l-8 border-foreground pl-10">
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
                {t("home.sections.brandStory.label")}
              </span>
              <h2 className="font-heading mt-4 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-7xl">
                {t("home.sections.brandStory.titleLine1")}<br />{t("home.sections.brandStory.titleLine2")}
              </h2>
              <p className="mt-8 text-sm font-bold uppercase tracking-widest text-muted-foreground/70">
                {t("home.sections.brandStory.paragraph1")}
              </p>
              <p className="mt-4 text-sm font-bold uppercase tracking-widest text-muted-foreground/70">
                {t("home.sections.brandStory.paragraph2")}
              </p>

              <div className="mt-12 grid grid-cols-3 gap-6 border-y-2 border-border/40 py-10">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-black tracking-tighter text-foreground">
                      {stat.value}
                    </div>
                    <div className="mt-1 text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center">
                <Button
                  onClick={() => navigate(buildLocalizedPath("/products", lang))}
                  className="h-16 w-full cursor-pointer rounded-none bg-foreground px-10 text-[10px] font-black uppercase tracking-[0.3em] text-background transition-all duration-500 hover:bg-foreground/90 active:scale-[0.98] sm:w-auto"
                >
                  {t("home.sections.brandStory.ourGear")}
                  <ArrowRight className="ml-3 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-3">
                {features.map((feat) => (
                  <div key={feat.title} className="flex items-start gap-3">
                    <feat.icon className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                    <div>
                      <div className="text-sm font-semibold text-foreground">
                        {feat.title}
                      </div>
                      <div className="text-xs text-muted-foreground/60">
                        {feat.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <Button
                  onClick={() => navigate(buildLocalizedPath("/about", lang))}
                  className="h-12 cursor-pointer rounded-none bg-foreground px-8 text-sm font-semibold text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
                >
                  {t("home.sections.brandStory.learnStory")}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

export default BrandStorySection;
