import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

export default function SupportPolicyPage() {
  return (
    <PageLayout>
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Customer Support Policy" },
      ]} />
      <PageHero
        title="Customer Support Policy"
        description="We are committed to providing timely, helpful support for every customer."
      />

      <div className="space-y-6">
        <ContentSection title="Support Channels" variant="card">
          <p>
            We offer multiple ways to get in touch with our team. Choose the channel that works best for you:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li><strong>Email:</strong> support@onstore.com — we respond within 24 hours</li>
            <li><strong>Phone:</strong> +1 (555) 123-4567 — available Monday to Friday, 9 AM – 6 PM EST</li>
            <li><strong>Contact Form:</strong> Submit a request through our Contact page</li>
            <li><strong>Social Media:</strong> Message us on Facebook or Twitter for quick inquiries</li>
          </ul>
        </ContentSection>

        <ContentSection title="Response Times" variant="card">
          <p>
            Our team strives to respond to all inquiries within the following timeframes:
          </p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li><strong>Email:</strong> within 24 hours (typically sooner during business hours)</li>
            <li><strong>Phone:</strong> immediate during operating hours, voicemails returned within 4 hours</li>
            <li><strong>Contact Form:</strong> within 12 hours on business days</li>
            <li><strong>Social Media:</strong> within 2–4 hours during business hours</li>
          </ul>
          <p className="mt-3">
            Response times may be longer during weekends, holidays, and peak periods. We appreciate your patience.
          </p>
        </ContentSection>

        <ContentSection title="What We Can Help With" variant="card">
          <p>Our support team can assist you with the following:</p>
          <ul className="mt-3 list-inside list-disc space-y-1">
            <li>Order status and tracking inquiries</li>
            <li>Shipping and delivery questions</li>
            <li>Returns, exchanges, and refunds</li>
            <li>Product information and sizing advice</li>
            <li>Account management and password reset</li>
            <li>Payment and billing issues</li>
            <li>Technical issues with our website</li>
            <li>General feedback and suggestions</li>
          </ul>
        </ContentSection>

        <ContentSection title="Escalation Process" variant="card">
          <p>
            If your issue is not resolved to your satisfaction by our front-line support team, you may request
            escalation to a senior representative. Escalated issues are reviewed within 24 hours and receive
            priority handling. For unresolved concerns, customers may reach out to our customer relations
            manager at relations@onstore.com.
          </p>
        </ContentSection>

        <ContentSection title="Support Quality Commitment" variant="card">
          <p>
            We are dedicated to providing friendly, knowledgeable, and efficient support. Every interaction
            is an opportunity to improve, and we welcome your feedback. If you feel your experience did not
            meet our standards, please let us know so we can make it right.
          </p>
        </ContentSection>

        <div className="rounded-xl border bg-muted/30 p-6 text-center">
          <h2 className="mb-2 text-lg font-semibold">Ready to get help?</h2>
          <p className="mb-4 text-sm text-muted-foreground">
            Our team is standing by to assist you.
          </p>
          <Link to="/contact">
            <Button>Contact Support</Button>
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}
