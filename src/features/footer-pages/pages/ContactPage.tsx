import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContactInfo from "@/features/footer-pages/components/ContactInfo";

export default function ContactPage() {
  return (
    <PageLayout>
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]} />
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible."
      />

      <div className="grid gap-8 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="rounded-xl border bg-card p-6 md:p-8">
            <h2 className="mb-6 text-xl font-semibold">Send Us a Message</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-5"
              noValidate
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-1.5 block text-sm font-medium">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none ring-1 ring-foreground/10 transition focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1.5 block text-sm font-medium">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none ring-1 ring-foreground/10 transition focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="mb-1.5 block text-sm font-medium">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none ring-1 ring-foreground/10 transition focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="product">Product Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="mb-1.5 block text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="How can we help you?"
                  className="w-full rounded-lg border bg-background px-4 py-2.5 text-sm outline-none ring-1 ring-foreground/10 transition focus:ring-2 focus:ring-primary"
                />
              </div>
              <Button type="submit" className="w-full sm:w-auto">
                Send Message
              </Button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="rounded-xl border bg-card p-6 md:p-8">
            <h2 className="mb-6 text-xl font-semibold">Contact Information</h2>
            <div className="space-y-5">
              <ContactInfo
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                }
                label="Phone"
                value="+1 (555) 123-4567"
              />
              <ContactInfo
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                }
                label="Email"
                value="support@onstore.com"
              />
              <ContactInfo
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                }
                label="Address"
                value="123 Commerce Street, Suite 400, New York, NY 10001"
              />
              <ContactInfo
                icon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                }
                label="Business Hours"
                value="Monday to Friday, 9:00 AM - 6:00 PM EST"
              />
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
