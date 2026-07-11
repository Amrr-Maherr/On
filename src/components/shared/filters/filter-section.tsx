import { memo, useState, type ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type FilterSectionProps = {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
  "data-tour"?: string;
};

const FilterSection = memo(function FilterSection({
  title,
  children,
  defaultOpen = true,
  ...props
}: FilterSectionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/30 py-4 last:border-b-0" {...props}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between text-left"
        aria-expanded={isOpen}
      >
        <span className="text-sm font-bold uppercase tracking-wider">{title}</span>
        <ChevronDown
          className={cn(
            "h-4 w-4 text-muted-foreground/50 transition-transform duration-200",
            isOpen && "rotate-180",
          )}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pt-3">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
});

export default FilterSection;
