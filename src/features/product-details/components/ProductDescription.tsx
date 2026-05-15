import { memo } from "react";

interface ProductDescriptionProps {
  description: string;
}

const ProductDescription = memo(function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h3 className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
        Description
      </h3>
      <p className="text-sm leading-relaxed text-muted-foreground/80 whitespace-pre-line md:text-base">
        {description}
      </p>
    </div>
  );
});

export default ProductDescription;
