import { useEffect, useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useProfile } from "../hooks/useProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfoCard from "../components/ProfileInfoCard";
import ProfileActions from "../components/ProfileActions";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ProfileError from "../components/ProfileError";
import EditProfileSheet from "../components/EditProfileSheet";

export default function ProfilePage() {
  const navigate = useNavigate();
  const [isEditOpen, setIsEditOpen] = useState(false);
  const { data, isLoading, error, refetch } = useProfile();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const handleLogout = useCallback(() => {
    localStorage.removeItem("token");
    localStorage.removeItem("userId");
    toast.success("Logged out successfully");
    navigate("/login");
  }, [navigate]);

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
        title="My Profile"
        description="Manage your account information."
      />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Account
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            My Profile.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            Manage your account, orders, and preferences.
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Profile" }]} className="mb-6" />

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
