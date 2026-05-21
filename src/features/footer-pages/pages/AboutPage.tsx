import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";
import InfoCard from "@/features/footer-pages/components/InfoCard";

export default function AboutPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  const values = [
    {
      title: t("footerPages.about.values.quality.title"),
      description: t("footerPages.about.values.quality.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
    },
    {
      title: t("footerPages.about.values.trust.title"),
      description: t("footerPages.about.values.trust.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
    },
    {
      title: t("footerPages.about.values.innovation.title"),
      description: t("footerPages.about.values.innovation.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
    },
    {
      title: t("footerPages.about.values.sustainability.title"),
      description: t("footerPages.about.values.sustainability.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
    },
  ];

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.about.page.title")} description={t("footerPages.about.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.about.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
        { label: t("footerPages.about.breadcrumb.about") },
      ]} />
      <PageHero
        title={t("footerPages.about.hero.title")}
        description={t("footerPages.about.hero.description")}
        data-tour="about-hero"
      />

      <div className="mb-10 grid gap-6 lg:grid-cols-2" data-tour="about-story">
        <ContentSection title={t("footerPages.about.sections.story.title")} variant="card">
          <p>
            Founded with a passion for delivering exceptional products at fair prices, our store began as a small
            operation with a big dream: to make quality shopping accessible to everyone. Over the years, we have grown
            into a trusted destination for thousands of customers worldwide, but our core mission remains unchanged.
          </p>
          <p>
            Every product in our catalogue is carefully selected by our dedicated curation team. We partner with
            reputable manufacturers and artisans who share our commitment to craftsmanship, durability, and design.
            Whether you are looking for everyday essentials or something special, we are here to help you find exactly
            what you need.
          </p>
          <p>
            Our fulfilment centres are strategically located to ensure fast, reliable delivery no matter where you are.
            We pride ourselves on meticulous packing and real-time order tracking, so you always know when to expect
            your order.
          </p>
        </ContentSection>

        <ContentSection title={t("footerPages.about.sections.mission.title")} variant="card">
          <p>
            We believe shopping should be seamless, enjoyable, and secure. Our mission is to remove the friction from
            online retail by offering intuitive browsing, transparent pricing, and a checkout experience that takes
            seconds, not minutes.
          </p>
          <p>
            Customer satisfaction is at the heart of everything we do. Our support team is available around the clock
            to answer questions, resolve issues, and ensure every interaction leaves you feeling valued. We do not just
            sell products; we build lasting relationships with our community.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to={buildLocalizedPath("/contact", lang)}>
              <Button variant="outline">{t("footerPages.about.buttons.getInTouch")}</Button>
            </Link>
            <Link to={buildLocalizedPath("/products", lang)}>
              <Button>{t("footerPages.about.buttons.browseProducts")}</Button>
            </Link>
          </div>
        </ContentSection>
      </div>

      <div>
        <div className="mb-12 border-l-4 border-foreground pl-6" data-tour="about-values-heading">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
            {t("footerPages.about.sections.principlesLabel")}
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
            {t("footerPages.about.sections.valuesTitle")}
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4" data-tour="about-values">
          {values.map((value) => (
            <InfoCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
