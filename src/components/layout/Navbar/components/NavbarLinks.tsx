import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useCurrentLang } from "@/lib/localized-path";
import { getNavLinks } from "../constants/navbar-links";

export function NavbarLinks() {
  const { t } = useTranslation();
  const lang = useCurrentLang();
  const links = getNavLinks(lang);

  return (
    <div className="hidden items-center gap-6 md:flex">
      {links.map((link) => (
        <Link
          key={link.key}
          to={link.href}
          className="text-sm font-black uppercase tracking-[0.2em] text-foreground/85 transition-all hover:text-foreground hover:underline underline-offset-8"
        >
          {t(link.key)}
        </Link>
      ))}
    </div>
  );
}
