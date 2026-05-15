import { memo } from "react";
import type { FeatureItem } from "../types";

const FeatureCard = memo(function FeatureCard({ title, description, icon }: FeatureItem) {
  const Icon = icon;

  return (
    <div className="group rounded-2xl bg-card p-6 transition-all duration-500 hover:-translate-y-0.5 md:p-8">
      {Icon && (
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-muted/30 transition-colors duration-300 group-hover:bg-muted/50">
          <Icon className="h-5 w-5 text-foreground/50" aria-hidden="true" />
        </div>
      )}
      <h3 className="text-base font-medium text-foreground">{title}</h3>
      <p className="mt-1.5 text-sm text-muted-foreground/70">{description}</p>
    </div>
  );
});

export default FeatureCard;
