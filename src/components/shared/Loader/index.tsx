import { memo } from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const sizeMap = {
  sm: "h-5 w-5 border-[1.5px]",
  md: "h-8 w-8 border-2",
  lg: "h-10 w-10 border-[2.5px]",
};

const Loader = memo(function Loader({ size = "md", className, text }: LoaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-5 min-h-[60vh] w-full",
        className,
      )}
    >
      <div
        className={cn(
          "rounded-full border-foreground/10 border-t-foreground/40 animate-spin",
          sizeMap[size],
        )}
      />
      {text && (
        <p className="text-sm font-semibold text-muted-foreground/50 uppercase tracking-wider">{text}</p>
      )}
    </div>
  );
});

export default Loader;
