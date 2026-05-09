interface ProductInfoProps {
  title: string;
  brandName?: string;
}

export default function ProductInfo({ title, brandName }: ProductInfoProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold leading-tight md:text-3xl">{title}</h1>
      {brandName && (
        <p className="mt-1 text-sm text-muted-foreground">by {brandName}</p>
      )}
    </div>
  );
}
