import { useEffect, useCallback, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useProfile } from "../hooks/useProfile";
import ProfileView from "../components/ProfileView";

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

  const user = useMemo(() => {
    if (userInfoRaw) {
      try {
        const decoded = JSON.parse(userInfoRaw);
        return {
          _id: decoded.sub,
          id: decoded.sub,
          email: decoded.email,
          name: decoded.name,
          picture: decoded.picture,
          role: "user",
          active: true,
        };
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
    window.location.reload();
  }, [navigate, lang, t]);

  return (
    <ProfileView
      user={user}
      lang={lang}
      isLoading={isLoading}
      error={error}
      isEditOpen={isEditOpen}
      isGoogleUser={!!userInfoRaw}
      onLogout={handleLogout}
      onEditOpen={() => setIsEditOpen(true)}
      onEditClose={() => setIsEditOpen(false)}
      onRetry={() => refetch()}
    />
  );
}
