import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

interface ProductInfoProps {
  title: string;
  brandName?: string;
  brandSlug?: string;
  brandId?: string;
}

const ProductInfo = memo(function ProductInfo({ title, brandName, brandSlug, brandId }: ProductInfoProps) {
  const { t } = useTranslation();
  return (
    <div className="border-l-8 border-foreground pl-6">
      <h1 className="text-4xl font-black uppercase leading-[0.9] tracking-tighter md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {brandName && (
        <div className="mt-4 flex items-center gap-3">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">{t("products.details.info.brand")}</span>
          {brandSlug && brandId ? (
            <Link
              to={`/brands/${brandSlug}/${brandId}`}
              className="text-xs font-black uppercase tracking-widest text-foreground transition-all hover:translate-x-1"
            >
              {brandName}
            </Link>
          ) : (
            <span className="text-xs font-black uppercase tracking-widest text-foreground">{brandName}</span>
          )}
        </div>
      )}
    </div>
  );
});

export default ProductInfo;
