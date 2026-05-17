import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ShoppingBag } from "lucide-react";

interface CartSummaryProps {
  totalCartPrice: number;
  numOfCartItems: number;
  onCheckout?: () => void;
}

const CartSummary = memo(function CartSummary({
  totalCartPrice,
  numOfCartItems,
  onCheckout,
}: CartSummaryProps) {
  const { t } = useTranslation();
  return (
    <div className="sticky top-24 border border-border/60 bg-card p-8">
      <h3 className="text-xl font-black uppercase tracking-tight">{t("cart.summary.title")}</h3>

      <div className="mt-8 space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
            {t("cart.summary.items")}
          </span>
          <span className="font-black tabular-nums">{numOfCartItems}</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
            {t("cart.summary.subtotal")}
          </span>
          <span className="font-black tabular-nums">
            {totalCartPrice.toLocaleString()} EGP
          </span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
            {t("cart.summary.shipping")}
          </span>
          <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
            {t("cart.summary.free")}
          </span>
        </div>

        <div className="my-8 border-t border-dashed border-border/60" />

        <div className="flex items-center justify-between">
          <span className="text-lg font-black uppercase tracking-tight">
            {t("cart.summary.total")}
          </span>
          <div className="text-right">
            <span className="text-3xl font-black tracking-tighter tabular-nums text-foreground">
              {totalCartPrice?.toLocaleString()} EGP
            </span>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
              {t("cart.summary.includingVat")}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <button
          data-tour="checkout-button"
          onClick={onCheckout}
          className="flex w-full items-center justify-center gap-3 bg-foreground px-8 py-5 text-sm font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98]"
        >
          {t("cart.summary.checkout")}
          <ShoppingBag className="h-5 w-5" strokeWidth={2.5} />
        </button>
        <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
          {t("cart.summary.securePayment")}
        </p>
      </div>
    </div>
  );
});

export default CartSummary;