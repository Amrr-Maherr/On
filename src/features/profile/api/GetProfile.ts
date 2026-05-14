import api from "@/lib/axios";
import type { ProfileResponse } from "../types";

export async function getProfile(): Promise<ProfileResponse> {
  // Using common endpoint for profile data
  const response = await api.get<ProfileResponse>("/api/v1/users/getMe");
  return response.data;
}
