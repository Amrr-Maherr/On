import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";
import SocialLoginButtons from "@/features/auth/components/social-login-buttons";
import { useLogin } from "@/features/auth/hooks/useLogin";
import type { LoginFormFields } from "@/features/auth/types/auth";

export default function LoginPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending, error } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormFields>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: LoginFormFields) => {
    mutate(data, {
      onSuccess: (response) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.user._id);
        toast.success(t("auth.toast.loginSuccess"));
        navigate("/");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <AuthLayout>
      <PageHelmet title={t("auth.page.login.title")} description={t("auth.page.login.description")} />
      <AuthFormWrapper>
        <AuthHeader
          title={t("auth.header.login.title")}
          description={t("auth.header.login.description")}
        />

        <form
          className="space-y-6"
          noValidate
          onSubmit={handleSubmit(onSubmit)}
        >
          <AuthInput
            label={t("auth.form.email")}
            type="email"
            placeholder={t("auth.form.emailPlaceholder")}
            autoComplete="email"
            error={errors.email?.message}
            {...register("email", {
              required: t("auth.validation.emailRequired"),
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: t("auth.validation.emailInvalid"),
              },
            })}
          />
          <div className="space-y-2">
            <AuthInput
              label={t("auth.form.password")}
              type="password"
              placeholder={t("auth.form.passwordPlaceholder")}
              autoComplete="current-password"
              error={errors.password?.message}
              {...register("password", {
                required: t("auth.validation.passwordRequired"),
                minLength: {
                  value: 6,
                  message: t("auth.validation.passwordMinLength"),
                },
              })}
            />
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs font-bold uppercase tracking-wider text-muted-foreground transition-colors hover:text-foreground"
              >
                {t("auth.links.forgotPassword")}
              </Link>
            </div>
          </div>

          {error && (
            <p className="text-xs font-bold text-destructive" role="alert">
              {error.message}
            </p>
          )}

          <AuthSubmitButton
            label={t("auth.submit.login")}
            loadingLabel={t("auth.submit.loginLoading")}
            isLoading={isPending}
          />

          <SocialLoginButtons />
        </form>

        <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
          {t("auth.links.noAccount")}{" "}
          <Link
            to="/register"
            className="font-black uppercase tracking-wider text-foreground transition-colors hover:underline underline-offset-4"
          >
            {t("auth.links.createAccount")}
          </Link>
        </p>
      </AuthFormWrapper>
    </AuthLayout>
  );
}