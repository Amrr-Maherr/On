import { buildLocalizedPath } from "@/lib/localized-path";

export interface NavLink {
  key: string;
  href: string;
}

export function getNavLinks(lang: string): NavLink[] {
  return [
    { key: "nav.links.men", href: buildLocalizedPath("/categories/men", lang) },
    { key: "nav.links.women", href: buildLocalizedPath("/categories/women", lang) },
    { key: "nav.links.kids", href: buildLocalizedPath("/categories/kids", lang) },
    { key: "nav.links.sale", href: `${buildLocalizedPath("/products", lang)}?onSale=true` },
    { key: "nav.links.brands", href: buildLocalizedPath("/brands", lang) },
  ];
}
