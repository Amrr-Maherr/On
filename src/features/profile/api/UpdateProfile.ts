import api from "@/lib/axios";
import type { ProfileResponse, User } from "../types";

export interface UpdateProfileData {
  name?: string;
  email?: string;
  phone?: string;
}

export async function updateProfile(data: UpdateProfileData): Promise<ProfileResponse> {
  const response = await api.put<ProfileResponse>("/api/v1/users/updateMe", data);
  return response.data;
}
