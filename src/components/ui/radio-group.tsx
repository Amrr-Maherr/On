import { RadioGroup as RadioGroupPrimitive } from "@base-ui/react/radio-group"
import { Radio } from "@base-ui/react/radio"

import { cn } from "@/lib/utils"

function RadioGroup<Value = any>({
  className,
  ...props
}: RadioGroupPrimitive.Props<Value>) {
  return (
    <RadioGroupPrimitive
      className={cn("flex flex-col gap-2", className)}
      {...props}
    />
  )
}

function RadioGroupItem({
  className,
  children,
  ...props
}: Radio.Root.Props) {
  return (
    <Radio.Root
      className={cn(
        "group/radio flex cursor-pointer items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
        "data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      <span className="flex size-4 shrink-0 items-center justify-center rounded-full border-2 border-border/60 group-data-[checked]/radio:border-foreground transition-colors">
        <Radio.Indicator className="size-2 rounded-full bg-foreground scale-0 group-data-[checked]/radio:scale-100 transition-transform" />
      </span>
      {children}
    </Radio.Root>
  )
}

export { RadioGroup, RadioGroupItem }
