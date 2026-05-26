import { memo } from "react"

const BranchLoader = memo(function BranchLoader() {
  return (
    <div className="flex min-h-[40vh] flex-col items-center justify-center gap-6 px-6 py-16 text-center">
      <div className="flex h-20 w-20 items-center justify-center bg-muted/30">
        <div className="h-9 w-9 animate-spin rounded-full border-2 border-foreground/10 border-t-foreground/40" />
      </div>
      <div className="space-y-3">
        <div className="mx-auto h-5 w-48 animate-pulse bg-muted" />
        <div className="mx-auto h-4 w-64 animate-pulse bg-muted/60" />
      </div>
    </div>
  )
})

export default BranchLoader
