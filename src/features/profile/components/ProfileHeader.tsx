import type { User } from "../types";

interface ProfileHeaderProps {
  user: User;
}

export default function ProfileHeader({ user }: ProfileHeaderProps) {
  const initials = user.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex flex-col items-center gap-4 py-8 text-center md:flex-row md:gap-8 md:py-12 md:text-left">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-primary text-2xl font-bold text-primary-foreground md:h-32 md:w-32 md:text-4xl">
        {initials}
      </div>
      <div className="space-y-1.5">
        <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{user.name}</h1>
        <p className="text-muted-foreground">{user.email}</p>
        <div className="mt-2 inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2">
          {user.role}
        </div>
      </div>
    </div>
  );
}
