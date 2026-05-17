import { memo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ScrollReveal from "@/components/shared/ScrollReveal";

const CtaSection = memo(function CtaSection() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="relative overflow-hidden rounded-none bg-muted/30 px-8 py-20 text-center md:px-16 md:py-28">
            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="text-[10px] font-black uppercase tracking-[0.3em] text-muted-foreground/60">
                {t("home.sections.cta.label")}
              </span>
              <h2 className="font-heading mt-6 text-5xl font-black uppercase leading-[0.9] tracking-tighter text-foreground md:text-7xl lg:text-8xl">
                {t("home.sections.cta.titleLine1")}
                <br />
                {t("home.sections.cta.titleLine2")}
              </h2>
              <p className="mx-auto mt-8 max-w-md text-sm font-bold uppercase tracking-widest text-muted-foreground/40">
                {t("home.sections.cta.description")}
              </p>
              <div className="mt-10 flex items-center justify-center gap-4">
                <Button
                  onClick={() => navigate("/products")}
                  className="h-16 w-full cursor-pointer rounded-none bg-foreground px-10 text-[10px] font-black uppercase tracking-[0.3em] text-background transition-all duration-500 hover:bg-foreground/90 active:scale-[0.98] sm:w-auto"
                >
                  {t("home.sections.cta.button")}
                  <ArrowRight className="ml-3 h-5 w-5" />
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
