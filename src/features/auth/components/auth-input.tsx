import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
}

const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, className, id, ...props }, ref) => {
    const inputId = id || label.toLowerCase().replace(/\s+/g, "-");

    return (
      <div className="space-y-1.5">
        <label
          htmlFor={inputId}
          className="text-sm text-muted-foreground/80"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-12 w-full rounded-2xl border border-border/60 bg-transparent px-4 text-sm text-foreground transition-all duration-200 placeholder:text-muted-foreground/40 focus:border-foreground/40 focus:outline-none",
            error && "border-destructive/60",
            className,
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className="mt-1 text-xs text-destructive/80" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
