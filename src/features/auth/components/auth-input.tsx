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
      <div className="space-y-2">
        <label
          htmlFor={inputId}
          className="text-xs font-black uppercase tracking-widest text-foreground/70"
        >
          {label}
        </label>
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none",
            error && "border-destructive",
            className,
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && (
          <p className="mt-1 text-[10px] font-bold uppercase tracking-wider text-destructive" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  },
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
