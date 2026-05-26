import { memo } from "react"
import { useTranslation } from "react-i18next"
import { MapPin } from "lucide-react"

const BranchEmpty = memo(function BranchEmpty() {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center bg-muted/30">
        <MapPin className="h-9 w-9 text-muted-foreground/40" />
      </div>
      <div>
        <h3 className="text-2xl font-bold text-foreground">
          {t("branches.empty.title")}
        </h3>
        <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground/70">
          {t("branches.empty.description")}
        </p>
      </div>
    </div>
  )
})

export default BranchEmpty
