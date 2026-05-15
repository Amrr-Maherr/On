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
          <div className="mb-12 md:mb-16">
            <div className="flex flex-col gap-2">
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
                Collection
              </span>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-3">
                <h2 className="text-4xl font-light tracking-tight text-foreground md:text-5xl lg:text-6xl">
                  {title}
                </h2>
                {description && (
                  <p className="text-lg text-muted-foreground/80 md:text-xl">
                    {description}
                  </p>
                )}
              </div>
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
