import { useMutation } from "@tanstack/react-query";
import { postRegister } from "../api/PostRegister";
import type { AuthResponse, RegisterFormFields } from "@/features/auth/types/auth";

export const useRegister = () => {
  return useMutation<AuthResponse, Error, RegisterFormFields>({
    mutationFn: postRegister,
  });
};
