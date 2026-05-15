import { memo } from "react";
import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ErrorStateProps {
  title?: string;
  message?: string;
  error?: unknown;
  onRetry?: () => void;
  className?: string;
}

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
  className,
}: ErrorStateProps) {
  const displayMessage = message || (error ? getErrorMessage(error) : undefined);

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4 py-16 text-center",
        className,
      )}
    >
      <AlertTriangle className="h-12 w-12 text-destructive" />
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {displayMessage || "An unexpected error occurred. Please try again."}
        </p>
      </div>
      {onRetry && (
        <Button variant="outline" size="sm" onClick={onRetry} className="gap-2">
          <RefreshCw className="h-4 w-4" />
          Try Again
        </Button>
      )}
    </div>
  );
});

export default ErrorState;
