import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Star } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { testimonialsData } from "../utils/testimonials";
import CardImage from "@/components/shared/CardImage";

import "swiper/css";
import "swiper/css/pagination";

const TestimonialsSection = memo(function TestimonialsSection() {
  const { t } = useTranslation();

  return (
    <section className="section-py overflow-hidden bg-muted/10">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-14 border-l-8 border-foreground pl-6 md:mb-18">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
              {t("home.sections.testimonials.label")}
            </span>
            <h2 className="font-heading mt-4 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              {t("home.sections.testimonials.titleLine1")}<br />{t("home.sections.testimonials.titleLine2")}
            </h2>
          </div>

          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-16"
          >
            {testimonialsData.map((item) => (
              <SwiperSlide key={item.name}>
                <div className="group flex flex-col gap-6">
                  <div className="overflow-hidden rounded-none bg-muted/20">
                    <CardImage
                      className="aspect-[4/5] w-full transition-all duration-500 group-hover:scale-[1.05]"
                      src={item.avatar}
                      alt={item.name}
                      width={400}
                      height={500}
                    />
                  </div>
                  <div className="flex flex-col gap-3">
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/70">
                      &ldquo;{item.quote}&rdquo;
                    </p>
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }, (_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={
                            i < item.rating
                              ? "fill-amber-400 text-amber-400"
                              : "text-muted-foreground/20"
                          }
                        />
                      ))}
                    </div>
                    <div>
                      <h3 className="text-sm font-black uppercase tracking-tight text-foreground">
                        {item.name}
                      </h3>
                      <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default TestimonialsSection;
