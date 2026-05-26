import type { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { formatBadgeCount } from "../utils";

interface NavbarIconButtonProps {
  href: string;
  ariaLabel: string;
  icon: ReactNode;
  count?: number;
}

export function NavbarIconButton({ href, ariaLabel, icon, count }: NavbarIconButtonProps) {
  return (
    <Link to={href}>
      <Button
        variant="ghost"
        size="icon"
        aria-label={ariaLabel}
        className="relative rounded-none text-muted-foreground/60 hover:bg-muted/30 hover:text-foreground"
      >
        {icon}
        {count != null && count > 0 && (
          <span className="absolute -top-0.5 -right-0.5 flex h-4 min-w-[14px] items-center justify-center rounded-none bg-foreground px-1 text-[9px] font-black text-background">
            {formatBadgeCount(count)}
          </span>
        )}
      </Button>
    </Link>
  );
}
