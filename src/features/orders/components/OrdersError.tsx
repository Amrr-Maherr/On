import { memo } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";

interface OrdersErrorProps {
  message?: string;
  onRetry?: () => void;
}

const OrdersError = memo(function OrdersError({ message, onRetry }: OrdersErrorProps) {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertTriangle className="h-8 w-8 text-destructive" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">Something went wrong</h3>
        <p className="mt-2 text-sm text-muted-foreground/70 max-w-xs">
          {message || "Failed to load orders. Please try again."}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted/30 active:scale-[0.98]"
        >
          <RefreshCw className="h-4 w-4" />
          Try Again
        </button>
      )}
    </div>
  );
});

export default OrdersError;
