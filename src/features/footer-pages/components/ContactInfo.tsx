import { memo } from "react";

type ContactInfoProps = {
  icon: React.ReactNode;
  label: string;
  value: string;
};

const ContactInfo = memo(function ContactInfo({ icon, label, value }: ContactInfoProps) {
  return (
    <div className="flex items-center gap-5">
      <span className="flex h-14 w-14 shrink-0 items-center justify-center bg-foreground text-background">
        {icon}
      </span>
      <div>
        <p className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground/60">{label}</p>
        <p className="text-sm font-black uppercase tracking-tight text-foreground">{value}</p>
      </div>
    </div>
  );
});

export default ContactInfo;
