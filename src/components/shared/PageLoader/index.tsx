import { LoaderMorphing } from "@/components/shared/LoaderMorphing";

export function PageLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <LoaderMorphing size={80} color="currentColor" duration={2} />
    </div>
  );
}
