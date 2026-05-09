interface ProductDescriptionProps {
  description: string;
}

export default function ProductDescription({ description }: ProductDescriptionProps) {
  return (
    <div>
      <h3 className="mb-2 text-sm font-semibold">Description</h3>
      <p className="text-sm leading-relaxed text-muted-foreground whitespace-pre-line">
        {description}
      </p>
    </div>
  );
}
