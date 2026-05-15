import { memo, type ReactNode } from "react";

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
      ? "rounded-2xl border border-border/30 bg-card p-6 md:p-8"
      : "";

  return (
    <section className={`${containerClass} ${className}`}>
      {title && (
        <h2 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">{title}</h2>
      )}
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base [&>strong]:font-semibold [&>strong]:text-foreground">
        {children}
      </div>
    </section>
  );
});

export default ContentSection;
