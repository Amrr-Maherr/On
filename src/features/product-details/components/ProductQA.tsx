import { memo } from "react";
import { useTranslation } from "react-i18next";
import { MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductQA = memo(function ProductQA() {
  const { t } = useTranslation();
  return (
    <section>
      <div className="mb-8">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
          {t("products.details.qa.label")}
        </span>
        <h2 className="mt-2 text-2xl font-black tracking-tight">{t("products.details.qa.title")}</h2>
      </div>
      <div className="grid gap-4">
        <div className="rounded-none border-2 border-border/40 bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-amber-400">
              <MessageCircle className="h-5 w-5 text-black" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-tight">{t("products.details.qa.q1")}</p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-muted-foreground/80">
                {t("products.details.qa.a1")}
              </p>
              <span className="mt-3 block text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">{t("products.details.qa.answeredBy")}</span>
            </div>
          </div>
        </div>
        <div className="rounded-none border-2 border-border/40 bg-card p-6">
          <div className="flex items-start gap-4">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-none bg-amber-400">
              <MessageCircle className="h-5 w-5 text-black" />
            </div>
            <div>
              <p className="text-sm font-black uppercase tracking-tight">{t("products.details.qa.q2")}</p>
              <p className="mt-2 text-sm font-bold leading-relaxed text-muted-foreground/80">
                {t("products.details.qa.a2")}
              </p>
              <span className="mt-3 block text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">{t("products.details.qa.answeredBy")}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 sm:flex-row">
        <input
          type="text"
          placeholder={t("products.details.qa.placeholder")}
          className="h-14 flex-1 rounded-none border-2 border-border/40 bg-transparent px-6 text-sm font-bold text-foreground outline-none placeholder:text-muted-foreground/30 transition-all duration-300 focus:border-foreground"
        />
        <Button className="h-14 w-full cursor-pointer gap-3 px-8 text-sm font-black sm:w-auto">
          <Send className="h-4 w-4" strokeWidth={3} />
          {t("products.details.qa.ask")}
        </Button>
      </div>
    </section>
  );
});

export default ProductQA;
