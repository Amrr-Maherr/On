import { useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { useProfile } from "../hooks/useProfile";
import ProfileHeader from "../components/ProfileHeader";
import ProfileInfoCard from "../components/ProfileInfoCard";
import ProfileActions from "../components/ProfileActions";
import ProfileSkeleton from "../components/ProfileSkeleton";
import ProfileError from "../components/ProfileError";

export default function ProfilePage() {
  const navigate = useNavigate();
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
    toast.error("Edit profile functionality is not implemented yet.");
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
        <ProfileError 
          message="User data not found" 
          onRetry={() => refetch()} 
        />
      </div>
    );
  }

  return (
    <div className="container-layout section-py pt-8">
      <PageHelmet title="My Profile" description="Manage your account information." />
      
      <div className="mx-auto max-w-4xl space-y-8">
        <div className="flex flex-col items-center justify-between gap-4 border-b pb-8 md:flex-row md:items-end">
          <ProfileHeader user={user} />
          <div className="mb-4 md:mb-12">
            <ProfileActions onLogout={handleLogout} onEdit={handleEdit} />
          </div>
        </div>

        <ProfileInfoCard user={user} />
      </div>
    </div>
  );
}
