import { memo, type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type LazySectionProps = {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  triggerOnce?: boolean;
  className?: string;
};

const LazySection = memo(function LazySection({
  children,
  fallback = null,
  rootMargin = "0px 0px 200px 0px",
  threshold = 0,
  triggerOnce = true,
  className,
}: LazySectionProps) {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce,
  });

  return (
    <div ref={ref} className={cn(className)}>
      {isIntersecting ? children : fallback}
    </div>
  );
});

export default LazySection;
