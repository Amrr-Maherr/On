import { memo, type ReactNode } from "react";
import ScrollReveal from "@/components/shared/ScrollReveal";

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "card";
}

const ContentSection = memo(function ContentSection({
  title,
  children,
  className = "",
  variant = "card",
}: ContentSectionProps) {
  const containerClass =
    variant === "card"
      ? "border border-border/60 bg-card p-8 md:p-10"
      : "";

  return (
    <ScrollReveal>
      <section className={`${containerClass} ${className}`}>
        {title && (
          <h2 className="mb-6 text-3xl font-black uppercase tracking-tighter md:text-4xl">{title}</h2>
        )}
        <div className="space-y-6 text-base font-medium leading-relaxed text-muted-foreground/70 md:text-lg [&>strong]:font-black [&>strong]:uppercase [&>strong]:tracking-tight [&>strong]:text-foreground">
          {children}
        </div>
      </section>
    </ScrollReveal>
  );
});

export default ContentSection;
