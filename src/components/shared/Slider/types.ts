import type { ReactNode } from "react";
import type { SwiperOptions } from "swiper/types";
import {
  Pagination,
  Autoplay,
  Navigation,
  EffectFade,
  Virtual,
} from "swiper/modules";

export interface SliderProps {
  children: ReactNode;
  slidesPerView?: number;
  slidesPerViewMobile?: number;
  spaceBetween?: number;
  className?: string;
  swiperOptions?: SwiperOptions;
  modules?: (
    | typeof Pagination
    | typeof Autoplay
    | typeof Navigation
    | typeof EffectFade
    | typeof Virtual
  )[];
  useFadeEffect?: boolean;
  hideNavigation?: boolean;
}
