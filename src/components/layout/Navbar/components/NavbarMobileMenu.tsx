import { Menu } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";

type NavbarMobileMenuProps = {
  onClick: () => void;
};

export function NavbarMobileMenu({ onClick }: NavbarMobileMenuProps) {
  const { t } = useTranslation();

  return (
    <Button
      variant="ghost"
      size="icon"
      className="md:hidden rounded-none text-muted-foreground/70"
      aria-label={t("nav.aria.openMenu")}
      onClick={onClick}
    >
      <Menu className="h-5 w-5" />
    </Button>
  );
}
