import { api } from "@/lib";
import type { AuthResponse, RegisterFormFields } from "@/features/auth/types/auth";

export async function postRegister(
  data: RegisterFormFields,
): Promise<AuthResponse> {
  const response = await api.post<AuthResponse>("/api/v1/auth/signup", {
    name: data.name,
    email: data.email,
    password: data.password,
    rePassword: data.confirmPassword,
    phone: data.phone,
  });
  return response.data;
}
