import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

interface ProductImagesProps {
  images: string[];
  selectedImage: string;
  onSelectImage: (image: string) => void;
}

export default function ProductImages({ images, selectedImage, onSelectImage }: ProductImagesProps) {
  return (
    <div className="space-y-4">
      <div className="overflow-hidden rounded-xl bg-card ring-1 ring-foreground/10">
        <LazyLoadImage
          src={selectedImage}
          alt=""
          className="aspect-square w-full object-cover"
          effect="blur"
        />
      </div>
      {images.length > 1 && (
        <div className="flex gap-2 overflow-x-auto">
          {images.map((img) => (
            <button
              key={img}
              onClick={() => onSelectImage(img)}
              className={`shrink-0 overflow-hidden rounded-lg ring-1 transition-all ${
                selectedImage === img
                  ? "ring-primary ring-2"
                  : "ring-foreground/10"
              }`}
            >
              <LazyLoadImage
                src={img}
                alt=""
                className="h-20 w-20 object-cover"
                effect="blur"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
