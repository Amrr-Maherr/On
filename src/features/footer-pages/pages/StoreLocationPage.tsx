import { useTranslation } from "react-i18next";
import { useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";
import ContactInfo from "@/features/footer-pages/components/ContactInfo";

export default function StoreLocationPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);

  return (
    <PageLayout>
      <PageHelmet
        title={t("footerPages.storeLocation.page.title")}
        description={t("footerPages.storeLocation.page.description")}
      />
      <Breadcrumb
        className="mb-6"
        items={[
          { label: t("footerPages.storeLocation.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
          { label: t("footerPages.storeLocation.breadcrumb.storeLocation") },
        ]}
      />
      <PageHero
        title={t("footerPages.storeLocation.hero.title")}
        description={t("footerPages.storeLocation.hero.description")}
        data-tour="store-location-hero"
      />

      <div className="grid gap-8 lg:grid-cols-2" data-tour="store-location-info">
        <div className="space-y-8">
          <ContentSection title={t("footerPages.storeLocation.sections.address.title")} variant="card">
            <div className="space-y-1">
              <p className="text-lg font-black">{t("footerPages.storeLocation.address.street")}</p>
              <p className="text-base font-medium text-muted-foreground/70">
                {t("footerPages.storeLocation.address.details")}
              </p>
            </div>
          </ContentSection>

          <ContentSection title={t("footerPages.storeLocation.sections.hours.title")} variant="card">
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <span className="text-sm font-bold">{t("footerPages.storeLocation.hours.weekdays")}</span>
                <span className="text-sm font-medium text-muted-foreground/70">
                  {t("footerPages.storeLocation.hours.weekdaysTime")}
                </span>
              </div>
              <div className="flex items-center justify-between border-b border-border/30 pb-3">
                <span className="text-sm font-bold">{t("footerPages.storeLocation.hours.saturday")}</span>
                <span className="text-sm font-medium text-muted-foreground/70">
                  {t("footerPages.storeLocation.hours.saturdayTime")}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold">{t("footerPages.storeLocation.hours.sunday")}</span>
                <span className="text-sm font-medium text-muted-foreground/70">
                  {t("footerPages.storeLocation.hours.sundayTime")}
                </span>
              </div>
            </div>
          </ContentSection>
        </div>

        <div className="space-y-8">
          <ContentSection title={t("footerPages.storeLocation.sections.contact.title")} variant="card">
            <div className="space-y-6">
              <ContactInfo
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label={t("footerPages.storeLocation.contact.phoneLabel")}
                value={t("footerPages.storeLocation.contact.phone")}
              />
              <ContactInfo
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
                label={t("footerPages.storeLocation.contact.emailLabel")}
                value={t("footerPages.storeLocation.contact.email")}
              />
            </div>
          </ContentSection>
        </div>
      </div>

      <div className="mt-8" data-tour="store-location-map">
        <ContentSection title={t("footerPages.storeLocation.sections.map.title")} variant="card">
          <div className="aspect-[21/9] w-full overflow-hidden bg-muted/30">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095919363!2d-73.989392!3d40.74844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b30eac9f%3A0xaca05ca48ab5ac2c!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={t("footerPages.storeLocation.sections.map.title")}
              className="grayscale transition-all duration-500 hover:grayscale-0"
            />
          </div>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
