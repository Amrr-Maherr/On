import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import { Link } from "react-router-dom";

interface FaqItem {
  question: string;
  answer: string;
}

const faqs: FaqItem[] = [
  {
    question: "How do I place an order?",
    answer: "Simply browse our catalogue, add items to your cart, and proceed to checkout. You'll need to create an account or log in, enter your shipping details, and choose a payment method. Once your order is confirmed, you'll receive an email with your order summary and tracking information.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, Mastercard, American Express, PayPal, Apple Pay, and Google Pay. All transactions are processed securely through encrypted payment gateways.",
  },
  {
    question: "Can I modify or cancel my order after placing it?",
    answer: "Orders can be modified or cancelled within 1 hour of placement. After that, the order enters processing and cannot be changed. Contact our support team immediately if you need assistance.",
  },
  {
    question: "How long does shipping take?",
    answer: "Standard shipping takes 5–8 business days within the continental US. Express shipping (2–3 business days) and next-day delivery are available at checkout. International orders typically arrive within 10–20 business days depending on customs.",
  },
  {
    question: "Do you offer free shipping?",
    answer: "Yes, we offer free standard shipping on all orders over $75 within the continental United States. Express and international shipping rates are calculated at checkout based on package weight and destination.",
  },
  {
    question: "What is your return policy?",
    answer: "We accept returns within 30 days of delivery for unworn, unwashed items in original condition with tags attached. Refunds are processed within 5–7 business days after we receive the return. Visit our Returns page for full details.",
  },
  {
    question: "How do I track my order?",
    answer: "Once your order ships, you'll receive a confirmation email with a tracking number. You can also view your order status and tracking details anytime in your account dashboard under 'My Orders'.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 50 countries worldwide. International shipping rates and delivery times vary by destination. Please note that customs duties, taxes, and brokerage fees may apply and are the responsibility of the recipient.",
  },
  {
    question: "How can I contact customer support?",
    answer: "You can reach us via email at support@onstore.com, by phone at +1 (555) 123-4567 (Monday–Friday, 9 AM–6 PM EST), or through our Contact page. We typically respond within 24 hours.",
  },
  {
    question: "Is my personal information secure?",
    answer: "Absolutely. We use industry-standard SSL encryption to protect your data during transmission. Your payment details are processed through PCI-compliant gateways, and we never share your personal information with third parties. See our Privacy Policy for more details.",
  },
];

const categories = [
  { label: "Orders", href: "/faq" },
  { label: "Shipping", href: "/shipping" },
  { label: "Returns", href: "/returns" },
  { label: "Contact Us", href: "/contact" },
];

export default function FaqPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <PageLayout>
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "FAQ" },
      ]} />
      <PageHero
        title="Frequently Asked Questions"
        description="Find answers to the most common questions about shopping with us. Browse by topic or search the list below."
      />

      <div className="mb-8 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <Link
            key={cat.label}
            to={cat.href}
            className="rounded-full border bg-card px-4 py-1.5 text-sm font-medium text-muted-foreground transition-colors hover:border-primary hover:text-primary"
          >
            {cat.label}
          </Link>
        ))}
      </div>

      <div className="rounded-xl border bg-card p-6 md:p-8">
        <dl className="divide-y divide-border">
          {faqs.map((faq, index) => (
            <div key={index} className="py-4 first:pt-0 last:pb-0">
              <dt>
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 text-left text-base font-medium transition-colors hover:text-primary"
                >
                  <span>{faq.question}</span>
                  <motion.svg
                    animate={{ rotate: openIndex === index ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-muted-foreground"
                  >
                    <path d="m6 9 6 6 6-6" />
                  </motion.svg>
                </button>
              </dt>
              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.dd
                    key="content"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="pb-2 pt-3 text-sm leading-relaxed text-muted-foreground">
                      {faq.answer}
                    </p>
                  </motion.dd>
                )}
              </AnimatePresence>
            </div>
          ))}
        </dl>
      </div>

      <div className="mt-8 rounded-xl border bg-muted/30 p-6 text-center md:p-8">
        <h2 className="mb-2 text-lg font-semibold">Still have questions?</h2>
        <p className="mb-4 text-sm text-muted-foreground">
          Our support team is ready to help.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
        >
          Contact Support
        </Link>
      </div>
    </PageLayout>
  );
}
