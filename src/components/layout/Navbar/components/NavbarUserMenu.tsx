import { useCallback } from "react";
import { Link } from "react-router-dom";
import { User, Package, UserCircle, LogOut, LogIn } from "lucide-react";
import { useCurrentLang, buildLocalizedPath } from "@/lib/localized-path";
import { Button } from "@/components/ui/button";
import { useNavbar } from "../hooks/useNavbar";

interface NavbarUserMenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

export function NavbarUserMenu({ isOpen, onToggle, onClose }: NavbarUserMenuProps) {
  const { t, isLoggedIn, handleLogout } = useNavbar();
  const lang = useCurrentLang();

  const onLogout = useCallback(() => {
    handleLogout(() => onClose());
  }, [handleLogout, onClose]);

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="icon"
        aria-label={t("nav.aria.account")}
        onClick={onToggle}
        className="rounded-none text-muted-foreground/60 hover:bg-muted/30 hover:text-foreground"
      >
        <User className="h-5 w-5" />
      </Button>
      {isOpen && (
        <>
          <div className="fixed inset-0 z-10" onClick={onClose} />
          <div className="absolute right-0 top-full mt-2 w-52 origin-top-right rounded-none border-2 border-border/40 bg-card p-1.5 shadow-xl">
            {isLoggedIn ? (
              <div className="flex flex-col gap-0.5">
                <Link
                  to={buildLocalizedPath("/orders", lang)}
                  className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                  onClick={onClose}
                >
                  <Package className="h-4 w-4" />
                  {t("nav.dropdown.myOrders")}
                </Link>
                <Link
                  to={buildLocalizedPath("/profile", lang)}
                  className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                  onClick={onClose}
                >
                  <UserCircle className="h-4 w-4" />
                  {t("nav.dropdown.profile")}
                </Link>
                <hr className="my-1 border-border/40" />
                <button
                  className="flex w-full items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-destructive/70 transition-all hover:bg-destructive/10 hover:text-destructive"
                  onClick={onLogout}
                >
                  <LogOut className="h-4 w-4" />
                  {t("nav.dropdown.signOut")}
                </button>
              </div>
            ) : (
              <div className="flex flex-col gap-0.5">
                <Link
                  to={buildLocalizedPath("/login", lang)}
                  className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                  onClick={onClose}
                >
                  <LogIn className="h-4 w-4" />
                  {t("nav.dropdown.signIn")}
                </Link>
                <Link
                  to={buildLocalizedPath("/register", lang)}
                  className="flex items-center gap-2.5 rounded-none px-3.5 py-2.5 text-[10px] font-black uppercase tracking-widest text-muted-foreground/80 transition-all hover:bg-muted/50 hover:text-foreground"
                  onClick={onClose}
                >
                  <UserCircle className="h-4 w-4" />
                  {t("nav.dropdown.createAccount")}
                </Link>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}
