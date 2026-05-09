declare module "react-lazy-load-image-component" {
  import type { FC, ImgHTMLAttributes } from "react";

  interface LazyLoadImageProps extends ImgHTMLAttributes<HTMLImageElement> {
    effect?: "blur" | "black-and-white" | "opacity";
    visibleByDefault?: boolean;
    placeholderSrc?: string;
    wrapperClassName?: string;
    wrapperProps?: Record<string, unknown>;
    threshold?: number;
    beforeLoad?: () => void;
    afterLoad?: () => void;
    useIntersectionObserver?: boolean;
    delayTime?: number;
    delayMethod?: "debounce" | "throttle";
  }

  export const LazyLoadImage: FC<LazyLoadImageProps>;
}
