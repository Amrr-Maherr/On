import { useTranslation } from "react-i18next";
import { RotateCcw } from "lucide-react";
import { useTour } from "../hooks/useTour";

type TourResetButtonProps = {
  tourId: string;
  label?: string;
  variant?: "icon" | "text";
};

export default function TourResetButton({
  tourId,
  label,
  variant = "text",
}: TourResetButtonProps) {
  const { t } = useTranslation();
  const { resetTour, startTour } = useTour();

  const displayLabel = label ?? t("tour.resetButton.label");

  const handleReplay = () => {
    resetTour(tourId);
    setTimeout(() => startTour(tourId), 300);
  };

  if (variant === "icon") {
    return (
      <button
        onClick={handleReplay}
        aria-label={displayLabel}
        className="inline-flex h-10 w-10 items-center justify-center rounded-none border-2 border-border/40 text-muted-foreground/60 transition-all hover:border-border hover:text-foreground active:scale-[0.98]"
      >
        <RotateCcw className="h-4 w-4" />
      </button>
    );
  }

  return (
    <button
      onClick={handleReplay}
      className="inline-flex h-14 items-center gap-3 rounded-none border-2 border-border/40 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-foreground hover:text-foreground active:scale-[0.98]"
    >
      <RotateCcw className="h-4 w-4" />
      {displayLabel}
    </button>
  );
}
