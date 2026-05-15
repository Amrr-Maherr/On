import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContactInfo from "@/features/footer-pages/components/ContactInfo";

export default function ContactPage() {
  return (
    <PageLayout>
      <PageHelmet title="Contact Us" description="Get in touch with our support team." />
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Contact Us" },
      ]} />
      <PageHero
        title="Contact Us"
        description="We'd love to hear from you. Reach out to our team and we'll get back to you as soon as possible."
      />

      <div className="grid gap-12 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <div className="border border-border/60 bg-card p-8 md:p-10">
            <h2 className="mb-10 text-3xl font-black uppercase tracking-tighter">Send Us a Message</h2>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="space-y-8"
              noValidate
            >
              <div className="grid gap-8 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Your name"
                    className="h-14 w-full border-x-0 border-t-0 border-b-2 border-border/40 bg-transparent px-0 text-base font-bold placeholder:text-muted-foreground/20 focus:border-foreground focus:outline-none focus:ring-0"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="your@email.com"
                    className="h-14 w-full border-x-0 border-t-0 border-b-2 border-border/40 bg-transparent px-0 text-base font-bold placeholder:text-muted-foreground/20 focus:border-foreground focus:outline-none focus:ring-0"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                  Subject
                </label>
                <select
                  id="subject"
                  className="h-14 w-full border-x-0 border-t-0 border-b-2 border-border/40 bg-transparent px-0 text-base font-bold text-foreground focus:border-foreground focus:outline-none focus:ring-0"
                >
                  <option value="">Select a topic</option>
                  <option value="order">Order Inquiry</option>
                  <option value="shipping">Shipping Question</option>
                  <option value="returns">Returns & Refunds</option>
                  <option value="product">Product Information</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="How can we help you?"
                  className="w-full border-x-0 border-t-0 border-b-2 border-border/40 bg-transparent px-0 py-4 text-base font-bold placeholder:text-muted-foreground/20 focus:border-foreground focus:outline-none focus:ring-0 resize-none"
                />
              </div>
              <button 
                type="submit" 
                className="flex h-16 w-full items-center justify-center bg-foreground px-12 text-sm font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2">
          <div className="border border-border/60 bg-card p-8 md:p-10">
            <h2 className="mb-10 text-3xl font-black uppercase tracking-tighter">Information</h2>
            <div className="space-y-8">
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
