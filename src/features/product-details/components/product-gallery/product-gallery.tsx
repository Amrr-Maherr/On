import { useState, useCallback, memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Expand } from "lucide-react";
import type { SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import ProductLightbox from "./product-lightbox";

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery = memo(function ProductGallery({ images }: ProductGalleryProps) {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperClass | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const handleSlideChange = useCallback((swiper: SwiperClass) => {
    setActiveIndex(swiper.realIndex);
  }, []);

  const openLightbox = useCallback(() => {
    setLightboxIndex(activeIndex);
    setLightboxOpen(true);
  }, [activeIndex]);

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
  }, []);

  const handleLightboxIndexChange = useCallback((index: number) => {
    setLightboxIndex(index);
  }, []);

  if (images.length === 0) return null;

  const slides = images.map((src) => ({ src }));

  return (
    <>
      <div className="space-y-3 sm:space-y-4">
        <div className="group relative overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5">
          <Swiper
            onSlideChange={handleSlideChange}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Thumbs]}
            grabCursor
            loop
            touchRatio={1}
            resistanceRatio={0.5}
            className="bg-card"
          >
            {images.map((img) => (
              <SwiperSlide key={img}>
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full touch-pan-y object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={openLightbox}
            aria-label="Open image in fullscreen"
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground/40 transition-all duration-200 hover:bg-background hover:text-foreground active:scale-90 sm:right-4 sm:top-4 sm:h-9 sm:w-9 sm:opacity-0 sm:group-hover:opacity-100"
          >
            <Expand className="h-4 w-4" strokeWidth={1.5} />
          </button>
        </div>

        {images.length > 1 && (
          <Swiper
            onSwiper={setThumbsSwiper}
            spaceBetween={8}
            slidesPerView="auto"
            freeMode
            watchSlidesProgress
            grabCursor
            modules={[FreeMode, Thumbs]}
            className="!pb-0"
            touchRatio={0.5}
          >
            {images.map((img, index) => (
              <SwiperSlide key={img} className="!w-auto">
                <span
                  className={`block overflow-hidden rounded-xl ring-1 transition-all duration-200 ${
                    index === activeIndex
                      ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      : "ring-foreground/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    className="h-16 w-16 touch-pan-y object-cover sm:h-20 sm:w-20"
                  />
                </span>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <ProductLightbox
        open={lightboxOpen}
        index={lightboxIndex}
        slides={slides}
        onClose={closeLightbox}
        onIndexChange={handleLightboxIndexChange}
      />
    </>
  );
});

export default ProductGallery;
