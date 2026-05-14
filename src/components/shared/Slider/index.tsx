import { useRef, useMemo, memo, useCallback, Children } from "react";
import { Swiper, SwiperSlide, type SwiperRef } from "swiper/react";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
  Virtual,
} from "swiper/modules";

import NavigationButton from "./NavigationButton";
import type { SliderProps } from "./types";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";

const Slider = memo(function Slider({
  children,
  slidesPerView = 4,
  slidesPerViewMobile = 1,
  spaceBetween = 20,
  className,
  swiperOptions = {},
  modules = [Pagination, Autoplay],
  useFadeEffect = false,
  hideNavigation = true,
}: SliderProps) {
  const swiperRef = useRef<SwiperRef>(null);

  const effect = useMemo(
    () => (useFadeEffect ? "fade" : "slide"),
    [useFadeEffect],
  );

  const activeModules = useMemo(
    () =>
      useFadeEffect
        ? [...modules, EffectFade, Navigation, Virtual]
        : [...modules, Navigation, Virtual],
    [modules, useFadeEffect],
  );

  const autoplayConfig = useMemo(
    () => ({
      delay: 4000,
      disableOnInteraction: false,
      pauseOnMouseEnter: true,
    }),
    [],
  );

  const breakpointsConfig = useMemo(
    () => ({
      640: { slidesPerView: Math.min(slidesPerView, 2), spaceBetween },
      768: { slidesPerView: Math.min(slidesPerView, 3), spaceBetween },
      1024: { slidesPerView, spaceBetween },
      ...swiperOptions.breakpoints,
    }),
    [slidesPerView, spaceBetween, swiperOptions.breakpoints],
  );

  const slides = useMemo(
    () =>
      Children.map(children, (child, index) => (
        <SwiperSlide key={index} virtualIndex={index}>
          {child}
        </SwiperSlide>
      )),
    [children],
  );

  const handlePrev = useCallback(() => {
    const swiper = swiperRef.current;
    if (swiper?.swiper) {
      swiper.swiper.slidePrev();
    }
  }, []);

  const handleNext = useCallback(() => {
    const swiper = swiperRef.current;
    if (swiper?.swiper) {
      swiper.swiper.slideNext();
    }
  }, []);

  return (
    <div className="relative">
      <Swiper
        ref={swiperRef}
        slidesPerView={slidesPerViewMobile}
        spaceBetween={spaceBetween}
        autoplay={autoplayConfig}
        loop={swiperOptions.loop ?? false}
        pagination={swiperOptions.pagination ?? false}
        speed={swiperOptions.speed ?? 800}
        effect={effect}
        fadeEffect={useFadeEffect ? { crossFade: true } : undefined}
        modules={activeModules}
        breakpoints={breakpointsConfig}
        grabCursor={true}
        allowSlideNext={true}
        allowSlidePrev={true}
        virtual={true}
        className={`mySwiper ${className || ""}`}
        {...swiperOptions}
      >
        {slides}
      </Swiper>

      {!hideNavigation && (
        <>
          <NavigationButton
            direction="prev"
            onClick={handlePrev}
            ariaLabel="Previous slide"
          />
          <NavigationButton
            direction="next"
            onClick={handleNext}
            ariaLabel="Next slide"
          />
        </>
      )}
    </div>
  );
});

export default Slider;
