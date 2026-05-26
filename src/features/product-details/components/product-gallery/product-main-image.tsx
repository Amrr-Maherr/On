import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/thumbs";

interface ProductMainImageProps {
  images: string[];
}

const ProductMainImage = memo(function ProductMainImage({ images }: ProductMainImageProps) {
  return (
    <Swiper
      grabCursor
      loop
      modules={[]}
      className="rounded-none bg-card border-2 border-border/40"
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
  );
});

export default ProductMainImage;
