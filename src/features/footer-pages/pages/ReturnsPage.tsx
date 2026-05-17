import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

export default function ReturnsPage() {
  const { t } = useTranslation();

  const steps = [
    { step: 1, title: t("footerPages.returns.steps.initiate.title"), description: t("footerPages.returns.steps.initiate.description") },
    { step: 2, title: t("footerPages.returns.steps.pack.title"), description: t("footerPages.returns.steps.pack.description") },
    { step: 3, title: t("footerPages.returns.steps.ship.title"), description: t("footerPages.returns.steps.ship.description") },
    { step: 4, title: t("footerPages.returns.steps.refund.title"), description: t("footerPages.returns.steps.refund.description") },
  ];

  const nonReturnable = [
    t("footerPages.returns.nonReturnable.item1"),
    t("footerPages.returns.nonReturnable.item2"),
    t("footerPages.returns.nonReturnable.item3"),
    t("footerPages.returns.nonReturnable.item4"),
    t("footerPages.returns.nonReturnable.item5"),
    t("footerPages.returns.nonReturnable.item6"),
  ];

  return (
    <PageLayout>
      <PageHelmet title={t("footerPages.returns.page.title")} description={t("footerPages.returns.page.description")} />
      <Breadcrumb className="mb-6" items={[
        { label: t("footerPages.returns.breadcrumb.home"), href: "/" },
        { label: t("footerPages.returns.breadcrumb.returns") },
      ]} />
      <PageHero
        title={t("footerPages.returns.hero.title")}
        description={t("footerPages.returns.hero.description")}
      />

      <div className="mb-8 space-y-6">
        <ContentSection title={t("footerPages.returns.sections.window.title")} variant="card">
          <p>
            You have <strong>30 days from the delivery date</strong> to initiate a return. Items must be unworn,
            unwashed, and in their original condition with all tags and packaging intact. We reserve the right
            to refuse returns that do not meet these conditions.
          </p>
        </ContentSection>

        <ContentSection title={t("footerPages.returns.sections.howToReturn.title")} variant="card">
          <p>Follow these simple steps to return your purchase:</p>
        </ContentSection>

        <div className="grid gap-4 sm:grid-cols-2">
          {steps.map((s) => (
            <div key={s.step} className="rounded-xl border bg-card p-5">
              <span className="mb-3 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                {s.step}
              </span>
              <h3 className="mb-1.5 font-semibold">{s.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <ContentSection title={t("footerPages.returns.sections.timeline.title")} variant="card">
          <p>
            Refunds are processed within 5–7 business days after your return arrives at our warehouse and passes
            inspection. The refund will be credited to your original payment method. Depending on your bank or
            card issuer, it may take an additional 2–5 business days for the funds to appear in your account.
          </p>
        </ContentSection>

        <ContentSection title={t("footerPages.returns.sections.exchanges.title")} variant="card">
          <p>
            We offer exchanges for a different size or colour within the same product line. To exchange an item,
            initiate a return and place a new order for the desired option. This ensures the fastest possible
            turnaround and real-time inventory accuracy.
          </p>
        </ContentSection>

        <ContentSection title={t("footerPages.returns.sections.nonReturnable.title")} variant="card">
          <p>For hygiene and safety reasons, the following items are final sale and cannot be returned:</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            {nonReturnable.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="mt-3">
            Damaged or defective items are always eligible for return regardless of category.
          </p>
        </ContentSection>

        <ContentSection title={t("footerPages.returns.sections.needHelp.title")} variant="card">
          <p>
            If you have any questions about the return process, our support team is happy to assist. Contact us
            through our Contact page or email returns@onstore.com.
          </p>
          <div className="mt-4">
            <Link to="/contact">
              <Button variant="outline" size="sm">{t("footerPages.returns.buttons.contactSupport")}</Button>
            </Link>
          </div>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
