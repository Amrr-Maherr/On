import { lazy, Suspense, useRef, type ComponentType, type ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

type LazyLoadProps = {
  load: () => Promise<{ default: ComponentType<any> }>;
  fallback?: ReactNode;
  rootMargin?: string;
  threshold?: number;
  className?: string;
};

const LazyLoad = ({
  load,
  fallback = null,
  rootMargin = "0px 0px 200px 0px",
  threshold = 0,
  className,
}: LazyLoadProps) => {
  const { ref, isIntersecting } = useIntersectionObserver({
    threshold,
    rootMargin,
    triggerOnce: true,
  });

  const LazyComponentRef = useRef<ReturnType<typeof lazy> | null>(null);
  if (isIntersecting && !LazyComponentRef.current) {
    LazyComponentRef.current = lazy(load);
  }
  const LazyComponent = LazyComponentRef.current;

  return (
    <div ref={ref} className={cn(className)}>
      {LazyComponent ? (
        <Suspense fallback={fallback}>
          <LazyComponent />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
};

export default LazyLoad;
