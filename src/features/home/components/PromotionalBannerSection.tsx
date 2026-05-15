import { memo, useCallback } from "react";
import { ArrowRight, Zap } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const PromotionalBannerSection = memo(function PromotionalBannerSection() {
  const navigate = useNavigate();
  const handleShopSale = useCallback(() => navigate("/products"), [navigate]);

  return (
    <section className="relative overflow-hidden bg-neutral-950">
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1461896836934-bd45ba8fcf9b?auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 via-neutral-950/80 to-neutral-950/60" />
      </div>

      <div className="container-layout relative z-10 py-28 md:py-36">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-none bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.15em] text-white/80">
              <Zap className="h-3.5 w-3.5 text-amber-400" />
              Limited Offer
            </div>
            <h2 className="text-5xl font-black leading-none tracking-tight text-white md:text-7xl lg:text-8xl">
              UP TO 40% OFF
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Season-end sale on select performance gear. Push your limits
              without breaking the bank.
            </p>
            <div className="mt-4 flex items-center justify-center gap-2 text-sm text-white/50">
              <span className="inline-block h-2 w-2 bg-amber-400" />
              Offer ends soon
              <span className="inline-block h-2 w-2 bg-amber-400" />
            </div>
            <div className="mt-10">
              <Button
                onClick={handleShopSale}
                className="h-14 cursor-pointer rounded-full bg-white px-12 text-sm font-bold uppercase tracking-widest text-neutral-950 transition-all duration-300 hover:bg-white/90 active:scale-[0.97]"
              >
                Shop the Sale
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
});

export default PromotionalBannerSection;
