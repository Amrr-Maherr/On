"use client";

import { useState, useCallback } from "react";
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

export default function ProductGallery({ images }: ProductGalleryProps) {
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
      <div className="space-y-4">
        <div className="relative group">
          <Swiper
            onSlideChange={handleSlideChange}
            thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
            modules={[FreeMode, Thumbs]}
            grabCursor
            loop
            className="overflow-hidden rounded-2xl bg-card ring-1 ring-foreground/5"
          >
            {images.map((img) => (
              <SwiperSlide key={img}>
                <img
                  src={img}
                  alt=""
                  loading="lazy"
                  className="aspect-square w-full object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            type="button"
            onClick={openLightbox}
            aria-label="Open image in fullscreen"
            className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-background/80 backdrop-blur-sm text-foreground/60 opacity-0 transition-all duration-200 hover:bg-background hover:text-foreground group-hover:opacity-100"
          >
            <Expand className="h-4 w-4" />
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
                    className="h-16 w-16 object-cover sm:h-20 sm:w-20"
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
}
