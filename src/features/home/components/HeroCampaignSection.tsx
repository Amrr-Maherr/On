import { memo } from "react";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const HeroCampaignSection = memo(function HeroCampaignSection() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-[80vh] overflow-hidden bg-neutral-950 md:mt-[50px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/70 to-neutral-950/30" />
      </div>

      <div className="container-layout relative z-10 flex min-h-[80vh] items-center">
        <div className="max-w-3xl">
          <ScrollReveal direction="up" distance={40}>
            <span className="inline-block text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
              New Collection
            </span>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.15}>
            <h1 className="mt-6 text-6xl font-black leading-none tracking-tight text-white md:text-8xl lg:text-9xl">
              YOU GOT
              <br />
              <span className="text-white/90">THIS.</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.3}>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-white/70 md:text-xl">
              Pushing limits. Breaking barriers. The latest performance gear
              engineered for those who never settle.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.45}>
            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                onClick={() => navigate("/products")}
                className="h-14 cursor-pointer rounded-full bg-white px-10 text-sm font-bold uppercase tracking-widest text-neutral-950 transition-all duration-300 hover:bg-white/90 active:scale-[0.97]"
              >
                Shop Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                onClick={() => navigate("/categories")}
                variant="outline"
                className="h-14 cursor-pointer rounded-full border-white/30 bg-transparent px-10 text-sm font-bold uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10 active:scale-[0.97]"
              >
                Explore Collections
              </Button>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" distance={40} delay={0.6}>
            <div className="mt-16 flex items-center gap-8 text-white/50">
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">200+</span>
                <span className="text-xs uppercase tracking-wider">
                  Products
                </span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">50+</span>
                <span className="text-xs uppercase tracking-wider">Brands</span>
              </div>
              <div className="h-8 w-px bg-white/20" />
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-white">10K+</span>
                <span className="text-xs uppercase tracking-wider">
                  Customers
                </span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
});

export default HeroCampaignSection;
