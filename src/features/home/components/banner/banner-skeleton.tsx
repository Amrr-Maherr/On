function BannerSkeleton() {
  return (
    <div className="flex flex-col items-center gap-8 lg:flex-row">
      <div className="flex flex-col gap-4 lg:w-1/2">
        <div className="h-10 w-3/4 animate-pulse rounded-lg bg-muted sm:h-12 lg:h-14" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
        <div className="mt-2 h-12 w-36 animate-pulse rounded-full bg-muted" />
      </div>
      <div className="flex items-center justify-center lg:w-1/2">
        <div className="aspect-square h-64 w-full max-w-sm animate-pulse rounded-xl bg-muted sm:h-80" />
      </div>
    </div>
  );
}

export default BannerSkeleton;
