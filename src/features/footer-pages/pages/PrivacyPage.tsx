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
    title: "1. Information We Collect",
    content: "When you create an account, place an order, or subscribe to our newsletter, we collect personal information such as your name, email address, shipping address, phone number, and payment details. We also automatically collect certain data when you browse our site, including your IP address, browser type, device information, and browsing behaviour through cookies and similar technologies.",
  },
  {
    title: "2. How We Use Your Information",
    content: "We use your information to process and fulfil your orders, communicate with you about your purchases, send promotional offers (with your consent), improve our website and services, and prevent fraudulent activity. We never sell your personal data to third parties.",
  },
  {
    title: "3. Payment Processing",
    content: "All payment transactions are processed through secure, PCI-compliant payment gateways. We do not store full credit card numbers or sensitive authentication data on our servers. Your payment details are encrypted using industry-standard TLS technology.",
  },
  {
    title: "4. Cookies",
    content: "Our website uses cookies to enhance your browsing experience, remember your preferences, and analyse site traffic. You can control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of our site.",
  },
  {
    title: "5. Your Rights",
    content: "You have the right to access, correct, or delete your personal data at any time. You may also opt out of marketing communications by updating your account preferences or clicking the unsubscribe link in any email. To exercise any of these rights, contact our privacy team at privacy@onstore.com.",
  },
  {
    title: "6. Data Retention",
    content: "We retain your personal data only as long as necessary to fulfil the purposes described in this policy or as required by law. Once no longer needed, your information is securely deleted or anonymised.",
  },
  {
    title: "7. Updates to This Policy",
    content: "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this policy periodically.",
  },
];

export default function PrivacyPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.privacy.page.title")} description={t("footerPages.privacy.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.privacy.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
        { label: t("footerPages.privacy.breadcrumb.privacy") },
      ]} />
      <PageHero
        title={t("footerPages.privacy.hero.title")}
        description={t("footerPages.privacy.hero.description")}
      />

      <div className="space-y-6">
        {sections.map((section) => (
          <ContentSection key={section.title} title={section.title} variant="card">
            <p>{section.content}</p>
          </ContentSection>
        ))}
      </div>

      <p className="mt-6 text-xs text-muted-foreground">{t("footerPages.privacy.effectiveDate")}</p>
    </PageLayout>
  );
}
