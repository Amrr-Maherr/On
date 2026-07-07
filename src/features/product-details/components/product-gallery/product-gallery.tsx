import { useState, useCallback, memo, lazy, Suspense } from "react";
import { useTranslation } from "react-i18next";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Thumbs } from "swiper/modules";
import { Expand } from "lucide-react";
import type { SwiperClass } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import CardImage from "@/components/shared/CardImage";

const ProductLightbox = lazy(() => import("./product-lightbox"));

interface ProductGalleryProps {
  images: string[];
}

const ProductGallery = memo(function ProductGallery({ images }: ProductGalleryProps) {
  const { t } = useTranslation();
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
            slidesPerView={1}
            className="bg-card"
          >
            {images.map((img) => (
              <SwiperSlide key={img}>
                <CardImage
                  src={img}
                  alt=""
                  width={400}
                  height={400}
                  className="aspect-square w-full touch-pan-y"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={openLightbox}
            aria-label={t("products.details.gallery.openFullscreen")}
            className="absolute right-3 top-3 z-10 flex h-10 w-10 items-center justify-center rounded-none bg-background/80 backdrop-blur-sm text-muted-foreground/40 transition-all duration-200 hover:bg-background hover:text-foreground active:scale-90 sm:right-4 sm:top-4 sm:opacity-0 sm:group-hover:opacity-100"
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
            touchRatio={1}
            breakpoints={{
              320: { spaceBetween: 6 },
              640: { spaceBetween: 8 },
            }}
          >
            {images.map((img, index) => (
              <SwiperSlide key={img} className="!w-auto">
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className={`block rounded-xl ring-1 transition-all duration-200 ${
                    index === activeIndex
                      ? "ring-2 ring-foreground ring-offset-2 ring-offset-background"
                      : "ring-foreground/5 opacity-60 hover:opacity-100"
                  }`}
                >
                  <CardImage
                    src={img}
                    alt=""
                    className="h-16 w-16 touch-pan-y sm:h-20 sm:w-20 max-sm:h-14 max-sm:w-14"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>

      <Suspense fallback={null}>
        <ProductLightbox
          open={lightboxOpen}
          index={lightboxIndex}
          slides={slides}
          onClose={closeLightbox}
          onIndexChange={handleLightboxIndexChange}
        />
      </Suspense>
    </>
  );
});

export default ProductGallery;
