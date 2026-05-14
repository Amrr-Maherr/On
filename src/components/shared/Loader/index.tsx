import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface LoaderProps {
  size?: "sm" | "md" | "lg";
  className?: string;
  text?: string;
}

const sizeMap = {
  sm: "h-4 w-4",
  md: "h-8 w-8",
  lg: "h-12 w-12",
};

function Loader({ size = "md", className, text }: LoaderProps) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-3 h-screen w-full",
        className,
      )}
    >
      <Loader2
        className={cn("animate-spin text-muted-foreground", sizeMap[size])}
      />
      {text && <p className="text-sm text-muted-foreground">{text}</p>}
    </div>
  );
}

export default Loader;
