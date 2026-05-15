import { memo } from "react";
import { LogOut, UserPen } from "lucide-react";

interface ProfileActionsProps {
  onLogout: () => void;
  onEdit: () => void;
}

const ProfileActions = memo(function ProfileActions({ onLogout, onEdit }: ProfileActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <button
        onClick={onEdit}
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-background transition-all duration-200 hover:opacity-90 active:scale-[0.98]"
      >
        <UserPen className="h-4 w-4" />
        Edit Profile
      </button>
      <button
        onClick={onLogout}
        className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-2.5 text-sm font-semibold text-destructive/70 transition-all duration-200 hover:bg-destructive/10 hover:text-destructive active:scale-[0.98]"
      >
        <LogOut className="h-4 w-4" />
        Sign Out
      </button>
    </div>
  );
});

export default ProfileActions;
