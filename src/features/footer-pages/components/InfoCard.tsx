import { memo, type ReactNode } from "react";

interface InfoCardProps {
  icon?: ReactNode;
  title: string;
  description: string;
}

const InfoCard = memo(function InfoCard({ icon, title, description }: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-border/30 bg-card p-6 text-center">
      {icon && (
        <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-foreground text-background mx-auto">
          {icon}
        </span>
      )}
      <h3 className="mb-2 text-lg font-bold tracking-tight">{title}</h3>
      <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
    </div>
  );
});

export default InfoCard;
