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
    <div className="rounded-2xl border border-border/30 bg-card">
      <div className="border-b border-border/30 px-6 py-4">
        <h3 className="text-sm font-medium tracking-tight">Account Information</h3>
      </div>
      <div className="grid gap-6 p-6 md:grid-cols-2">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 flex h-8 w-8 items-center justify-center rounded-xl bg-muted/50">
              <item.icon className="h-4 w-4 text-muted-foreground/60" />
            </div>
            <div className="space-y-0.5">
              <p className="text-xs font-medium uppercase tracking-[0.1em] text-muted-foreground/60">
                {item.label}
              </p>
              <p className="text-sm font-medium text-foreground">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
});

export default ProfileInfoCard;
