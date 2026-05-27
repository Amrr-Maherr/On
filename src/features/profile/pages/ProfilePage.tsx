import { useEffect, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
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
import type { User } from "../types";

export default function ProfilePage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { data, isLoading, error, refetch } = useProfile();

  const userInfoRaw = localStorage.getItem("user_info");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token && !userInfoRaw) {
      navigate(buildLocalizedPath("/login", lang));
    }
  }, [navigate, lang]);

  const user = useMemo<User | null>(() => {
    if (userInfoRaw) {
      try {
        const decoded = JSON.parse(userInfoRaw);
        return { _id: decoded.sub, id: decoded.sub, email: decoded.email, name: decoded.name, picture: decoded.picture, role: "user", active: true } as User;
      } catch {
        return null;
      }
    }
    return data?.data ?? null;
  }, [userInfoRaw, data]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    localStorage.removeItem("user_info");
    toast.success(t("profile.toast.loggedOut"));
    navigate(buildLocalizedPath("/login", lang));
  }, [navigate, lang, t]);

  if (!user) {
    if (isLoading) return <ProfileSkeleton />;
    return (
      <div className="container-layout section-py pt-8">
        <ProfileError message={error?.message || "User data not found"} onRetry={() => refetch()} />
      </div>
    );
  }

  return (
    <>
      <PageHelmet title={t("profile.page.title")} description={t("profile.page.description")} />
      <CampaignHeader
        subtitle={t("profile.page.hero.subtitle")}
        title={t("profile.page.hero.title")}
        description={t("profile.page.hero.description")}
        backgroundImage="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80"
      />
      <div className="container-layout section-py pt-8">
        <Breadcrumb
          items={[
            { label: t("profile.page.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
            { label: t("profile.page.breadcrumb.profile") },
          ]}
          className="mb-6"
        />
        <div className="mx-auto space-y-8">
          <ScrollReveal>
            <div className="flex flex-col items-center justify-between gap-4 border-b border-border/30 pb-8 md:flex-row md:items-end">
              <div data-tour="profile-header"><ProfileHeader user={user} /></div>
              <div className="mb-4 md:mb-12" data-tour="profile-actions">
                <ProfileActions onLogout={handleLogout} onEdit={() => setIsEditOpen(true)} />
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div data-tour="profile-info"><ProfileInfoCard user={user} /></div>
          </ScrollReveal>
        </div>
      </div>
      {!userInfoRaw && (
        <EditProfileSheet user={user} isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} />
      )}
    </>
  );
}
