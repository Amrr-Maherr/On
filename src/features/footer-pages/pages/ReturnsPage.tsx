import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

const steps = [
  { step: 1, title: "Initiate Return", description: "Log into your account and navigate to 'My Orders'. Select the item you wish to return and choose a reason. Alternatively, contact our support team to start the process." },
  { step: 2, title: "Pack Your Item", description: "Securely pack the item in its original packaging with all tags attached. Include the return confirmation receipt inside the package." },
  { step: 3, title: "Ship It Back", description: "Affix the prepaid return shipping label (provided by us) to the package. Drop it off at any designated carrier location." },
  { step: 4, title: "Refund Issued", description: "Once we receive and inspect your return, we'll process your refund within 5–7 business days. Funds will be returned to your original payment method." },
];

const nonReturnable = [
  "Intimate apparel and swimwear",
  "Earrings and body jewellery",
  "Face masks and hygiene products",
  "Gift cards and store credit",
  "Clearance items marked 'final sale'",
  "Digital or downloadable products",
];

export default function ReturnsPage() {
  return (
    <PageLayout>
      <PageHelmet title="Returns &amp; Refunds" description="Our return policy, refund timeline, and how to initiate a return." />
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Returns & Refund Policy" },
      ]} />
      <PageHero
        title="Returns & Refund Policy"
        description="We want you to love your purchase. If something isn't right, we're here to help."
      />

      <div className="mb-8 space-y-6">
        <ContentSection title="Return Window" variant="card">
          <p>
            You have <strong>30 days from the delivery date</strong> to initiate a return. Items must be unworn,
            unwashed, and in their original condition with all tags and packaging intact. We reserve the right
            to refuse returns that do not meet these conditions.
          </p>
        </ContentSection>

        <ContentSection title="How to Return an Item" variant="card">
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
        <ContentSection title="Refund Timeline" variant="card">
          <p>
            Refunds are processed within 5–7 business days after your return arrives at our warehouse and passes
            inspection. The refund will be credited to your original payment method. Depending on your bank or
            card issuer, it may take an additional 2–5 business days for the funds to appear in your account.
          </p>
        </ContentSection>

        <ContentSection title="Exchanges" variant="card">
          <p>
            We offer exchanges for a different size or colour within the same product line. To exchange an item,
            initiate a return and place a new order for the desired option. This ensures the fastest possible
            turnaround and real-time inventory accuracy.
          </p>
        </ContentSection>

        <ContentSection title="Non-Returnable Items" variant="card">
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

        <ContentSection title="Need Help?" variant="card">
          <p>
            If you have any questions about the return process, our support team is happy to assist. Contact us
            through our Contact page or email returns@onstore.com.
          </p>
          <div className="mt-4">
            <Link to="/contact">
              <Button variant="outline" size="sm">Contact Support</Button>
            </Link>
          </div>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
