import { memo } from "react";

interface ContactInfoProps {
  icon: React.ReactNode;
  label: string;
  value: string;
}

const ContactInfo = memo(function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-start gap-3">
      <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
        {icon}
      </span>
      <div>
        <p className="text-sm font-bold text-foreground">{label}</p>
        <p className="text-sm text-muted-foreground">{value}</p>
      </div>
    </div>
  );
});

export default ContactInfo;
