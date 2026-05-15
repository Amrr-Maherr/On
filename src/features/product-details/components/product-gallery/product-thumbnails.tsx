import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface ProductThumbnailsProps {
  images: string[];
  activeIndex: number;
  onThumbClick: (index: number) => void;
}

const ProductThumbnails = memo(function ProductThumbnails({
  images,
  activeIndex,
  onThumbClick,
}: ProductThumbnailsProps) {
  return (
    <div className="relative">
      <Swiper
        slidesPerView="auto"
        spaceBetween={8}
        grabCursor
        className="!pb-0"
      >
        {images.map((img, index) => (
          <SwiperSlide key={img} className="!w-auto">
            <button
              type="button"
              onClick={() => onThumbClick(index)}
              className={`overflow-hidden rounded-none transition-all duration-300 ${
                index === activeIndex
                  ? "border-2 border-foreground"
                  : "border-2 border-transparent opacity-60 hover:opacity-100"
              }`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-16 w-16 object-cover sm:h-20 sm:w-20"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
});

export default ProductThumbnails;
