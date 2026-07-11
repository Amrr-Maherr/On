import { memo, type ReactNode } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { cn } from "@/lib/utils";

type ErrorStateProps = {
  title?: string;
  message?: string;
  error?: unknown;
  onRetry?: () => void;
  retryLabel?: string;
  icon?: ReactNode;
  className?: string;
};

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

const ErrorState = memo(function ErrorState({
  title = "Something went wrong",
  message,
  error,
  onRetry,
  retryLabel = "Try Again",
  icon,
  className,
}: ErrorStateProps) {
  const displayMessage = message || (error ? getErrorMessage(error) : undefined);

  return (
    <div
      className={cn(
        "flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 text-center",
        className,
      )}
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        {icon || <AlertTriangle className="h-8 w-8 text-destructive" />}
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">{title}</h3>
        <p className="mt-2 text-sm text-muted-foreground/70 max-w-xs">
          {displayMessage || "An unexpected error occurred."}
        </p>
      </div>
      {onRetry && (
        <button
          onClick={onRetry}
          className="inline-flex items-center gap-2 rounded-none border border-border/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted/30 active:scale-[0.98]"
        >
          <RefreshCw className="h-4 w-4" />
          {retryLabel}
        </button>
      )}
    </div>
  );
});

export default ErrorState;
