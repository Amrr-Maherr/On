import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { buildLocalizedPath } from "@/lib/localized-path";
import GoogleAuthButton from "@/features/auth/components/GoogleAuthButton";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";
import type { UseFormRegister, FieldErrors, UseFormHandleSubmit } from "react-hook-form";
import type { LoginFormFields } from "@/features/auth/types/auth";

type LoginViewProps = {
  lang: string;
  isPending: boolean;
  error: Error | null;
  register: UseFormRegister<LoginFormFields>;
  handleSubmit: UseFormHandleSubmit<LoginFormFields>;
  errors: FieldErrors<LoginFormFields>;
  onSubmit: (data: LoginFormFields) => void;
}

export default function LoginView({
  lang,
  isPending,
  error,
  register,
  handleSubmit,
  errors,
  onSubmit,
}: LoginViewProps) {
  const { t } = useTranslation();

  return (
    <AuthLayout>
      <PageHelmet
        title={t("auth.page.login.title")}
        description={t("auth.page.login.description")}
      />
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
                to={buildLocalizedPath("/forgot-password", lang)}
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
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-border/50" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-3 text-muted-foreground/50 tracking-[0.1em]">
              {t("auth.social.orContinueWith")}
            </span>
          </div>
        </div>

        <div className="flex justify-center">
          <GoogleAuthButton />
        </div>

        <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
          {t("auth.links.noAccount")}{" "}
          <Link
            to={buildLocalizedPath("/register", lang)}
            className="font-black uppercase tracking-wider text-foreground transition-colors hover:underline underline-offset-4"
          >
            {t("auth.links.createAccount")}
          </Link>
        </p>
      </AuthFormWrapper>
    </AuthLayout>
  );
}
