import { memo } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface NavigationButtonProps {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
}

const NavigationButton = memo(function NavigationButton({
  direction,
  onClick,
  ariaLabel,
}: NavigationButtonProps) {
  return (
    <button
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white min-w-[48px] min-h-[48px] rounded-full opacity-100 transition-all duration-300 backdrop-blur-sm border border-white/20 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 flex items-center justify-center touch-manipulation",
        direction === "prev" ? "left-4" : "right-4",
      )}
      onClick={onClick}
      aria-label={ariaLabel}
    >
      {direction === "prev" ? (
        <ChevronLeft className="h-6 w-6" aria-hidden="true" />
      ) : (
        <ChevronRight className="h-6 w-6" aria-hidden="true" />
      )}
    </button>
  );
});

export default NavigationButton;
