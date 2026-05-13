import { Link } from "react-router-dom";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import PageLayout from "@/features/footer-pages/components/PageLayout";
import PageHero from "@/features/footer-pages/components/PageHero";

const policies = [
  {
    title: "Privacy Policy",
    description: "How we collect, use, and protect your personal information. Learn about your data rights and our commitment to your privacy.",
    href: "/privacy",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>,
  },
  {
    title: "Terms & Conditions",
    description: "The rules and guidelines for using our website and services. Includes account terms, pricing, and legal information.",
    href: "/terms",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /></svg>,
  },
  {
    title: "Return Policy",
    description: "Our 30-day return window, step-by-step return process, refund timelines, and list of non-returnable items.",
    href: "/returns",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><polyline points="1 4 1 10 7 10" /><path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" /></svg>,
  },
  {
    title: "Shipping Policy",
    description: "Shipping methods, rates, delivery times, tracking, international shipping, and lost package procedures.",
    href: "/shipping",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><rect x="1" y="3" width="15" height="13" /><polygon points="16 8 20 8 23 11 23 16 16 16 16 8" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /></svg>,
  },
  {
    title: "Customer Support Policy",
    description: "Our commitment to support quality, response times, available channels, and escalation process.",
    href: "/support-policy",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" /></svg>,
  },
  {
    title: "Size Guide",
    description: "Detailed size charts for women's, men's, and unisex apparel with measuring tips and fit advice.",
    href: "/size-guide",
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" /></svg>,
  },
];

export default function PoliciesPage() {
  return (
    <PageLayout>
      <Breadcrumb className="mb-6" items={[
        { label: "Home", href: "/" },
        { label: "Store Policies" },
      ]} />
      <PageHero
        title="Store Policies Overview"
        description="A central hub for all our store policies. Select a policy to learn more."
      />

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {policies.map((policy) => (
          <Link
            key={policy.title}
            to={policy.href}
            className="group rounded-xl border bg-card p-6 transition-shadow hover:shadow-md"
          >
            <span className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              {policy.icon}
            </span>
            <h3 className="mb-1.5 text-base font-semibold">{policy.title}</h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{policy.description}</p>
          </Link>
        ))}
      </div>
    </PageLayout>
  );
}
