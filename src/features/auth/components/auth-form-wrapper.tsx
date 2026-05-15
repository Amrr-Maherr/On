import { memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface AuthFormWrapperProps {
  children: ReactNode;
  className?: string;
}

const AuthFormWrapper = memo(function AuthFormWrapper({
  children,
  className,
}: AuthFormWrapperProps) {
  return (
    <div
      className={cn(
        "w-full max-w-md rounded-xl bg-card p-6 ring-1 ring-foreground/10 sm:p-8",
        className,
      )}
    >
      {children}
    </div>
  );
});

export default AuthFormWrapper;
