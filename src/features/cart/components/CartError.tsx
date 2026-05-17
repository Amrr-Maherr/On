import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface CartErrorProps {
  message?: string;
  onRetry?: () => void;
}

const CartError = memo(function CartError({ message, onRetry }: CartErrorProps) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-8 w-8 text-destructive" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">{t("cart.error.title")}</h3>
        <p className="mt-2 text-sm text-muted-foreground/70 max-w-xs">
          {message || t("cart.error.defaultMessage")}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted/30 active:scale-[0.98]"
        >
          <RefreshCw className="h-4 w-4" />
          {t("cart.error.retry")}
        </button>
      )}
    </div>
  );
});

export default CartError;