import type {
  LoginFormFields,
  RegisterFormFields,
  ForgotPasswordFormFields,
  ResetPasswordFormFields,
} from "@/features/auth/types/auth";

export const loginFields: (keyof LoginFormFields)[] = ["email", "password"];

export const registerFields: (keyof RegisterFormFields)[] = [
  "name",
  "email",
  "password",
  "confirmPassword",
  "phone",
];

export const forgotPasswordFields: (keyof ForgotPasswordFormFields)[] = [
  "email",
];

export const resetPasswordFields: (keyof ResetPasswordFormFields)[] = [
  "code",
  "password",
  "confirmPassword",
];
