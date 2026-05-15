import { memo } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { featuresData } from "../utils/features";
import FeatureCard from "./FeatureCard";

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-12 md:mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
              Why choose us
            </span>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
              <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Start exploring.
              </h2>
              <p className="text-lg text-muted-foreground/80 md:text-xl">
                Good things are waiting for you
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuresData.map((feature, index) => (
              <ScrollReveal key={feature.title} delay={index * 0.1}>
                <FeatureCard {...feature} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default FeaturesSection;
