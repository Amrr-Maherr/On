import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";

export default function ResetPasswordPage() {
  const { t } = useTranslation();
  return (
    <AuthLayout>
      <PageHelmet title={t("auth.page.resetPassword.title")} />
      <AuthFormWrapper>
        <AuthHeader
          title={t("auth.header.resetPassword.title")}
          description={t("auth.header.resetPassword.description")}
        />

        <form className="space-y-6" noValidate>
          <AuthInput
            label={t("auth.form.recoveryCode")}
            type="text"
            placeholder={t("auth.form.recoveryCodePlaceholder")}
            autoComplete="off"
          />
          <AuthInput
            label={t("auth.form.password")}
            type="password"
            placeholder={t("auth.form.passwordPlaceholder")}
            autoComplete="new-password"
          />
          <AuthInput
            label={t("auth.form.confirmPassword")}
            type="password"
            placeholder={t("auth.form.confirmPasswordPlaceholder")}
            autoComplete="new-password"
          />

          <AuthSubmitButton
            label={t("auth.submit.resetPassword")}
            loadingLabel={t("auth.submit.resetPasswordLoading")}
          />
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            {t("auth.links.backToSignIn")}
          </Link>
        </div>
      </AuthFormWrapper>
    </AuthLayout>
  );
}