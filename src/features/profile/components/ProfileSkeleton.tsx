import { memo } from "react";

const ProfileSkeleton = memo(function ProfileSkeleton() {
  return (
    <div className="container-layout mx-auto animate-pulse space-y-8 py-8">
      <div className="flex flex-col items-center gap-4 md:flex-row md:gap-8">
        <div className="h-24 w-24 rounded-full bg-muted md:h-32 md:w-32" />
        <div className="space-y-3 text-center md:text-left">
          <div className="h-8 w-48 animate-pulse rounded-xl bg-muted md:h-10" />
          <div className="mx-auto h-4 w-64 animate-pulse rounded-lg bg-muted md:mx-0" />
          <div className="mx-auto h-6 w-20 animate-pulse rounded-full bg-muted md:mx-0" />
        </div>
      </div>

      <div className="rounded-2xl border border-border/30 bg-card">
        <div className="h-12 rounded-t-2xl border-b border-border/30 bg-muted/30" />
        <div className="grid gap-6 p-6 md:grid-cols-2">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex gap-3">
              <div className="h-10 w-10 animate-pulse rounded-xl bg-muted" />
              <div className="space-y-2">
                <div className="h-3 w-24 animate-pulse rounded-lg bg-muted" />
                <div className="h-5 w-40 animate-pulse rounded-lg bg-muted" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-3">
        <div className="h-11 w-36 animate-pulse rounded-full bg-muted" />
        <div className="h-11 w-36 animate-pulse rounded-full bg-muted" />
      </div>
    </div>
  );
});

export default ProfileSkeleton;
