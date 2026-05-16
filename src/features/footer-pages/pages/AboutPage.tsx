import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageHelmet from "@/shared/components/PageHelmet";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";
import ContentSection from "@/features/footer-pages/components/ContentSection";
import InfoCard from "@/features/footer-pages/components/InfoCard";

const values = [
  {
    title: "Quality",
    description: "We source and curate only the finest products, ensuring every item meets our rigorous standards before it reaches your doorstep.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
  },
  {
    title: "Trust",
    description: "Transparent pricing, honest product descriptions, and a no-hassle return policy build the foundation of our relationship with every customer.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: "Innovation",
    description: "We continuously evolve our platform and product range to bring you the latest trends and most convenient shopping experience.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" /></svg>,
  },
  {
    title: "Sustainability",
    description: "From eco-friendly packaging to ethical sourcing partnerships, we're committed to reducing our environmental footprint.",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 2a10 10 0 1 0 10 10 10 10 0 0 0-10-10z" /><path d="M2 12h20" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" /></svg>,
  },
];

export default function AboutPage() {
  return (
    <PageLayout>
      <PageHelmet title="About Us" description="Learn about our story, values, and team." />
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "About Us" },
      ]} />
      <PageHero
        title="About Us"
        description="Learn more about our story, our values, and the team behind your favourite online shopping destination."
        data-tour="about-hero"
      />

      <div className="mb-10 grid gap-6 lg:grid-cols-2" data-tour="about-story">
        <ContentSection title="Our Story" variant="card">
          <p>
            Founded with a passion for delivering exceptional products at fair prices, our store began as a small
            operation with a big dream: to make quality shopping accessible to everyone. Over the years, we have grown
            into a trusted destination for thousands of customers worldwide, but our core mission remains unchanged.
          </p>
          <p>
            Every product in our catalogue is carefully selected by our dedicated curation team. We partner with
            reputable manufacturers and artisans who share our commitment to craftsmanship, durability, and design.
            Whether you are looking for everyday essentials or something special, we are here to help you find exactly
            what you need.
          </p>
          <p>
            Our fulfilment centres are strategically located to ensure fast, reliable delivery no matter where you are.
            We pride ourselves on meticulous packing and real-time order tracking, so you always know when to expect
            your order.
          </p>
        </ContentSection>

        <ContentSection title="Our Mission" variant="card">
          <p>
            We believe shopping should be seamless, enjoyable, and secure. Our mission is to remove the friction from
            online retail by offering intuitive browsing, transparent pricing, and a checkout experience that takes
            seconds, not minutes.
          </p>
          <p>
            Customer satisfaction is at the heart of everything we do. Our support team is available around the clock
            to answer questions, resolve issues, and ensure every interaction leaves you feeling valued. We do not just
            sell products; we build lasting relationships with our community.
          </p>
          <div className="mt-6 flex flex-wrap gap-4">
            <Link to="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
            <Link to="/products">
              <Button>Browse Products</Button>
            </Link>
          </div>
        </ContentSection>
      </div>

      <div>
        <div className="mb-12 border-l-4 border-foreground pl-6" data-tour="about-values-heading">
          <span className="text-[10px] font-black uppercase tracking-[0.4em] text-muted-foreground/40">
            Principles
          </span>
          <h2 className="mt-4 text-4xl font-black uppercase tracking-tighter text-foreground md:text-6xl">
            OUR VALUES.
          </h2>
        </div>
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4" data-tour="about-values">
          {values.map((value) => (
            <InfoCard key={value.title} icon={value.icon} title={value.title} description={value.description} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
}
