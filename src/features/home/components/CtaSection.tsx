import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CtaSection = memo(function CtaSection() {
  const navigate = useNavigate();

  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-3xl bg-muted/30 px-8 py-20 text-center md:px-16 md:py-28">
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
                Get Started
              </span>
              <h2 className="mt-5 text-4xl font-black leading-tight tracking-tight text-foreground md:text-5xl lg:text-7xl">
                Ready to elevate
                <br />
                your style?
              </h2>
              <p className="mx-auto mt-5 max-w-md text-base font-bold uppercase tracking-widest text-muted-foreground/40">
                Start exploring.
              </p>
              <div className="mt-8 flex items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/products")}
                  className="h-12 cursor-pointer rounded-full bg-foreground px-8 text-sm font-medium text-background transition-all duration-300 hover:opacity-90 active:scale-[0.97]"
                >
                  Shop the collection
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default CtaSection;
