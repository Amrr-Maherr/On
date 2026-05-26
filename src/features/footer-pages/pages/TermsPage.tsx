import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

const sections = [
  {
    titleKey: "footerPages.terms.sections.1.title",
    contentKey: "footerPages.terms.sections.1.content",
  },
  {
    titleKey: "footerPages.terms.sections.2.title",
    contentKey: "footerPages.terms.sections.2.content",
  },
  {
    titleKey: "footerPages.terms.sections.3.title",
    contentKey: "footerPages.terms.sections.3.content",
  },
  {
    titleKey: "footerPages.terms.sections.4.title",
    contentKey: "footerPages.terms.sections.4.content",
  },
  {
    titleKey: "footerPages.terms.sections.5.title",
    contentKey: "footerPages.terms.sections.5.content",
  },
  {
    titleKey: "footerPages.terms.sections.6.title",
    contentKey: "footerPages.terms.sections.6.content",
  },
  {
    titleKey: "footerPages.terms.sections.7.title",
    contentKey: "footerPages.terms.sections.7.content",
  },
  {
    titleKey: "footerPages.terms.sections.8.title",
    contentKey: "footerPages.terms.sections.8.content",
  },
];

export default function TermsPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.terms.page.title")} description={t("footerPages.terms.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.terms.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
        { label: t("footerPages.terms.breadcrumb.terms") },
      ]} />
      <PageHero
        title={t("footerPages.terms.hero.title")}
        description={t("footerPages.terms.hero.description")}
      />

      <div className="space-y-6">
        {sections.map((section) => (
          <ContentSection key={section.titleKey} title={t(section.titleKey)} variant="card">
            <p>{t(section.contentKey)}</p>
          </ContentSection>
        ))}
      </div>
    </PageLayout>
  );
}
