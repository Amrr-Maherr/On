import { Fragment, memo } from "react"
import { cn } from "@/lib/utils"
import { ChevronRight } from "lucide-react"

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

const Breadcrumb = memo(function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="breadcrumb" data-slot="breadcrumb" className={cn(className)}>
      <ol data-slot="breadcrumb-list" className="flex flex-wrap items-center gap-1.5 text-sm text-muted-foreground">
        {items.map((item, index) => {
          const isLast = index === items.length - 1
          return (
            <Fragment key={`${item.label}-${index}`}>
              <li data-slot="breadcrumb-item" className="inline-flex items-center gap-1.5">
                {isLast ? (
                  <span data-slot="breadcrumb-current" className="text-foreground" aria-current="page">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a
                    data-slot="breadcrumb-link"
                    href={item.href}
                    className="transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </a>
                ) : (
                  <span className="transition-colors hover:text-foreground">{item.label}</span>
                )}
              </li>
              {!isLast && (
                <li data-slot="breadcrumb-separator" className="[&>svg]:size-4" role="presentation">
                  <ChevronRight />
                </li>
              )}
            </Fragment>
          )
        })}
      </ol>
    </nav>
  )
})

export { Breadcrumb }
export type { BreadcrumbItem }
