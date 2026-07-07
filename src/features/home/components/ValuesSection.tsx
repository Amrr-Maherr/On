import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { valuesData } from "../utils/values";
import CardImage from "@/components/shared/CardImage";

import "swiper/css";
import "swiper/css/pagination";

const ValuesSection = memo(function ValuesSection() {
  const { t } = useTranslation();

  return (
    <section className="section-py overflow-hidden">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mb-14 text-center md:mb-18">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
              {t("home.sections.values.label")}
            </span>
            <h2 className="font-heading mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
              {t("home.sections.values.title")}
            </h2>
          </div>
          
          <Swiper
            modules={[Autoplay, Pagination]}
            spaceBetween={32}
            slidesPerView={1}
            pagination={{ clickable: true }}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            className="!pb-16"
          >
            {valuesData.map((value) => (
              <SwiperSlide key={value.title}>
                <div className="group flex flex-col gap-6">
                  <div className="overflow-hidden rounded-none bg-muted/20">
                    <CardImage
                      className="aspect-[4/3] w-full transition-all duration-500 group-hover:scale-[1.05]"
                      src={value.image}
                      alt={value.title}
                      width={400}
                      height={300}
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <h3 className="text-lg font-black uppercase tracking-tight text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-sm font-bold uppercase tracking-widest text-muted-foreground/70">
                      {value.description}
                    </p>
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

export default ValuesSection;
