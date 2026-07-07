import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import Logo from "@/components/shared/logo/Logo";
import appStoreBadge from "@/assets/App_Store_(iOS).svg";
import googlePlayBadge from "@/assets/google-play.png";

const socialLinks = [
  { labelKey: "footer.social.instagram", href: "#", path: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.774 4.919 4.851.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.075-1.667 4.703-4.919 4.85-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.775-4.919-4.851-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.075 1.666-4.703 4.919-4.85 1.265-.058 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" },
  { labelKey: "footer.social.facebook", href: "#", path: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
  { labelKey: "footer.social.youtube", href: "#", path: "M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58zM9.75 15.02V8.98l5.56 3.02z" },
  { labelKey: "footer.social.x", href: "#", path: "M18.24 3.25h2.91l-6.36 7.27 7.48 9.89h-5.86l-4.59-6-5.25 6H3.66l6.8-7.78L3.25 3.25h6l4.15 5.48zm-1.02 15.4h1.61L6.86 4.96H5.12z" },
];

const Footer = memo(function Footer() {
  const { t } = useTranslation();
  const lang = useCurrentLang();

  const linkSections = [
    {
      titleKey: "footer.sectionTitles.shop",
      links: [
        { key: "footer.links.allProducts", href: buildLocalizedPath("/products", lang) },
        { key: "footer.links.categories", href: buildLocalizedPath("/categories", lang) },
        { key: "footer.links.brands", href: buildLocalizedPath("/brands", lang) },
        { key: "footer.links.featuredGear", href: buildLocalizedPath("/products", lang) },
        { key: "footer.links.newArrivals", href: buildLocalizedPath("/products", lang) },
        { key: "footer.links.salesOffers", href: buildLocalizedPath("/products", lang) },
      ],
    },
    {
      titleKey: "footer.sectionTitles.support",
      links: [
        { key: "footer.links.helpCenter", href: buildLocalizedPath("/help", lang) },
        { key: "footer.links.faq", href: buildLocalizedPath("/faq", lang) },
        { key: "footer.links.contactUs", href: buildLocalizedPath("/contact", lang) },
        { key: "footer.links.trackOrder", href: buildLocalizedPath("/orders", lang) },
        { key: "footer.links.shippingInfo", href: buildLocalizedPath("/shipping", lang) },
        { key: "footer.links.returns", href: buildLocalizedPath("/returns", lang) },
        { key: "footer.links.sizeGuide", href: buildLocalizedPath("/size-guide", lang) },
      ],
    },
    {
      titleKey: "footer.sectionTitles.company",
      links: [
        { key: "footer.links.aboutUs", href: buildLocalizedPath("/about", lang) },
        { key: "footer.links.sustainability", href: buildLocalizedPath("/about", lang) },
        { key: "footer.links.innovation", href: buildLocalizedPath("/about", lang) },
        { key: "footer.links.careers", href: buildLocalizedPath("/about", lang) },
        { key: "footer.links.press", href: buildLocalizedPath("/about", lang) },
        { key: "footer.links.affiliates", href: buildLocalizedPath("/brands", lang) },
        { key: "footer.links.storeLocation", href: buildLocalizedPath("/store-location", lang) },
      ],
    },
    {
      titleKey: "footer.sectionTitles.legal",
      links: [
        { key: "footer.links.privacyPolicy", href: buildLocalizedPath("/privacy", lang) },
        { key: "footer.links.termsOfUse", href: buildLocalizedPath("/terms", lang) },
        { key: "footer.links.storePolicies", href: buildLocalizedPath("/policies", lang) },
        { key: "footer.links.cookieSettings", href: buildLocalizedPath("/privacy", lang) },
        { key: "footer.links.compliance", href: buildLocalizedPath("/policies", lang) },
      ],
    },
  ];
  return (
    <footer className="border-t border-border/40 bg-neutral-950 text-white">
      <div className="container-layout py-16 md:py-24">
        <div className="grid gap-16 lg:grid-cols-6">
          <div className="lg:col-span-2">
            <div className="brightness-0 invert">
              <Logo />
            </div>
            <p className="mt-8 max-w-sm text-base font-medium leading-relaxed text-white/70">
              {t("footer.brandStatement")}
            </p>
            <div className="mt-10 flex flex-col gap-6">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-white/50">{t("footer.followUs")}</p>
              <div className="flex items-center gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.labelKey}
                    href={social.href}
                    aria-label={t(social.labelKey)}
                    className="flex h-12 w-12 items-center justify-center border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-white hover:text-neutral-950"
                  >
                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
                      <path d={social.path} />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12 lg:col-span-4 lg:grid-cols-4">
            {linkSections.map((section) => (
              <div key={section.titleKey}>
                <h4 className="mb-8 text-xs font-black uppercase tracking-[0.3em] text-white">
                  {t(section.titleKey)}
                </h4>
                <ul className="space-y-4">
                  {section.links.map((link) => (
                    <li key={link.key}>
                      <Link
                        to={link.href}
                        className="text-sm font-bold text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white"
                      >
                        {t(link.key)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 grid gap-12 border-t border-white/10 pt-16 lg:grid-cols-3">
          <div className="space-y-6">
            <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">{t("footer.newsletter.title")}</h4>
            <p className="text-sm font-medium text-white/60">{t("footer.newsletter.description")}</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder={t("footer.newsletter.placeholder")}
                className="h-14 flex-1 border-2 border-white/10 bg-white/5 px-6 text-sm font-bold outline-none transition-all focus:border-white/40"
              />
              <button className="h-14 bg-white px-8 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-950 transition-all hover:bg-neutral-200">
                {t("footer.newsletter.button")}
              </button>
            </div>
          </div>

          <div className="lg:col-span-2 lg:flex lg:justify-end lg:gap-24">
            <div className="space-y-6">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">{t("footer.stores.title")}</h4>
              <Link to={buildLocalizedPath("/branches", lang)} className="block text-sm font-bold text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white">{t("footer.stores.findStore")}</Link>
              <Link to={buildLocalizedPath("/shipping", lang)} className="block text-sm font-bold text-white/60 transition-all duration-200 hover:translate-x-1 hover:text-white">{t("footer.stores.internationalShipping")}</Link>
            </div>
            <div className="mt-12 space-y-6 lg:mt-0">
              <h4 className="text-xs font-black uppercase tracking-[0.3em] text-white">{t("footer.app.title")}</h4>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 hover:opacity-80"
                >
                  <img src={appStoreBadge} alt={t("footer.app.appStoreBadgeAlt")} loading="lazy" className="h-12 w-auto" />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-all duration-300 hover:scale-105 hover:opacity-80"
                >
                  <img src={googlePlayBadge} alt={t("footer.app.googlePlayBadgeAlt")} loading="lazy" className="h-12 w-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-8 text-neutral-950">
        <div className="container-layout flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2">
            <p className="text-[10px] font-black uppercase tracking-widest">
              {t("footer.copyright", { year: new Date().getFullYear() })}
            </p>
            <Link to={buildLocalizedPath("/privacy", lang)} className="text-[10px] font-black uppercase tracking-widest transition-opacity hover:opacity-70">{t("footer.bottom.privacyPolicy")}</Link>
            <Link to={buildLocalizedPath("/terms", lang)} className="text-[10px] font-black uppercase tracking-widest transition-opacity hover:opacity-70">{t("footer.bottom.termsOfService")}</Link>
            <Link to={buildLocalizedPath("/policies", lang)} className="text-[10px] font-black uppercase tracking-widest transition-opacity hover:opacity-70">{t("footer.bottom.storePolicies")}</Link>
          </div>
          <div className="flex items-center gap-8">
            {(["visa", "mastercard", "paypal", "applePay"] as const).map((method) => (
              <span key={method} className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                {t(`footer.paymentMethods.${method}`)}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
