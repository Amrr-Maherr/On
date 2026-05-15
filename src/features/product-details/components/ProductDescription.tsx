import { memo } from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = memo(function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        Description
      </h3>
      <div className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line md:text-base">
        {description}
      </div>
    </div>
  );
});

export default ProductDescription;
