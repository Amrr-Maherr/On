import { memo, type ReactNode } from "react";

type InfoCardProps = {
  icon?: ReactNode;
  title: string;
  description: string;
};

const InfoCard = memo(function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="border border-border/60 bg-card p-8">
      {icon && (
        <span className="mb-6 flex h-16 w-16 items-center justify-center bg-foreground text-background">
          {icon}
        </span>
      )}
      <h3 className="mb-4 text-xl font-black uppercase tracking-tight">{title}</h3>
      <p className="text-sm font-bold leading-relaxed text-muted-foreground/60">{description}</p>
    </div>
  );
});

export default InfoCard;
