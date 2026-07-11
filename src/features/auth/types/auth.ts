export type LoginFormFields = {
  email: string;
  password: string;
};

export type RegisterFormFields = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  phone: string;
};

export type ForgotPasswordFormFields = {
  email: string;
};

export type ResetPasswordFormFields = {
  code: string;
  password: string;
  confirmPassword: string;
};

export type AuthUser = {
  _id: string;
  name: string;
  email: string;
  phone?: string;
  role: string;
};

export type AuthResponse = {
  message: string;
  user: AuthUser;
  token: string;
};
