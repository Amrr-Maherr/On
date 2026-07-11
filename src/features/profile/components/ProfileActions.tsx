import { memo } from "react";
import { useTranslation } from "react-i18next";
import { LogOut, UserPen, RotateCcw } from "lucide-react";
import { useTour } from "@/features/tour/hooks/useTour";

type ProfileActionsProps = {
  onLogout: () => void;
  onEdit: () => void;
};

const ProfileActions = memo(function ProfileActions({ onLogout, onEdit }: ProfileActionsProps) {
  const { t } = useTranslation();
  const { resetTour, startTour } = useTour();

  const handleReplayTour = () => {
    resetTour("profile");
    setTimeout(() => startTour("profile"), 300);
  };

  return (
    <div className="flex flex-wrap items-center gap-4">
      <button
        onClick={onEdit}
        className="inline-flex h-14 items-center gap-3 rounded-none bg-foreground px-8 text-[10px] font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:opacity-90 active:scale-[0.98]"
      >
        <UserPen className="h-4 w-4" />
        {t("profile.actions.editProfile")}
      </button>
      <button
        onClick={handleReplayTour}
        className="inline-flex h-14 items-center gap-3 rounded-none border-2 border-border/40 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/70 transition-all duration-300 hover:border-foreground hover:text-foreground active:scale-[0.98]"
      >
        <RotateCcw className="h-4 w-4" />
        {t("profile.actions.tourGuide")}
      </button>
      <button
        onClick={onLogout}
        className="inline-flex h-14 items-center gap-3 rounded-none border-2 border-border/40 px-8 text-[10px] font-black uppercase tracking-[0.2em] text-destructive transition-all duration-300 hover:border-destructive hover:bg-destructive/5 active:scale-[0.98]"
      >
        <LogOut className="h-4 w-4" />
        {t("profile.actions.signOut")}
      </button>
    </div>
  );
});

export default ProfileActions;
