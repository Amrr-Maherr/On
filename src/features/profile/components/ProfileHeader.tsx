import { memo } from "react";
import type { User } from "../types";

interface ProfileHeaderProps {
  user: User;
}

const ProfileHeader = memo(function ProfileHeader({ user }: ProfileHeaderProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-col items-center gap-6 py-10 text-center md:flex-row md:gap-10 md:py-16 md:text-left">
      <div className="flex h-28 w-28 items-center justify-center rounded-none bg-foreground text-3xl font-black text-background md:h-40 md:w-40 md:text-5xl">
        {initials}
      </div>
      <div className="space-y-3">
        <h1 className="font-heading text-5xl font-black uppercase leading-none tracking-tighter text-foreground md:text-7xl">{user.name}</h1>
        <p className="text-lg font-bold text-muted-foreground/60">{user.email}</p>
        <div className="mt-4 inline-flex items-center rounded-none border-2 border-foreground px-4 py-1 text-[10px] font-black uppercase tracking-widest text-foreground">
          {user.role}
        </div>
      </div>
    </div>
  );
});

export default ProfileHeader;
