import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface ContentSectionProps {
  title?: string;
  children: ReactNode;
  className?: string;
  variant?: "default" | "card";
}

export default function ContentSection({
  title,
  children,
  className = "",
  variant = "card",
}: ContentSectionProps) {
  const containerClass =
    variant === "card"
      ? "rounded-xl border bg-card p-6 md:p-8"
      : "";

  return (
    <motion.section
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className={`${containerClass} ${className}`}
    >
      {title && (
        <h2 className="mb-4 text-xl font-semibold md:text-2xl">{title}</h2>
      )}
      <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base [&>strong]:font-semibold [&>strong]:text-foreground">
        {children}
      </div>
    </motion.section>
  );
}
