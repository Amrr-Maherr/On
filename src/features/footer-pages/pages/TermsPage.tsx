import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

const sections = [
  {
    title: "1. Acceptance of Terms",
    content: "By accessing or using our website, you agree to be bound by these Terms & Conditions. If you do not agree with any part of these terms, you should not use our services. We reserve the right to update these terms at any time, and continued use constitutes acceptance of the changes.",
  },
  {
    title: "2. Account Registration",
    content: "When creating an account, you must provide accurate, complete information and keep it up to date. You are responsible for maintaining the confidentiality of your password and for all activities that occur under your account. Notify us immediately of any unauthorised use.",
  },
  {
    title: "3. Orders & Pricing",
    content: "All prices are listed in USD and exclude applicable taxes and shipping fees, which are calculated at checkout. We reserve the right to modify prices at any time without prior notice. We may cancel any order if the product is unavailable, pricing errors occur, or fraudulent activity is suspected.",
  },
  {
    title: "4. Product Availability",
    content: "Product availability is subject to change without notice. While we strive to display accurate stock information, occasionally an item may be out of stock after your order is placed. In such cases, we will notify you and issue a full refund for the unavailable item.",
  },
  {
    title: "5. Intellectual Property",
    content: "All content on this website, including text, images, logos, and software, is the property of our store or its licensors and is protected by applicable intellectual property laws. You may not reproduce, distribute, or create derivative works without our express written permission.",
  },
  {
    title: "6. Limitation of Liability",
    content: "Our store shall not be liable for any indirect, incidental, or consequential damages arising from your use of our website or products. Our total liability is limited to the amount paid for the product or service giving rise to the claim.",
  },
  {
    title: "7. Governing Law",
    content: "These terms are governed by the laws of the State of New York, without regard to its conflict of law provisions. Any disputes shall be resolved exclusively in the courts located in New York County.",
  },
  {
    title: "8. Contact",
    content: "If you have any questions about these terms, please contact our support team at support@onstore.com or through our Contact page.",
  },
];

export default function TermsPage() {
  return (
    <PageLayout>
      <PageHelmet title="Terms &amp; Conditions" description="Terms and conditions for using our website and services." />
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Terms & Conditions" },
      ]} />
      <PageHero
        title="Terms & Conditions"
        description="Please read these terms carefully before using our website or placing an order."
      />

      <div className="space-y-6">
        {sections.map((section) => (
          <ContentSection key={section.title} title={section.title} variant="card">
            <p>{section.content}</p>
          </ContentSection>
        ))}
      </div>
    </PageLayout>
  );
}
