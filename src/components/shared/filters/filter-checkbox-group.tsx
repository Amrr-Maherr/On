import { memo, useState } from "react";

interface FilterCheckboxGroupProps {
  options: { label: string; value: string; count?: number }[];
}

function FilterCheckboxGroup({ options }: FilterCheckboxGroupProps) {
  const [selectedValues, setSelectedValues] = useState<string[]>([]);

  const handleToggle = (value: string) => {
    setSelectedValues((prev) =>
      prev.includes(value)
        ? prev.filter((v) => v !== value)
        : [...prev, value],
    );
  };

  return (
    <div className="space-y-2">
      {options.map((option) => (
        <label
          key={option.value}
          className="flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          <input
            type="checkbox"
            checked={selectedValues.includes(option.value)}
            onChange={() => handleToggle(option.value)}
            className="h-4 w-4 rounded border-border/60 text-foreground accent-foreground"
          />
          <span>{option.label}</span>
          {option.count !== undefined && (
            <span className="ml-auto text-xs font-semibold text-muted-foreground/60">
              {option.count}
            </span>
          )}
        </label>
      ))}
    </div>
  );
}

export default memo(FilterCheckboxGroup);
