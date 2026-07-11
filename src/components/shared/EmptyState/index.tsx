import { memo, type ReactNode } from "react";
import { PackageOpen } from "lucide-react";
import { cn } from "@/lib/utils";

type EmptyStateProps = {
  title?: string;
  description?: string;
  action?: ReactNode;
  icon?: ReactNode;
  className?: string;
};

const EmptyState = memo(function EmptyState({
  title = "Nothing here yet",
  description,
  action,
  icon,
  className,
}: EmptyStateProps) {
  return (
    <div
      className={cn(
        "flex min-h-[40vh] flex-col items-center justify-center gap-6 px-6 py-16 text-center",
        className,
      )}
    >
      <div className="flex h-20 w-20 items-center justify-center rounded-full bg-muted/30">
        {icon || <PackageOpen className="h-9 w-9 text-muted-foreground/40" />}
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground">{title}</h3>
        {description && (
          <p className="mt-2 text-sm text-muted-foreground/70 max-w-sm">
            {description}
          </p>
        )}
      </div>
      {action}
    </div>
  );
});

export default EmptyState;
