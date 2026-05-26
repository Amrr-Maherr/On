import { memo } from "react";

interface FilterCheckboxGroupProps {
  options: { label: string; value: string; count?: number }[];
  selected: string[];
  onToggle: (value: string) => void;
}

/*
 * Multi-select checkbox group for filters.
 * Uses URL search params as the single source of truth (via onToggle).
 */
function FilterCheckboxGroup({ options, selected, onToggle }: FilterCheckboxGroupProps) {
  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <input
            type="checkbox"
            checked={selected.includes(option.value)}
            onChange={() => onToggle(option.value)}
            className="h-4 w-4 rounded-none border-border/60 text-foreground accent-foreground"
          />
          <span>{option.label}</span>
          {option.count !== undefined && (
            <span className="ml-auto text-xs font-semibold text-muted-foreground/60">{option.count}</span>
          )}
        </label>
      ))}
    </div>
  );
}

export default memo(FilterCheckboxGroup);
