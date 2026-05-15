import { memo } from "react";
import { cn } from "@/lib/utils";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const sizeMap = {
  sm: "h-6 w-6 border-2",
  md: "h-10 w-10 border-[2.5px]",
  lg: "h-14 w-14 border-[3px]",
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
        <p className="text-sm text-muted-foreground/70 tracking-wide">{text}</p>
      )}
    </div>
  );
});

export default Loader;
