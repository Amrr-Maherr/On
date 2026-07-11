import { useState, useCallback, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import CardImage from "@/components/shared/CardImage";
import AddToCart from "./actions/AddToCart";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import type { Product } from "@/features/products/types";

type QuickViewDialogProps = {
  product: Product;
};

export default function QuickViewDialog({ product }: QuickViewDialogProps) {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const handleTriggerClick = useCallback((e: MouseEvent) => {
    e.stopPropagation();
    e.preventDefault();
  }, []);

  const handleViewDetails = useCallback(() => {
    setOpen(false);
    navigate(buildLocalizedPath(`/products/${product.slug}/${product.id}`, lang));
  }, [navigate, product.slug, product.id, lang]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
        className="max-w-full sm:max-w-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex max-h-[85vh] flex-col gap-4 overflow-y-auto sm:flex-row">
          <div className="w-full shrink-0 overflow-hidden sm:w-1/2">
            <CardImage
              src={product.imageCover}
              alt={product.title}
              width={600}
              height={800}
              className="aspect-[3/4] w-full"
            />
          </div>

          <div className="flex w-full min-w-0 flex-col gap-4 sm:w-1/2">
            <DialogTitle className="text-sm font-black uppercase tracking-tight">
              {product.title}
            </DialogTitle>
            <DialogDescription>
              {product.description}
            </DialogDescription>

            <div className="flex items-center gap-4 text-xs text-muted-foreground/60">
              <span className="inline-flex items-center gap-1 font-bold uppercase tracking-widest">
                &#9733; {product.ratingsAverage || "—"}
              </span>
              <span className="font-bold uppercase tracking-widest">
                {product.sold} {t("products.card.sold")}
              </span>
              {product.brand && (
                <span className="font-bold uppercase tracking-widest">
                  {product.brand.name}
                </span>
              )}
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-baseline gap-2">
                <span className="text-lg font-black tracking-tight text-foreground">
                  ${product.priceAfterDiscount ?? product.price}
                </span>
                {product.priceAfterDiscount && (
                  <span className="text-xs text-muted-foreground/40 line-through">
                    ${product.price}
                  </span>
                )}
              </div>

              <AddToCart productId={product.id} />
            </div>

            <button
              type="button"
              onClick={handleViewDetails}
              className="inline-flex items-center justify-center gap-2 border-2 border-border/40 bg-transparent px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-foreground transition-all duration-300 hover:border-foreground hover:bg-muted/30"
            >
              {t("products.actions.viewDetails")}
            </button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
