import { memo } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

type FilterCheckboxGroupProps = {
  options: { label: string; value: string; count?: number }[];
  selected: string | null;
  onChange: (value: string) => void;
};

function FilterCheckboxGroup({ options, selected, onChange }: FilterCheckboxGroupProps) {
  return (
    <RadioGroup value={selected ?? ""} onValueChange={(v) => onChange(v)}>
      {options.map((option) => (
        <RadioGroupItem
          key={option.value}
          value={option.value}
          onClick={() => {
            if (selected === option.value) onChange("");
          }}
        >
          <span>{option.label}</span>
          {option.count !== undefined && (
            <span className="ml-auto text-xs font-semibold text-muted-foreground/60">{option.count}</span>
          )}
        </RadioGroupItem>
      ))}
    </RadioGroup>
  );
}

export default memo(FilterCheckboxGroup);
