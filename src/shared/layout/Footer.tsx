import Logo from "@/components/shared/logo/Logo";
import { Link } from "react-router-dom";

const linkSections = [
  {
    title: "Getting Started",
    links: [
      { label: "Release Notes", href: "#" },
      { label: "Upgrade Guide", href: "#" },
      { label: "Browser Support", href: "#" },
      { label: "Dark Mode", href: "#" },
    ],
  },
  {
    title: "Explore",
    links: [
      { label: "Prototyping", href: "#" },
      { label: "Design Systems", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Security", href: "#" },
    ],
  },
  {
    title: "Community",
    links: [
      { label: "Discussion Forums", href: "#" },
      { label: "Code of Conduct", href: "#" },
      { label: "Contributing", href: "#" },
      { label: "API Reference", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    name: "Facebook",
    href: "#",
    path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",
  },
  {
    name: "YouTube",
    href: "#",
    path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.56 3.02z",
  },
  {
    name: "Telegram",
    href: "#",
    path: "M21.88 3.29a.6.6 0 0 0-.63-.09L2.6 11.55a.6.6 0 0 0-.07 1.08l5.74 2.6 2.63 6.1a.6.6 0 0 0 1.06.08l3.23-4.8 5.44 4a.6.6 0 0 0 .94-.43l2.4-16.16a.6.6 0 0 0-.29-.63l.2.1zm-4.07 5.2-5.9 5.9a.6.6 0 0 0-.16.28l-.7 3.24a.6.6 0 0 1-1.14.07L8.1 14.67a.6.6 0 0 1 .08-.72l6.4-6.4a.6.6 0 0 1 .83.84z",
  },
  {
    name: "Twitter",
    href: "#",
    path: "M18.24 3.25h2.91l-6.36 7.27 7.48 9.89h-5.86l-4.59-6-5.25 6H3.66l6.8-7.78L3.25 3.25h6l4.15 5.48zm-1.02 15.4h1.61L6.86 4.96H5.12z",
  },
];

function Footer() {
  return (
    <footer className="bg-muted/30">
      <div className="container-layout py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo />
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-muted-foreground">
              Discover premium products with a seamless shopping experience.
              Quality curated for modern living.
            </p>
            <div className="mt-5 flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  aria-label={social.name}
                  className="flex h-9 w-9 items-center justify-center rounded-full border text-muted-foreground transition-colors hover:border-foreground hover:text-foreground"
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                  >
                    <path d={social.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {linkSections.map((section) => (
            <div key={section.title}>
              <h4 className="mb-4 text-sm font-semibold">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t border-gray-100">
        <div className="container-layout flex flex-col items-center justify-between gap-4 py-6 sm:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} Store. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <svg
              viewBox="0 0 48 16"
              className="h-4 text-muted-foreground"
              fill="currentColor"
            >
              <rect width="48" height="16" rx="2" />
            </svg>
            <svg
              viewBox="0 0 48 16"
              className="h-4 text-muted-foreground"
              fill="currentColor"
            >
              <rect width="48" height="16" rx="2" />
            </svg>
            <svg
              viewBox="0 0 48 16"
              className="h-4 text-muted-foreground"
              fill="currentColor"
            >
              <rect width="48" height="16" rx="2" />
            </svg>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
