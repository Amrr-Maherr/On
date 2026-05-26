import { memo, useCallback } from "react"
import { useTranslation } from "react-i18next"
import { MapPin, Phone, Clock, Building2, Globe } from "lucide-react"
import { cn } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import type { Branch } from "@/features/branches/types"

interface BranchCardProps {
  branch: Branch
  isActive: boolean
  onSelect: (branchId: string) => void
}

const BranchCard = memo(function BranchCard({
  branch,
  isActive,
  onSelect,
}: BranchCardProps) {
  const { t } = useTranslation()

  const handleClick = useCallback(() => {
    onSelect(branch.id)
  }, [branch.id, onSelect])

  return (
    <button
      type="button"
      onClick={handleClick}
      className={cn(
        "w-full text-left transition-all duration-300 border-2 bg-card p-5 md:p-6",
        isActive
          ? "border-foreground"
          : "border-border/40 hover:border-border hover:bg-muted/20",
      )}
      aria-current={isActive ? "true" : undefined}
      aria-label={`${branch.name}, ${branch.city}`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-3">
            <h3
              className={cn(
                "font-heading text-lg font-black uppercase tracking-tight transition-colors",
                isActive ? "text-foreground" : "text-foreground/90",
              )}
            >
              {branch.name}
            </h3>
            {branch.isHeadquarters && (
              <Badge variant="default" className="text-[9px]">
                {t("branches.page.badge.headquarters")}
              </Badge>
            )}
            {branch.offersInternationalShipping && (
              <Badge variant="outline" className="text-[9px] gap-1">
                <Globe className="size-2.5" />
                {t("branches.page.badge.internationalShipping")}
              </Badge>
            )}
          </div>

          <div className="mt-4 space-y-2.5">
            <div className="flex items-start gap-3 text-sm">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground/50" />
              <span className="font-medium text-muted-foreground/70">
                {branch.address}, {branch.city}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Phone className="h-4 w-4 shrink-0 text-muted-foreground/50" />
              <span className="font-medium text-muted-foreground/70">
                {branch.phone}
              </span>
            </div>

            <div className="flex items-center gap-3 text-sm">
              <Clock className="h-4 w-4 shrink-0 text-muted-foreground/50" />
              <span className="font-medium text-muted-foreground/70">
                {branch.workingHours}
              </span>
            </div>
          </div>
        </div>

        <div
          className={cn(
            "flex h-12 w-12 shrink-0 items-center justify-center border-2 transition-colors",
            isActive
              ? "border-foreground bg-foreground text-background"
              : "border-border/40 bg-muted/20 text-muted-foreground/50",
          )}
        >
          <Building2 className="h-5 w-5" />
        </div>
      </div>
    </button>
  )
})

export default BranchCard
