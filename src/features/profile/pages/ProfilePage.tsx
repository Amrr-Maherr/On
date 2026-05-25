import { useEffect, useCallback, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useProfile } from "../hooks/useProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfoCard from "../components/ProfileInfoCard";
import ProfileActions from "../components/ProfileActions";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ProfileError from "../components/ProfileError";
import EditProfileSheet from "../components/EditProfileSheet";

export default function ProfilePage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { data, isLoading, error, refetch } = useProfile();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(buildLocalizedPath("/login", lang));
    }
  }, [navigate, lang]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    toast.success(t("profile.toast.loggedOut"));
    navigate(buildLocalizedPath("/login", lang));
  }, [navigate, lang]);

  const handleEdit = useCallback(() => {
    setIsEditOpen(true);
  }, []);

  if (isLoading) {
    return <ProfileSkeleton />;
  }

  if (error) {
    return (
      <div className="container-layout section-py pt-8">
        <ProfileError
          message={error.message || "Could not fetch profile data"}
          onRetry={() => refetch()}
        />
      </div>
    );
  }

  const user = data?.data;

  if (!user) {
    return (
      <div className="container-layout section-py pt-8">
        <ProfileError message="User data not found" onRetry={() => refetch()} />
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
        <Breadcrumb items={[{ label: t("profile.page.breadcrumb.home"), href: buildLocalizedPath("/", lang) }, { label: t("profile.page.breadcrumb.profile") }]} className="mb-6" />

      <div className="mx-auto space-y-8">
        <div className="flex flex-col items-center justify-between gap-4 border-b border-border/30 pb-8 md:flex-row md:items-end">
          <div data-tour="profile-header">
            <ProfileHeader user={user} />
          </div>
          <div className="mb-4 md:mb-12" data-tour="profile-actions">
            <ProfileActions onLogout={handleLogout} onEdit={handleEdit} />
          </div>
        </div>

        <div data-tour="profile-info">
          <ProfileInfoCard user={user} />
        </div>
      </div>
      </div>
      <EditProfileSheet
        user={user}
        isOpen={isEditOpen}
        onClose={() => setIsEditOpen(false)}
      />
    </>
  );
}
