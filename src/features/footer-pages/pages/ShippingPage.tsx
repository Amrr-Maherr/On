import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";

const shippingMethods = [
  { name: "Standard", delivery: "5–8 business days", cost: "Free on orders over $75", note: "Best value for everyday orders" },
  { name: "Express", delivery: "2–3 business days", cost: "$12.99", note: "Perfect when you need it sooner" },
  { name: "Next-Day", delivery: "1 business day", cost: "$19.99", note: "Order before 2 PM for next-day delivery" },
  { name: "International", delivery: "10–20 business days", cost: "Calculated at checkout", note: "Available to 50+ countries" },
];

const steps = [
  { step: 1, title: "Order Placed", description: "You receive an order confirmation with your order number and summary." },
  { step: 2, title: "Processing", description: "Our team picks, packs, and prepares your items for shipment (1–2 business days)." },
  { step: 3, title: "Shipped", description: "You receive a shipping confirmation with a tracking number." },
  { step: 4, title: "Delivered", description: "Your package arrives at your doorstep. Enjoy your purchase!" },
];

export default function ShippingPage() {
  return (
    <PageLayout>
      <PageHelmet title="Shipping &amp; Delivery" description="Shipping methods, rates, delivery times, and tracking information." />
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Shipping & Delivery" },
      ]} />
      <PageHero
        title="Shipping & Delivery"
        description="Everything you need to know about how we get your orders to you quickly and reliably."
      />

      <ContentSection title="Shipping Methods & Rates" variant="card">
        <p>We offer a range of shipping options to suit your needs and budget. All orders are shipped from our warehouses within the continental US.</p>
      </ContentSection>

      <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {shippingMethods.map((method) => (
          <div key={method.name} className="border border-border/60 bg-card p-8 transition-all hover:border-foreground">
            <h3 className="mb-2 text-xl font-black uppercase tracking-tight">{method.name}</h3>
            <p className="mb-2 text-xs font-black uppercase tracking-widest text-muted-foreground/60">{method.delivery}</p>
            <p className="mb-4 text-lg font-black tracking-tighter text-foreground">{method.cost}</p>
            <p className="text-xs font-bold leading-relaxed text-muted-foreground/40">{method.note}</p>
          </div>
        ))}
      </div>

      <div className="mb-12 space-y-12">
        <ContentSection title="Processing Time" variant="card">
          <p>
            Orders are processed within 1–2 business days after payment confirmation. During peak periods
            (holidays, sales events), processing may take up to 3 business days. You will receive a shipping
            confirmation email with tracking information as soon as your order leaves our warehouse.
          </p>
        </ContentSection>

        <div className="border-l-4 border-foreground pl-6">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
            Timeline
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
            ORDER JOURNEY.
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div key={s.step} className="border border-border/60 bg-card p-8">
              <span className="mb-6 flex h-12 w-12 items-center justify-center bg-foreground text-sm font-black text-background">
                {s.step}
              </span>
              <h3 className="mb-4 text-lg font-black uppercase tracking-tight">{s.title}</h3>
              <p className="text-sm font-bold leading-relaxed text-muted-foreground/60">{s.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <ContentSection title="Tracking Your Order" variant="card">
          <p>
            Every order includes free tracking. Once shipped, you can monitor your package's journey through
            your account dashboard or via the tracking link sent to your email. Tracking updates typically appear
            within 24 hours of shipment.
          </p>
        </ContentSection>

        <ContentSection title="International Shipping" variant="card">
          <p>
            We ship to over 50 countries worldwide. International orders may be subject to customs duties,
            import taxes, and brokerage fees, which are the responsibility of the recipient. Delivery times
            for international orders are estimates and may be affected by customs clearance processes.
            We recommend checking your local customs policies before placing an order.
          </p>
        </ContentSection>

        <ContentSection title="Shipping Restrictions" variant="card">
          <p>
            We currently do not ship to PO boxes, APO/FPO addresses, or certain remote locations. Some
            items with specific shipping restrictions (e.g., oversized or hazardous materials) may only
            be available for standard delivery within the continental US.
          </p>
        </ContentSection>

        <ContentSection title="Lost or Damaged Packages" variant="card">
          <p>
            If your package arrives damaged, please contact us within 48 hours with photos of the damage
            and we will arrange a replacement or refund. For lost packages, we will initiate an investigation
            with the carrier and keep you updated throughout the process.
          </p>
        </ContentSection>
      </div>
    </PageLayout>
  );
}
