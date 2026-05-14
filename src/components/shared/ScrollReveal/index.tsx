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
}

const directionOffset = {
  up: { y: 40, x: 0 },
  down: { y: -40, x: 0 },
  left: { x: 40, y: 0 },
  right: { x: -40, y: 0 },
} as const;

const ScrollReveal = memo(function ScrollReveal({
  children,
  delay = 0,
  duration = 0.5,
  once = true,
  direction = "up",
  className,
}: ScrollRevealProps) {
  const prefersReducedMotion = useReducedMotion();
  const { ref, isIntersecting } =
    useIntersectionObserver<HTMLDivElement>({ triggerOnce: once });

  if (prefersReducedMotion) {
    return <div className={cn(className)}>{children}</div>;
  }

  const offset = directionOffset[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...offset }}
      animate={
        isIntersecting
          ? { opacity: 1, y: 0, x: 0 }
          : { opacity: 0, ...offset }
      }
      transition={{
        duration,
        delay,
        ease: "easeOut",
      }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
});

export default ScrollReveal;
