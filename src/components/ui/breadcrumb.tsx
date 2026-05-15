import { Fragment, memo } from "react"
import { Link } from "react-router-dom"
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
                  <span data-slot="breadcrumb-current" className="text-sm font-semibold text-foreground" aria-current="page">
                    {item.label}
                  </span>
                ) : item.href ? (
                  <Link
                    data-slot="breadcrumb-link"
                    to={item.href}
                    className="text-sm font-medium transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <span className="text-sm font-medium transition-colors hover:text-foreground">{item.label}</span>
                )}
              </li>
              {!isLast && (
                <li data-slot="breadcrumb-separator" className="[&>svg]:size-4" role="presentation">
                  <ChevronRight className="text-muted-foreground/30" strokeWidth={2} />
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
