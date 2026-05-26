import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";

export default function HelpPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  const topics = [
    {
      title: t("footerPages.help.topics.orders.title"),
      description: t("footerPages.help.topics.orders.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>,
      href: buildLocalizedPath("/faq", lang),
    },
    {
      title: t("footerPages.help.topics.shipping.title"),
      description: t("footerPages.help.topics.shipping.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
      href: buildLocalizedPath("/shipping", lang),
    },
    {
      title: t("footerPages.help.topics.returns.title"),
      description: t("footerPages.help.topics.returns.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>,
      href: buildLocalizedPath("/returns", lang),
    },
    {
      title: t("footerPages.help.topics.payments.title"),
      description: t("footerPages.help.topics.payments.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="1" y="4" width="22" height="16" rx="2" ry="2" /><line x1="1" y1="10" x2="23" y2="10" /></svg>,
      href: buildLocalizedPath("/faq", lang),
    },
    {
      title: t("footerPages.help.topics.account.title"),
      description: t("footerPages.help.topics.account.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>,
      href: buildLocalizedPath("/login", lang),
    },
    {
      title: t("footerPages.help.topics.privacy.title"),
      description: t("footerPages.help.topics.privacy.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
      href: buildLocalizedPath("/privacy", lang),
    },
    {
      title: t("footerPages.help.topics.policies.title"),
      description: t("footerPages.help.topics.policies.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>,
      href: buildLocalizedPath("/policies", lang),
    },
    {
      title: t("footerPages.help.topics.contact.title"),
      description: t("footerPages.help.topics.contact.description"),
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
      href: buildLocalizedPath("/contact", lang),
    },
  ];

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.help.page.title")} description={t("footerPages.help.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.help.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
        { label: t("footerPages.help.breadcrumb.help") },
      ]} />
      <PageHero
        title={t("footerPages.help.hero.title")}
        description={t("footerPages.help.hero.description")}
        data-tour="help-hero"
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4" data-tour="help-topics">
        {topics.map((topic) => (
          <Link
            key={topic.title}
            to={topic.href}
            className="group border border-border/60 bg-card p-8 transition-all hover:border-foreground"
          >
            <span className="mb-6 flex h-16 w-16 items-center justify-center bg-foreground text-background transition-transform group-hover:scale-110">
              {topic.icon}
            </span>
            <h3 className="mb-4 text-xl font-black uppercase tracking-tight">{topic.title}</h3>
            <p className="text-sm font-bold leading-relaxed text-muted-foreground/60">{topic.description}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 border border-border/60 bg-muted/50 p-10 text-center md:p-16" data-tour="help-cta">
        <h2 className="text-3xl font-black uppercase tracking-tighter">{t("footerPages.help.cta.title")}</h2>
        <p className="mt-4 text-sm font-bold uppercase tracking-widest text-muted-foreground/60">
          {t("footerPages.help.cta.description")}
        </p>
        <Link
          to={buildLocalizedPath("/contact", lang)}
          className="mt-10 inline-flex h-16 items-center justify-center bg-foreground px-12 text-[10px] font-black uppercase tracking-[0.3em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98]"
        >
          {t("footerPages.help.cta.button")}
        </Link>
      </div>
    </PageLayout>
  );
}
