import { AlertTriangle, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryDetailsErrorProps {
  message?: string;
  onRetry?: () => void;
}

export default function CategoryDetailsError({
  message,
  onRetry,
}: CategoryDetailsErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <AlertTriangle className="h-12 w-12 text-destructive" />
      <div>
        <h3 className="text-lg font-semibold">Something went wrong</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          {message || "An unexpected error occurred. Please try again."}
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
}
