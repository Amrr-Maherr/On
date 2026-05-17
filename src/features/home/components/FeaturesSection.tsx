import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Truck, RotateCcw, Globe, Shield } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import FeatureCard from "./FeatureCard";
import type { FeatureItem } from "../types";

const featuresData: FeatureItem[] = [
  {
    title: "home.sections.features.freeShipping.title",
    description: "home.sections.features.freeShipping.description",
    icon: Truck,
  },
  {
    title: "home.sections.features.easyReturn.title",
    description: "home.sections.features.easyReturn.description",
    icon: RotateCcw,
  },
  {
    title: "home.sections.features.worldwideDelivery.title",
    description: "home.sections.features.worldwideDelivery.description",
    icon: Globe,
  },
  {
    title: "home.sections.features.refundsPolicy.title",
    description: "home.sections.features.refundsPolicy.description",
    icon: Shield,
  },
];

const FeaturesSection = memo(function FeaturesSection() {
  const { t } = useTranslation();

  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-14 md:mb-18">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
              {t("home.sections.features.label")}
            </span>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
              <h2 className="text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-7xl">
                {t("home.sections.features.title")}
              </h2>
              <p className="text-sm font-black uppercase tracking-[0.2em] text-muted-foreground/40">
                {t("home.sections.features.description")}
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <FeatureCard
                  title={t(feature.title)}
                  description={t(feature.description)}
                  icon={feature.icon}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default FeaturesSection;
