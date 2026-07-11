import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfoCard from "../components/ProfileInfoCard";
import ProfileActions from "../components/ProfileActions";
import { ProfilePageSkeleton } from "@/features/profile/components/ProfileSkeleton";
import ErrorState from "@/components/shared/Error";
import EditProfileSheet from "../components/EditProfileSheet";
import type { User } from "../types";

type ProfileViewProps = {
  user: User | null;
  lang: string;
  isLoading: boolean;
  error: Error | null;
  isEditOpen: boolean;
  isGoogleUser: boolean;
  onLogout: () => void;
  onEditOpen: () => void;
  onEditClose: () => void;
  onRetry: () => void;
}

export default function ProfileView({
  user,
  lang,
  isLoading,
  error,
  isEditOpen,
  isGoogleUser,
  onLogout,
  onEditOpen,
  onEditClose,
  onRetry,
}: ProfileViewProps) {
  const { t } = useTranslation();

  if (!user) {
    if (isLoading) {
      return <ProfilePageSkeleton />;
    }
    return (
      <div className="container-layout section-py pt-8">
        <ErrorState
          title={t("profile.error.title")}
          message={error?.message || "User data not found"}
          onRetry={onRetry}
          retryLabel={t("profile.error.retry")}
        />
      </div>
    );
  }

  return (
    <>
      <PageHelmet
        title={t("profile.page.title")}
        description={t("profile.page.description")}
      />
      <CampaignHeader
        subtitle={t("profile.page.hero.subtitle")}
        title={t("profile.page.hero.title")}
        description={t("profile.page.hero.description")}
        backgroundImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="container-layout section-py pt-8">
        <Breadcrumb
          items={[
            { label: t("profile.page.breadcrumb.home"), href: "/" },
            { label: t("profile.page.breadcrumb.profile") },
          ]}
          className="mb-6"
        />
        <div className="mx-auto space-y-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-between gap-4 border-b border-border/30 pb-8 md:flex-row md:items-end">
              <div data-tour="profile-header">
                <ProfileHeader user={user} />
              </div>
              <div className="mb-4 md:mb-12" data-tour="profile-actions">
                <ProfileActions
                  onLogout={onLogout}
                  onEdit={onEditOpen}
                />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div data-tour="profile-info">
              <ProfileInfoCard user={user} />
            </div>
          </ScrollReveal>
        </div>
      </div>
      {!isGoogleUser && (
        <EditProfileSheet
          user={user}
          isOpen={isEditOpen}
          onClose={onEditClose}
        />
      )}
    </>
  );
}
