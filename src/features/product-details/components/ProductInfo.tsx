import { memo } from "react";
import { Link } from "react-router-dom";

interface ProductInfoProps {
  title: string;
  brandName?: string;
  brandSlug?: string;
  brandId?: string;
}

const ProductInfo = memo(function ProductInfo({ title, brandName, brandSlug, brandId }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-3xl font-light leading-tight tracking-tight md:text-4xl lg:text-5xl">
        {title}
      </h1>
      {brandName && (
        <p className="mt-2 text-sm text-muted-foreground">
          by{" "}
          {brandSlug && brandId ? (
            <Link
              to={`/brands/${brandSlug}/${brandId}`}
              className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-foreground/70"
            >
              {brandName}
            </Link>
          ) : (
            <span className="font-medium text-foreground">{brandName}</span>
          )}
        </p>
      )}
    </div>
  );
});

export default ProductInfo;
