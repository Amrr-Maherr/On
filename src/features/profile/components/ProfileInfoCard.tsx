import { memo } from "react";
import { Mail, Phone, Shield, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
    <Card className="overflow-hidden">
      <CardHeader className="bg-muted/50 py-4">
        <CardTitle className="text-lg">Account Information</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-6 p-6 md:grid-cols-2">
        {infoItems.map((item, index) => (
          <div key={index} className="flex items-start gap-3">
            <div className="mt-1 rounded-md bg-primary/10 p-2">
              <item.icon className="h-4 w-4 text-primary" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                {item.label}
              </p>
              <p className="font-medium">{item.value}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
});

export default ProfileInfoCard;
