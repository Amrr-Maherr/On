import { memo, useRef, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Volume2, VolumeX } from "lucide-react";
import heroVideo from "@/assets/adidas_-_you_got_this (1080p).mp4";

function prefersReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

const HeroBackground = memo(function HeroBackground() {
  const { t } = useTranslation();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [loaded, setLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [reducedMotion] = useState(prefersReducedMotion);

  useEffect(() => {
    if (!reducedMotion && videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  }, [reducedMotion]);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

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
      
      {/* Audio Toggle Button */}
      {loaded && (
        <button
          onClick={toggleMute}
          className="absolute bottom-8 right-8 z-20 flex h-12 w-12 cursor-pointer items-center justify-center rounded-none border-2 border-foreground/20 bg-background/20 text-foreground backdrop-blur-md transition-all duration-300 hover:bg-background/40 active:scale-90 md:bottom-12 md:right-12"
          aria-label={isMuted ? t("home.hero.unmute") : t("home.hero.mute")}
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5" />
          ) : (
            <Volume2 className="h-5 w-5" />
          )}
        </button>
      )}
    </div>
  );
});

export default HeroBackground;
