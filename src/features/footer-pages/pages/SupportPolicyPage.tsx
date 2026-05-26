import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

export default function SupportPolicyPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.supportPolicy.page.title")} description={t("footerPages.supportPolicy.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.supportPolicy.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
        { label: t("footerPages.supportPolicy.breadcrumb.supportPolicy") },
      ]} />
      <PageHero
        title={t("footerPages.supportPolicy.hero.title")}
        description={t("footerPages.supportPolicy.hero.description")}
      />

      <div className="space-y-6">
        <ContentSection title={t("footerPages.supportPolicy.sections.channels.title")} variant="card">
          <p>{t("footerPages.supportPolicy.sections.channels.description")}</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>{t("footerPages.supportPolicy.sections.channels.email")}</li>
            <li>{t("footerPages.supportPolicy.sections.channels.phone")}</li>
            <li>{t("footerPages.supportPolicy.sections.channels.form")}</li>
            <li>{t("footerPages.supportPolicy.sections.channels.social")}</li>
          </ul>
        </ContentSection>

        <ContentSection title={t("footerPages.supportPolicy.sections.responseTimes.title")} variant="card">
          <p>{t("footerPages.supportPolicy.sections.responseTimes.description")}</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>{t("footerPages.supportPolicy.sections.responseTimes.email")}</li>
            <li>{t("footerPages.supportPolicy.sections.responseTimes.phone")}</li>
            <li>{t("footerPages.supportPolicy.sections.responseTimes.form")}</li>
            <li>{t("footerPages.supportPolicy.sections.responseTimes.social")}</li>
          </ul>
          <p className="mt-3">{t("footerPages.supportPolicy.sections.responseTimes.note")}</p>
        </ContentSection>

        <ContentSection title={t("footerPages.supportPolicy.sections.helpWith.title")} variant="card">
          <p>{t("footerPages.supportPolicy.sections.helpWith.description")}</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>{t("footerPages.supportPolicy.sections.helpWith.item1")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item2")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item3")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item4")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item5")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item6")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item7")}</li>
            <li>{t("footerPages.supportPolicy.sections.helpWith.item8")}</li>
          </ul>
        </ContentSection>

        <ContentSection title={t("footerPages.supportPolicy.sections.escalation.title")} variant="card">
          <p>{t("footerPages.supportPolicy.sections.escalation.description")}</p>
        </ContentSection>

        <ContentSection title={t("footerPages.supportPolicy.sections.quality.title")} variant="card">
          <p>{t("footerPages.supportPolicy.sections.quality.description")}</p>
        </ContentSection>

        <div className="rounded-xl border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">{t("footerPages.supportPolicy.cta.title")}</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            {t("footerPages.supportPolicy.cta.description")}
          </p>
          <Link to={buildLocalizedPath("/contact", lang)}>
            <Button>{t("footerPages.supportPolicy.cta.button")}</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
