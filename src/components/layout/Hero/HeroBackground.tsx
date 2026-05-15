import { memo, useRef, useState, useEffect } from "react";
import heroVideo from "@/assets/adidas_-_you_got_this (1080p).mp4";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const HeroBackground = memo(function HeroBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [reducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!reducedMotion && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [reducedMotion]);

  if (reducedMotion) {
    return (
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-background/5" />
    );
  }

  return (
    <div className="absolute inset-0">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onCanPlay={() => setLoaded(true)}
        onError={() => setLoaded(false)}
        className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-r from-background/85 via-background/30 to-background/5" />
    </div>
  );
});

export default HeroBackground;
