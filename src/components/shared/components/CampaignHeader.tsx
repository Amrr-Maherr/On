import { memo, type ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface CampaignHeaderProps {
  title: ReactNode;
  subtitle?: ReactNode;
  description?: ReactNode;
  backgroundImage?: string;
  videoUrl?: string;
  badge?: ReactNode;
  cta?: {
    text: string;
    onClick: () => void;
  };
  className?: string;
}

const CampaignHeader = memo(function CampaignHeader({
  title,
  subtitle,
  description,
  backgroundImage,
  videoUrl,
  badge,
  cta,
  className,
}: CampaignHeaderProps) {
  return (
    <section
      className={cn(
        "relative overflow-hidden bg-neutral-950 py-16 md:py-20",
        className,
      )}
    >
      {videoUrl ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          className="absolute inset-0 size-full object-cover opacity-40"
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
      ) : null}
      {/* <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" /> */}
      <div className="container-layout relative z-10">
        <ScrollReveal>
          {badge && <div className="mb-4">{badge}</div>}
          {subtitle && (
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              {subtitle}
            </p>
          )}
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            {title}
          </h1>
          {description && (
            <p className="mt-4 max-w-lg text-lg text-white/70">{description}</p>
          )}
          {cta && (
            <div className="mt-6">
              <Button onClick={cta.onClick}>{cta.text}</Button>
            </div>
          )}
        </ScrollReveal>
      </div>
    </section>
  );
});

export default CampaignHeader;
