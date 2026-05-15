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
          "h-11 w-full rounded-none border-2 border-border/40 bg-transparent pl-10 pr-4 text-sm font-bold outline-none",
          "placeholder:text-muted-foreground/30",
          "focus-visible:border-foreground",
          "transition-all duration-300",
        )}
      />
    </div>
  );
}

export default memo(FilterSearchInput);
