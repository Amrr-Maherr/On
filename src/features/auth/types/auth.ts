export interface LoginFormFields {
  email: string;
  password: string;
}

export interface RegisterFormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface ForgotPasswordFormFields {
  email: string;
}

export interface ResetPasswordFormFields {
  code: string;
  password: string;
  confirmPassword: string;
}
