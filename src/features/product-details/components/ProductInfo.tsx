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
      <h1 className="text-2xl font-bold leading-tight md:text-3xl lg:text-4xl">
        {title}
      </h1>
      {brandName && (
        <p className="mt-1.5 text-sm text-muted-foreground">
          by{" "}
          {brandSlug && brandId ? (
            <Link
              to={`/brands/${brandSlug}/${brandId}`}
              className="font-medium text-foreground underline underline-offset-2 transition-colors hover:text-primary"
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
