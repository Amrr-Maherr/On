import { memo } from "react";
import { cn } from "@/lib/utils";
import { ChevronLeft, ChevronRight } from "lucide-react";

type NavigationButtonProps = {
  direction: "prev" | "next";
  onClick: () => void;
  ariaLabel: string;
};

const NavigationButton = memo(function NavigationButton({
  direction,
  onClick,
  ariaLabel,
}: NavigationButtonProps) {
  return (
    <button
      className={cn(
        "absolute top-1/2 z-10 -translate-y-1/2 flex h-14 w-14 items-center justify-center rounded-none border-2 border-white/10 bg-black/40 text-white backdrop-blur-md transition-all duration-300 hover:border-white/40 hover:bg-black/60 active:scale-90 focus:outline-none",
        direction === "prev" ? "left-4 md:left-8" : "right-4 md:right-8",
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
