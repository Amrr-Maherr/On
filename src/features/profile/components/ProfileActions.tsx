import { memo } from "react";
import { LogOut, UserPen } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileActionsProps {
  onLogout: () => void;
  onEdit: () => void;
}

const ProfileActions = memo(function ProfileActions({ onLogout, onEdit }: ProfileActionsProps) {
  return (
    <div className="flex flex-wrap items-center gap-3">
      <Button onClick={onEdit} className="gap-2 rounded-full">
        <UserPen className="h-4 w-4" />
        Edit Profile
      </Button>
      <Button variant="outline" onClick={onLogout} className="gap-2 rounded-full text-destructive hover:bg-destructive/10 hover:text-destructive">
        <LogOut className="h-4 w-4" />
        Logout
      </Button>
    </div>
  );
});

export default ProfileActions;
