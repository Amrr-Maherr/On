import { useMutation } from "@tanstack/react-query";
import { postLogin } from "../api/PostLogin";
import type { AuthResponse, LoginFormFields } from "@/features/auth/types/auth";

export const useLogin = () => {
  return useMutation<AuthResponse, Error, LoginFormFields>({
    mutationFn: postLogin,
  });
};
