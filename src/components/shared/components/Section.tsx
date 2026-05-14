import type { ReactNode } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import Slider from "../Slider";

interface SectionProps {
  title: string;
  description?: string;
  slidesPerView: number;
  slidesPerViewMobile: number;
  hideNavigation: boolean;
  children: ReactNode;
}

export default function Section({
  title,
  description,
  children,
  slidesPerView,
  slidesPerViewMobile,
  hideNavigation,
}: SectionProps) {
  return (
    <ScrollReveal>
      <section className="container-layout md:py-22">
      <div className="flex items-center justify-start gap-[5px]">
        <h2 className="text-[36px] font-semibold md:mb-[40px]">{title}</h2>
        {description && (
          <p className="text-[36px] font-semibold md:mb-[40px] text-[#4B5563]">
            {description}
          </p>
        )}
      </div>
      <Slider
        hideNavigation={hideNavigation}
        slidesPerView={slidesPerView}
        slidesPerViewMobile={slidesPerViewMobile}
      >
        {children}
      </Slider>
      </section>
    </ScrollReveal>
  );
}
