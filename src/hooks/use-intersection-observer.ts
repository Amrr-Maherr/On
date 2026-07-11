import { useRef, useState, useEffect, useCallback } from "react";

type UseIntersectionObserverOptions = {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
};

export function useIntersectionObserver<T extends HTMLElement = HTMLDivElement>({
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
  triggerOnce = true,
}: UseIntersectionObserverOptions = {}) {
  const ref = useRef<T | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const hasTriggered = useRef(false);

  const onIntersection = useCallback(
    (entries: IntersectionObserverEntry[]) => {
      const [entry] = entries;

      if (triggerOnce && hasTriggered.current) return;

      setIsIntersecting(entry.isIntersecting);

      if (entry.isIntersecting && triggerOnce) {
        hasTriggered.current = true;
      }
    },
    [triggerOnce],
  );

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(onIntersection, {
      threshold,
      rootMargin,
    });

    observer.observe(node);

    return () => {
      observer.disconnect();
    };
  }, [onIntersection, threshold, rootMargin]);

  return { ref, isIntersecting };
}
