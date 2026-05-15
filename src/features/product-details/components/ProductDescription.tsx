import { memo } from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = memo(function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
        Description
      </h3>
      <div className="text-sm leading-relaxed text-muted-foreground/80 whitespace-pre-line md:text-base">
        {description}
      </div>
    </div>
  );
});

export default ProductDescription;
