import { memo, useState, type ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { motion, AnimatePresence } from "framer-motion";
import { SlidersHorizontal, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface FiltersPanelProps {
  children: ReactNode;
  className?: string;
}

const FiltersPanel = memo(function FiltersPanel({
  children,
  className,
}: FiltersPanelProps) {
  const { t } = useTranslation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <div className="mb-4 flex items-center justify-between lg:hidden">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setMobileOpen(true)}
          className="gap-2 rounded-none border-2"
        >
          <SlidersHorizontal className="h-4 w-4" />
          {t("products.filters.panel.title")}
        </Button>
      </div>

      <aside
        className={cn(
          "hidden w-64 shrink-0 lg:block",
          className,
        )}
      >
        <div className="sticky top-24 space-y-1 rounded-none border-2 border-border/40 bg-card p-5">
          {children}
        </div>
      </aside>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-40 bg-black/50 lg:hidden"
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed inset-y-0 right-0 z-50 w-80 max-w-full bg-background shadow-xl lg:hidden"
            >
              <div className="flex items-center justify-between border-b border-border/30 px-5 py-4">
                <span className="text-sm font-bold uppercase tracking-wider">{t("products.filters.panel.title")}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setMobileOpen(false)}
                  aria-label={t("products.filters.panel.close")}
                  className="rounded-none border-2 border-transparent hover:border-border/40"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
              <div className="overflow-y-auto px-5 py-2">{children}</div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
});

export default FiltersPanel;
