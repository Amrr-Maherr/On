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
        "w-full max-w-[440px]",
        className,
      )}
    >
      {children}
    </div>
  );
});

export default AuthFormWrapper;
