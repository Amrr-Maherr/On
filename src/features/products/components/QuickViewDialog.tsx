import { useState, useCallback, useMemo, type MouseEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import CardImage from "@/components/shared/CardImage";
import ProductRating from "@/features/product-details/components/ProductRating";
import ProductPrice from "@/features/product-details/components/ProductPrice";
import ProductCategory from "@/features/product-details/components/ProductCategory";
import ProductSubcategories from "@/features/product-details/components/ProductSubcategories";
import AddToCart from "./actions/AddToCart";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import { cn } from "@/lib/utils";
import type { Product } from "@/features/products/types";

type QuickViewDialogProps = {
  product: Product;
};

function DetailRow({ label, value }: { label: string; value: string }) {
  if (!label || !value) return null;

  return (
    <div className="flex items-start justify-between gap-4 border-b border-border/40 py-2 last:border-b-0">
      <span className="shrink-0 pt-0.5 text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/50">
        {label}
      </span>
      <span className="min-w-0 text-right text-xs font-medium text-foreground">
        {value}
      </span>
    </div>
  );
}

function parseDescription(description?: string) {
  const rows: { label: string; value: string }[] = [];
  const notes: string[] = [];

  if (description) {
    for (const line of description.split(/[\r\n]+/)) {
      const cells = line.split("\t").map((cell) => cell.trim()).filter(Boolean);
      if (cells.length > 1) {
        rows.push({ label: cells[0], value: cells.slice(1).join(" ") });
      } else if (cells.length === 1) {
        notes.push(cells[0]);
      }
    }
  }

  return { rows, notes };
}

function formatNumber(value: number | undefined, lang: string) {
  return typeof value === "number" && Number.isFinite(value)
    ? new Intl.NumberFormat(lang).format(value)
    : "";
}

export default function QuickViewDialog({ product }: QuickViewDialogProps) {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

  const handleTriggerClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const handleOpenChange = useCallback((next: boolean) => {
    setOpen(next);
    if (next) setActiveImage(0);
  }, []);

  const handleViewDetails = useCallback(() => {
    setOpen(false);
    navigate(buildLocalizedPath(`/products/${product.slug}/${product.id}`, lang));
  }, [navigate, product.slug, product.id, lang]);

  const handleNavigate = useCallback(() => setOpen(false), []);

  const brand = product.brand;
  const category = product.category;
  const subcategories = Array.isArray(product.subcategory)
    ? product.subcategory
    : [];
  const quantity = product.quantity ?? 0;

  const galleryImages = useMemo(() => {
    const images = Array.isArray(product.images) ? product.images : [];
    return Array.from(new Set([product.imageCover, ...images].filter(Boolean)));
  }, [product.imageCover, product.images]);

  const description = useMemo(
    () => parseDescription(product.description),
    [product.description],
  );

  const descriptionSummary = useMemo(
    () =>
      [
        ...description.rows.map((row) => `${row.label}: ${row.value}`),
        ...description.notes,
      ].join(". "),
    [description],
  );

  const hasDescription = description.rows.length > 0 || description.notes.length > 0;

  const isInStock = quantity > 0;
  const isLowStock = isInStock && quantity <= 10;
  const stockLabel = isInStock
    ? isLowStock
      ? t("products.details.stock.lowStock")
      : t("products.details.stock.inStock")
    : t("products.details.stock.outOfStock");

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogTrigger
        render={
          <button
            type="button"
            onClick={handleTriggerClick}
            aria-label={t("products.actions.quickView")}
            className="flex h-10 w-10 items-center justify-center rounded-none border-2 border-border/20 bg-background/95 text-foreground shadow-xl backdrop-blur-sm transition-all duration-300 hover:border-foreground hover:bg-background active:scale-90"
          />
        }
      >
        <Eye className="h-3.5 w-3.5 text-foreground/70" />
      </DialogTrigger>

      <DialogContent
        className="max-w-full p-5 sm:max-w-4xl sm:p-6"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="max-h-[85vh] overflow-y-auto sm:max-h-[88vh]">
          <div className="grid gap-6 sm:grid-cols-2 sm:gap-8">
            <div className="flex flex-col gap-3">
              <div className="overflow-hidden bg-muted/30">
                <CardImage
                  src={galleryImages[activeImage] ?? galleryImages[0] ?? ""}
                  alt={product.title}
                  width={600}
                  height={800}
                  className="aspect-[4/5] w-full sm:aspect-[3/4]"
                />
              </div>

              {galleryImages.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {galleryImages.map((src, index) => (
                    <button
                      key={src}
                      type="button"
                      onClick={() => setActiveImage(index)}
                      aria-label={t("products.quickView.image", { index: index + 1 })}
                      aria-current={index === activeImage}
                      className={cn(
                        "overflow-hidden border-2 transition-all duration-200",
                        index === activeImage
                          ? "border-foreground"
                          : "border-transparent opacity-60 hover:opacity-100",
                      )}
                    >
                      <CardImage
                        src={src}
                        alt=""
                        width={120}
                        height={120}
                        className="h-14 w-14 sm:h-16 sm:w-16"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="flex min-w-0 flex-col gap-4">
              {brand?.name && (
                <Link
                  to={buildLocalizedPath(`/brands/${brand.slug}/${brand._id}`, lang)}
                  onClick={handleNavigate}
                  className="group inline-flex w-fit items-center gap-3"
                >
                  {brand.image && (
                    <span className="h-10 w-10 shrink-0 overflow-hidden bg-muted/30">
                      <CardImage
                        src={brand.image}
                        alt={brand.name}
                        width={120}
                        height={120}
                        className="h-full w-full"
                      />
                    </span>
                  )}
                  <span className="min-w-0">
                    <span className="block text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                      {t("products.details.brand.label")}
                    </span>
                    <span className="block truncate text-xs font-black uppercase tracking-widest text-foreground transition-colors group-hover:text-foreground/60">
                      {brand.name}
                    </span>
                  </span>
                </Link>
              )}

              <DialogTitle className="text-xl font-black uppercase leading-none tracking-tight sm:text-2xl">
                {product.title}
              </DialogTitle>
              <DialogDescription className="sr-only">
                {descriptionSummary || product.title}
              </DialogDescription>

              <ProductRating
                rating={product.ratingsAverage ?? 0}
                ratingCount={product.ratingsQuantity ?? 0}
                sold={product.sold ?? 0}
              />

              <div className="mt-1 border-t border-border/40 pt-5">
                <ProductPrice
                  price={product.price}
                  priceAfterDiscount={product.priceAfterDiscount}
                />
                <div className="mt-4 flex flex-wrap items-center gap-3">
                  <Badge
                    variant={isInStock ? (isLowStock ? "secondary" : "default") : "destructive"}
                  >
                    {stockLabel}
                  </Badge>
                  <span className="text-xs text-muted-foreground/60">
                    {t("products.details.quantity.available", {
                      count: formatNumber(quantity, lang),
                    })}
                  </span>
                </div>
              </div>

              {hasDescription && (
                <section className="mt-1 border-t border-border/40 pt-5">
                  <h3 className="mb-1 text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/50">
                    {t("products.quickView.details")}
                  </h3>
                  {description.notes.length > 0 && (
                    <p className="py-2 text-sm leading-relaxed whitespace-pre-line text-muted-foreground/80">
                      {description.notes.join("\n")}
                    </p>
                  )}
                  {description.rows.map((row) => (
                    <DetailRow key={row.label} label={row.label} value={row.value} />
                  ))}
                </section>
              )}

              {(category || subcategories.length > 0) && (
                <div className="mt-1 flex flex-col gap-5">
                  {category && (
                    <div onClick={handleNavigate}>
                      <ProductCategory category={category} />
                    </div>
                  )}
                  {subcategories.length > 0 && (
                    <ProductSubcategories subcategories={subcategories} />
                  )}
                </div>
              )}

              <div className="mt-auto flex items-center gap-3 border-t border-border/40 pt-5">
                <AddToCart productId={product.id} />
                <button
                  type="button"
                  onClick={handleViewDetails}
                  className="inline-flex flex-1 items-center justify-center gap-2 border-2 border-border/40 bg-transparent px-4 py-3 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-muted/30"
                >
                  {t("products.actions.viewDetails")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
