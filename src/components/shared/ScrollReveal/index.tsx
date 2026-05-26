import { memo, type ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  once?: boolean;
  direction?: "up" | "down" | "left" | "right";
  className?: string;
  distance?: number;
}

const directionOffset = {
  up: { y: 1, x: 0 },
  down: { y: -1, x: 0 },
  left: { x: 1, y: 0 },
  right: { x: -1, y: 0 },
} as const;

const ScrollReveal = memo(function ScrollReveal({
  children,
  delay = 0,
  duration = 0.7,
  once = true,
  direction = "up",
  distance = 24,
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({ triggerOnce: once });

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const dir = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: dir.y * distance, x: dir.x * distance }}
      animate={
        isIntersecting
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, y: dir.y * distance, x: dir.x * distance }
      }
      transition={{
        duration,
        delay,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
});

export default ScrollReveal;
