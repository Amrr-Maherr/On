import { memo } from "react";
import { Search } from "lucide-react";
import { cn } from "@/lib/utils";

interface FilterSearchInputProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
}

function FilterSearchInput({
  placeholder = "Search...",
  value = "",
  onChange,
}: FilterSearchInputProps) {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground/40" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className={cn(
          "h-9 w-full rounded-xl border border-border/50 bg-transparent pl-9 pr-3 text-sm outline-none",
          "placeholder:text-muted-foreground/50 font-medium",
          "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
          "transition-colors",
        )}
      />
    </div>
  );
}

export default memo(FilterSearchInput);
