import { memo, type ReactNode } from "react";
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

const Section = memo(function Section({
  title,
  description,
  children,
  slidesPerView,
  slidesPerViewMobile,
  hideNavigation,
}: SectionProps) {
  return (
    <ScrollReveal>
      <section className="section-py">
        <div className="container-layout">
          <div className="mb-14 md:mb-18">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
              Collection
            </span>
            <div className="mt-3 flex flex-col sm:flex-row sm:items-baseline sm:gap-4">
              <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
                {title}
              </h2>
              {description && (
                <p className="text-base text-muted-foreground/70 md:text-lg">
                  {description}
                </p>
              )}
            </div>
          </div>
          <Slider
            hideNavigation={hideNavigation}
            slidesPerView={slidesPerView}
            slidesPerViewMobile={slidesPerViewMobile}
          >
            {children}
          </Slider>
        </div>
      </section>
    </ScrollReveal>
  );
});

export default Section;
