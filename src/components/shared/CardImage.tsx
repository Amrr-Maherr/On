import { memo, useState, useCallback } from "react";

type CardImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: "cover" | "contain";
};

const CardImage = memo(function CardImage({
  src,
  alt,
  className = "",
  width = 400,
  height = 400,
  priority = false,
  objectFit = "cover",
}: CardImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleLoad = useCallback(() => setIsLoaded(true), []);
  const handleError = useCallback(() => {
    setHasError(true);
    setIsLoaded(true);
  }, []);

  if (hasError) {
    return (
      <div
        className={`flex items-center justify-center bg-muted/20 ${className}`}
      >
        <span className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/40">
          Failed to load
        </span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-muted/30" />
      )}
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding="async"
        onLoad={handleLoad}
        onError={handleError}
        className={`h-full w-full transition-opacity duration-500 ${
          objectFit === "contain" ? "object-contain" : "object-cover"
        } ${isLoaded ? "opacity-100" : "animate-pulse bg-gray-200 dark:bg-gray-700"}`}
      />
    </div>
  );
});

export default CardImage;
