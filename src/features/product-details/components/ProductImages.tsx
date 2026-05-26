import { memo } from "react";

interface ProductImagesProps {
  images: string[];
  selectedImage: string;
  onSelectImage: (image: string) => void;
}

const ProductImages = memo(function ProductImages({ images, selectedImage, onSelectImage }: ProductImagesProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <img
          src={selectedImage}
          alt=""
          loading="lazy"
          className="aspect-square w-full object-cover"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => onSelectImage(img)}
              className={`shrink-0 overflow-hidden rounded-none ring-1 transition-all ${
                selectedImage === img
                  ? "ring-primary ring-2"
                  : "ring-foreground/10"
              }`}
            >
              <img
                src={img}
                alt=""
                loading="lazy"
                className="h-20 w-20 object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
});

export default ProductImages;
