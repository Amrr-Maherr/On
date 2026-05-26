import { memo } from "react"
import { useTranslation } from "react-i18next"
import { AlertTriangle, RefreshCw } from "lucide-react"

interface BranchErrorProps {
  message?: string
  onRetry?: () => void
}

const BranchError = memo(function BranchError({
  message,
  onRetry,
}: BranchErrorProps) {
  const { t } = useTranslation()

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <div className="flex h-16 w-16 items-center justify-center bg-destructive/10">
        <AlertTriangle className="h-8 w-8 text-destructive" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-foreground">
          {t("branches.error.title")}
        </h3>
        <p className="mx-auto mt-2 max-w-xs text-sm text-muted-foreground/70">
          {message || t("branches.error.defaultMessage")}
        </p>
      </div>
      {onRetry && (
        <button
          type="button"
          onClick={onRetry}
          className="inline-flex items-center gap-2 border-2 border-border/40 px-6 py-2.5 text-sm font-bold uppercase tracking-wider text-foreground transition-all duration-300 hover:border-foreground hover:bg-muted/30 active:scale-[0.98]"
        >
          <RefreshCw className="h-4 w-4" />
          {t("branches.error.retry")}
        </button>
      )}
    </div>
  )
})

export default BranchError
