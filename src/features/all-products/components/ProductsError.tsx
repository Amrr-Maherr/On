import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductsErrorProps {
  message?: string;
  onRetry?: () => void;
}

const ProductsError = memo(function ProductsError({ message, onRetry }: ProductsErrorProps) {
  const { t } = useTranslation();
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive" />
      <div>
        <h3 className="text-lg font-semibold">{t("products.error.title")}</h3>
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

export default ProductsError;
