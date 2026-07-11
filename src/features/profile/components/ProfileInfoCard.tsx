import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Mail, Phone, Shield, Calendar } from "lucide-react";
import type { User } from "../types";

type ProfileInfoCardProps = {
  user: User;
};

const ProfileInfoCard = memo(function ProfileInfoCard({ user }: ProfileInfoCardProps) {
  const { t } = useTranslation();
  const infoItems = [
    {
      icon: Mail,
      label: t("profile.info.email"),
      value: user.email,
    },
    {
      icon: Phone,
      label: t("profile.info.phone"),
      value: user.phone || t("profile.info.notProvided"),
    },
    {
      icon: Shield,
      label: t("profile.info.role"),
      value: user.role,
    },
    {
      icon: Calendar,
      label: t("profile.info.memberSince"),
      value: user.createdAt ? new Date(user.createdAt).toLocaleDateString() : t("profile.info.notAvailable"),
    },
  ];

  return (
    <div className="rounded-none border-2 border-border/40 bg-card">
      <div className="border-b-2 border-border/40 px-6 py-5">
        <h3 className="text-xs font-black uppercase tracking-[0.2em] text-foreground">{t("profile.info.title")}</h3>
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
