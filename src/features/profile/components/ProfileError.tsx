import { memo } from "react";
import { useTranslation } from "react-i18next";
import { AlertCircle, RefreshCcw } from "lucide-react";

interface ProfileErrorProps {
  message: string;
  onRetry: () => void;
}

const ProfileError = memo(function ProfileError({ message, onRetry }: ProfileErrorProps) {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10">
        <AlertCircle className="h-8 w-8 text-destructive" />
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-bold text-foreground">{t("profile.error.title")}</h2>
        <p className="max-w-md text-sm text-muted-foreground/70">{message}</p>
      </div>
      <button
        onClick={onRetry}
        className="inline-flex items-center gap-2 rounded-full border border-border/50 px-6 py-2.5 text-sm font-semibold text-foreground transition-all duration-200 hover:bg-muted/30 active:scale-[0.98]"
      >
        <RefreshCcw className="h-4 w-4" />
        {t("profile.error.retry")}
      </button>
    </div>
  );
});

export default ProfileError;
