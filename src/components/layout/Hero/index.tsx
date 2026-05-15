import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import bgImage from "@/assets/hero-bg.png";

const Hero = memo(function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={bgImage}
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/30 to-background/10" />
      </div>

      <ScrollReveal className="container-layout relative z-10 w-full" distance={40}>
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground/70 mb-6">
            Starting from $49.99
          </span>
          <h1 className="text-5xl font-light leading-[1.05] tracking-tight text-foreground sm:text-6xl md:text-7xl lg:text-8xl">
            Exclusive collection
            <br />
            <span className="font-medium">for everyone</span>
          </h1>
          <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground/80 md:text-xl">
            Discover premium products curated for modern living. Quality meets
            elegance in every piece.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button
              onClick={() => navigate("/products")}
              className="h-14 cursor-pointer rounded-full bg-foreground px-10 text-base font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
            >
              Explore the collection
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/categories")}
              className="h-14 cursor-pointer rounded-full px-8 text-base font-medium text-foreground/70 hover:text-foreground"
            >
              Browse categories
            </Button>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default Hero;
