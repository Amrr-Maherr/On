import { buildLocalizedPath } from "@/lib/localized-path";

export type NavLink = {
  key: string;
  href: string;
};

export function getNavLinks(lang: string): NavLink[] {
  return [
    { key: "nav.links.men", href: buildLocalizedPath("/products?category=6439d5b90049ad0b52b90048", lang) },
    { key: "nav.links.women", href: buildLocalizedPath("/products?category=6439d58a0049ad0b52b9003f", lang) },
    { key: "nav.links.kids", href: buildLocalizedPath("/products?category=6439d40367d9aa4ca97064cc", lang) },
    { key: "nav.links.sale", href: `${buildLocalizedPath("/products?sort=price", lang)}` },
    { key: "nav.links.brands", href: buildLocalizedPath("/brands", lang) },
  ];
}
