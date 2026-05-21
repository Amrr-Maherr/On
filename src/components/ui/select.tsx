import { ChevronDown } from "lucide-react"
import { Select } from "@base-ui/react/select"

import { cn } from "@/lib/utils"

function SelectRoot<Value, Multiple extends boolean | undefined = false>(
  props: Select.Root.Props<Value, Multiple>,
) {
  return <Select.Root {...props} />
}

function SelectTrigger({
  className,
  children,
  ...props
}: Select.Trigger.Props) {
  return (
    <Select.Trigger
      className={cn(
        "flex h-9 w-full items-center justify-between rounded-none border border-border/50 bg-transparent px-3 text-sm font-medium outline-none transition-colors",
        "focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50",
        "cursor-pointer data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50",
        className,
      )}
      {...props}
    >
      {children}
      <Select.Icon className="flex size-4 items-center justify-center">
        <ChevronDown className="size-3.5 text-muted-foreground/60" />
      </Select.Icon>
    </Select.Trigger>
  )
}

function SelectValue({
  className,
  ...props
}: Select.Value.Props) {
  return (
    <Select.Value
      className={cn("text-muted-foreground", className)}
      {...props}
    />
  )
}

function SelectPopup({
  className,
  ...props
}: Select.Popup.Props) {
  return (
    <Select.Portal>
      <Select.Positioner sideOffset={4} className="z-50">
        <Select.Popup
          className={cn(
            "min-w-[var(--anchor-width)] rounded-none border border-border/50 bg-background py-1 shadow-lg",
            "data-[side=none]:animate-in data-[side=none]:fade-in-0 data-[side=none]:zoom-in-95",
            className,
          )}
          {...props}
        />
      </Select.Positioner>
    </Select.Portal>
  )
}

function SelectList({
  className,
  ...props
}: Select.List.Props) {
  return (
    <Select.List
      className={cn("flex flex-col", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: Select.Item.Props) {
  return (
    <Select.Item
      className={cn(
        "relative flex cursor-pointer items-center gap-2 px-3 py-2 text-sm font-medium outline-none transition-colors",
        "data-[highlighted]:bg-muted/50 data-[highlighted]:text-foreground",
        "data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
        "text-muted-foreground data-[selected]:text-foreground",
        className,
      )}
      {...props}
    >
      <Select.ItemText>{children}</Select.ItemText>
    </Select.Item>
  )
}

export { SelectRoot, SelectTrigger, SelectValue, SelectPopup, SelectList, SelectItem }
