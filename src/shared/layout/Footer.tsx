import { memo } from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/shared/logo/Logo";

const linkSections = [
  {
    title: "Shop",
    links: [
      { label: "All Products", href: "/products" },
      { label: "Categories", href: "/categories" },
      { label: "Brands", href: "/brands" },
    ],
  },
  {
    title: "Account",
    links: [
      { label: "Login", href: "/login" },
      { label: "Register", href: "/register" },
    ],
  },
  {
    title: "Customer Service",
    links: [
      { label: "Help Center", href: "/help" },
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "FAQs", href: "/faq" },
      { label: "Shipping & Returns", href: "/shipping" },
    ],
  },
  {
    title: "Policies",
    links: [
      { label: "Store Policies", href: "/policies" },
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Return Policy", href: "/returns" },
      { label: "Size Guide", href: "/size-guide" },
    ],
  },
];

const socialLinks = [
  { name: "Facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { name: "YouTube", href: "#", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.56 3.02z" },
  { name: "Telegram", href: "#", path: "M21.88 3.29a.6.6 0 0 0-.63-.09L2.6 11.55a.6.6 0 0 0-.07 1.08l5.74 2.6 2.63 6.1a.6.6 0 0 0 1.06.08l3.23-4.8 5.44 4a.6.6 0 0 0 .94-.43l2.4-16.16a.6.6 0 0 0-.29-.63l.2.1zm-4.07 5.2-5.9 5.9a.6.6 0 0 0-.16.28l-.7 3.24a.6.6 0 0 1-1.14.07L8.1 14.67a.6.6 0 0 1 .08-.72l6.4-6.4a.6.6 0 0 1 .83.84z" },
  { name: "Twitter", href: "#", path: "M18.24 3.25h2.91l-6.36 7.27 7.48 9.89h-5.86l-4.59-6-5.25 6H3.66l6.8-7.78L3.25 3.25h6l4.15 5.48zm-1.02 15.4h1.61L6.86 4.96H5.12z" },
];

const Footer = memo(function Footer() {
  return (
    <footer className="border-t border-border/30 bg-muted/10">
      <div className="container-layout py-16 md:py-20">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground/60">
              Performance gear engineered for champions. Shop the latest in
              sportswear, training equipment, and athletic lifestyle.
            </p>
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-8 w-8 items-center justify-center rounded-xl text-muted-foreground/40 transition-colors duration-200 hover:bg-muted/50 hover:text-foreground"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-3.5 w-3.5">
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground/60">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground/60 transition-colors duration-200 hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-border/30">
        <div className="container-layout flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground/40">
            &copy; {new Date().getFullYear()} On Store. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Visa", "Mastercard", "PayPal", "Stripe"].map((method) => (
              <span key={method} className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground/20">
                {method}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
