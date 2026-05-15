import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";
import ScrollReveal from "@/components/shared/ScrollReveal";
import HeroBackground from "./HeroBackground";

const Hero = memo(function Hero() {
  const navigate = useNavigate();

  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      <HeroBackground />

      <ScrollReveal className="container-layout relative z-10 w-full" distance={40}>
        <div className="max-w-2xl">
          <span className="inline-block text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60 mb-6">
            Starting from $49.99
          </span>
          <h1 className="text-6xl font-black uppercase leading-none tracking-tight text-foreground md:text-8xl lg:text-9xl">
            Exclusive
            <br />
            Collection.
          </h1>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground/70 md:text-lg">
            Discover premium products curated for modern living. Quality meets
            elegance in every piece.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <Button
              onClick={() => navigate("/products")}
              className="h-12 cursor-pointer rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
            >
              Explore the collection
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="ghost"
              onClick={() => navigate("/categories")}
              className="h-12 cursor-pointer rounded-full px-6 text-sm font-medium text-foreground/60 hover:text-foreground"
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
