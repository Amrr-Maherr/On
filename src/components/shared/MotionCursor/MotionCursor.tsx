import { useEffect, useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

const INNER_SIZE = 8;
const OUTER_SIZE = 35;
const BORDER_WIDTH = 3;

const springConfig = { damping: 25, stiffness: 200, mass: 0.5 };
const fastSpringConfig = { damping: 30, stiffness: 350, mass: 0.2 };

export default function MotionCursor() {
  const prefersReducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const [pressing, setPressing] = useState(false);
  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const outerX = useSpring(mouseX, springConfig);
  const outerY = useSpring(mouseY, springConfig);

  const innerX = useSpring(mouseX, fastSpringConfig);
  const innerY = useSpring(mouseY, fastSpringConfig);

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      if (!visible) setVisible(true);
    },
    [mouseX, mouseY, visible],
  );

  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const el = target.closest(
      "a, button, input, textarea, select, [role='button'], [role='link'], [role='tab'], [role='checkbox'], [role='radio'], label",
    );
    setHovering(!!el);
  }, []);

  const handleMouseDown = useCallback(() => setPressing(true), []);
  const handleMouseUp = useCallback(() => setPressing(false), []);
  const handleMouseLeave = useCallback(() => setVisible(false), []);
  const handleMouseEnter = useCallback(() => setVisible(true), []);

  useEffect(() => {
    if (prefersReducedMotion) return;

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mouseenter", handleMouseEnter);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mouseenter", handleMouseEnter);
    };
  }, [
    handleMouseMove,
    handleMouseOver,
    handleMouseDown,
    handleMouseUp,
    handleMouseLeave,
    handleMouseEnter,
    prefersReducedMotion,
  ]);

  if (prefersReducedMotion) return null;

  const outerSize = hovering ? OUTER_SIZE * 1.5 : OUTER_SIZE;
  const innerSize = hovering ? INNER_SIZE * 0.8 : INNER_SIZE;
  const outerBorderColor = "#fff";
  const innerBg = "#fff";

  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 2147483647,
        pointerEvents: "none",
        mixBlendMode: "difference",
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          x: outerX,
          y: outerY,
          width: outerSize,
          height: outerSize,
          borderRadius: "50%",
          border: `${BORDER_WIDTH}px solid ${outerBorderColor}`,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: pressing ? 0.8 : 1,
          width: outerSize,
          height: outerSize,
        }}
        transition={{
          scale: { duration: 0.15, ease: "easeOut" },
          width: { duration: 0.3, ease: "easeOut" },
          height: { duration: 0.3, ease: "easeOut" },
        }}
      />
      <motion.div
        style={{
          position: "absolute",
          x: innerX,
          y: innerY,
          width: innerSize,
          height: innerSize,
          borderRadius: "50%",
          backgroundColor: innerBg,
          translateX: "-50%",
          translateY: "-50%",
          opacity: visible ? 1 : 0,
        }}
        animate={{
          scale: pressing ? 0.6 : 1,
          width: innerSize,
          height: innerSize,
        }}
        transition={{
          scale: { duration: 0.1, ease: "easeOut" },
          width: { duration: 0.2, ease: "easeOut" },
          height: { duration: 0.2, ease: "easeOut" },
        }}
      />
    </div>,
    document.body,
  );
}
