import { memo } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { featuresData } from "../utils/features";
import FeatureCard from "./FeatureCard";

const FeaturesSection = memo(function FeaturesSection() {
  return (
    <ScrollReveal>
      <section className="container-layout md:py-22">
        <div className="flex items-center justify-start gap-[5px]">
          <h2 className="text-[36px] font-semibold">Start exploring.</h2>
          <p className="text-[36px] font-semibold text-[#4B5563]">
            Good things are waiting for you
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featuresData.map((feature, index) => (
            <ScrollReveal key={feature.title} delay={index * 0.1}>
              <FeatureCard {...feature} />
            </ScrollReveal>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
});

export default FeaturesSection;
