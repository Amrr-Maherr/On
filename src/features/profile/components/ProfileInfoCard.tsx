import { memo } from "react";
import { Mail, Phone, Shield, Calendar } from "lucide-react";
import type { User } from "../types";

interface ProfileInfoCardProps {
  user: User;
}

const ProfileInfoCard = memo(function ProfileInfoCard({ user }: ProfileInfoCardProps) {
  const infoItems = [
    {
      icon: Mail,
      label: "Email Address",
      value: user.email,
    },
    {
      icon: Phone,
      label: "Phone Number",
      value: user.phone || "Not provided",
    },
    {
      icon: Shield,
      label: "Account Role",
      value: user.role,
    },
    {
      icon: Calendar,
      label: "Member Since",
      value: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : "N/A",
    },
  ];

  return (
    <div className="rounded-none border-2 border-border/40 bg-card">
      <div className="border-b-2 border-border/40 px-6 py-5">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">Account Information</h3>
      </div>
      <div className="grid gap-8 p-6 md:grid-cols-2">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-foreground text-background">
              <item.icon className="h-5 w-5" />
            </div>
            <div className="space-y-1">
              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                {item.label}
              </p>
              <p className="text-sm font-black uppercase tracking-tight text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProfileInfoCard;
