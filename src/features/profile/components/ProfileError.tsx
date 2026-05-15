import { memo } from "react";
import { AlertCircle, RefreshCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProfileErrorProps {
  message: string;
  onRetry: () => void;
}

const ProfileError = memo(function ProfileError({ message, onRetry }: ProfileErrorProps) {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 text-center">
      <div className="rounded-full bg-destructive/10 p-4">
        <AlertCircle className="h-10 w-10 text-destructive" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold">Failed to load profile</h2>
        <p className="max-w-md text-muted-foreground">{message}</p>
      </div>
      <Button onClick={onRetry} variant="outline" className="mt-2 gap-2">
        <RefreshCcw className="h-4 w-4" />
        Try Again
      </Button>
    </div>
  );
});

export default ProfileError;
