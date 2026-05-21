import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";

export default function ForgotPasswordPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  return (
    <AuthLayout>
      <PageHelmet title={t("auth.page.forgotPassword.title")} />
      <AuthFormWrapper>
        <AuthHeader
          title={t("auth.header.forgotPassword.title")}
          description={t("auth.header.forgotPassword.description")}
        />

        <form className="space-y-6" noValidate>
          <AuthInput
            label={t("auth.form.email")}
            type="email"
            placeholder={t("auth.form.emailPlaceholder")}
            autoComplete="email"
          />

          <AuthSubmitButton
            label={t("auth.submit.forgotPassword")}
            loadingLabel={t("auth.submit.forgotPasswordLoading")}
          />
        </form>

        <div className="mt-8 text-center">
          <Link
            to={buildLocalizedPath("/login", lang)}
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