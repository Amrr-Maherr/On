import { useTranslation } from "react-i18next";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

export default function ShippingPage() {
  const { t } = useTranslation();

  const shippingMethods = [
    { name: t("footerPages.shipping.methods.standard.name"), delivery: t("footerPages.shipping.methods.standard.delivery"), cost: t("footerPages.shipping.methods.standard.cost"), note: t("footerPages.shipping.methods.standard.note") },
    { name: t("footerPages.shipping.methods.express.name"), delivery: t("footerPages.shipping.methods.express.delivery"), cost: t("footerPages.shipping.methods.express.cost"), note: t("footerPages.shipping.methods.express.note") },
    { name: t("footerPages.shipping.methods.nextDay.name"), delivery: t("footerPages.shipping.methods.nextDay.delivery"), cost: t("footerPages.shipping.methods.nextDay.cost"), note: t("footerPages.shipping.methods.nextDay.note") },
    { name: t("footerPages.shipping.methods.international.name"), delivery: t("footerPages.shipping.methods.international.delivery"), cost: t("footerPages.shipping.methods.international.cost"), note: t("footerPages.shipping.methods.international.note") },
  ];

  const steps = [
    { step: 1, title: t("footerPages.shipping.steps.placed.title"), description: t("footerPages.shipping.steps.placed.description") },
    { step: 2, title: t("footerPages.shipping.steps.processing.title"), description: t("footerPages.shipping.steps.processing.description") },
    { step: 3, title: t("footerPages.shipping.steps.shipped.title"), description: t("footerPages.shipping.steps.shipped.description") },
    { step: 4, title: t("footerPages.shipping.steps.delivered.title"), description: t("footerPages.shipping.steps.delivered.description") },
  ];

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.shipping.page.title")} description={t("footerPages.shipping.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.shipping.breadcrumb.home"), href: "/" },
        { label: t("footerPages.shipping.breadcrumb.shipping") },
      ]} />
      <PageHero
        title={t("footerPages.shipping.hero.title")}
        description={t("footerPages.shipping.hero.description")}
      />

      <ContentSection title={t("footerPages.shipping.sections.methods.title")} variant="card">
        <p>{t("footerPages.shipping.sections.methods.description")}</p>
      </ContentSection>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shippingMethods.map((method) => (
          <div key={method.name} className="border border-border/60 bg-card p-8 transition-all hover:border-foreground">
            <h3 className="mb-2 text-xl font-black uppercase tracking-tight">{method.name}</h3>
            <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground/60">{method.delivery}</p>
            <p className="mb-4 text-lg font-black tracking-tighter text-foreground">{method.cost}</p>
            <p className="text-xs font-bold leading-relaxed text-muted-foreground/40">{method.note}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 space-y-12">
        <ContentSection title={t("footerPages.shipping.sections.processing.title")} variant="card">
          <p>{t("footerPages.shipping.sections.processing.description")}</p>
        </ContentSection>

        <div className="border-l-4 border-foreground pl-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
            {t("footerPages.shipping.sections.timelineLabel")}
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
            {t("footerPages.shipping.sections.orderJourneyTitle")}
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="border border-border/60 bg-card p-8">
              <span className="mb-6 flex h-12 w-12 items-center justify-center bg-foreground text-sm font-black text-background">
                {s.step}
              </span>
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight">{s.title}</h3>
              <p className="text-sm font-bold leading-relaxed text-muted-foreground/60">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <ContentSection title={t("footerPages.shipping.sections.tracking.title")} variant="card">
          <p>{t("footerPages.shipping.sections.tracking.description")}</p>
        </ContentSection>

        <ContentSection title={t("footerPages.shipping.sections.international.title")} variant="card">
          <p>{t("footerPages.shipping.sections.international.description")}</p>
        </ContentSection>

        <ContentSection title={t("footerPages.shipping.sections.restrictions.title")} variant="card">
          <p>{t("footerPages.shipping.sections.restrictions.description")}</p>
        </ContentSection>

        <ContentSection title={t("footerPages.shipping.sections.lostDamaged.title")} variant="card">
          <p>{t("footerPages.shipping.sections.lostDamaged.description")}</p>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
