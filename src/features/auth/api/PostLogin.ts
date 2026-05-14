import { api } from "@/lib";
import type { AuthResponse, LoginFormFields } from "@/features/auth/types/auth";

export async function postLogin(
  data: LoginFormFields,
): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/api/v1/auth/signin", data);
  return response.data;
}
