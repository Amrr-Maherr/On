export interface LoginFormFields {
  email: string;
  password: string;
}

export interface RegisterFormFields {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
}

export interface ForgotPasswordFormFields {
  email: string;
}

export interface ResetPasswordFormFields {
  code: string;
  password: string;
  confirmPassword: string;
}

export interface AuthUser {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
}

export interface AuthResponse {
  message: string;
  user: AuthUser;
  token: string;
}
