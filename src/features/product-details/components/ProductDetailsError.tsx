import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductDetailsErrorProps {
  message?: string;
  onRetry?: () => void;
}

const ProductDetailsError = memo(function ProductDetailsError({ message, onRetry }: ProductDetailsErrorProps) {
  const { t } = useTranslation();
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive" />
      <div>
        <h3 className="text-lg font-semibold tracking-tight">{t("products.error.title")}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {message || t("products.error.defaultMessage")}
        </p>
      </div>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          {t("products.error.retry")}
        </Button>
      )}
    </div>
  );
});

export default ProductDetailsError;
