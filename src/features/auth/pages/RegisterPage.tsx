import { useTranslation } from "react-i18next";
import { Link, useNavigate } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";
import SocialLoginButtons from "@/features/auth/components/social-login-buttons";
import { useRegister } from "@/features/auth/hooks/useRegister";
import type { RegisterFormFields } from "@/features/auth/types/auth";

export default function RegisterPage() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const { mutate, isPending, error } = useRegister();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<RegisterFormFields>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phone: "",
    },
  });

  const password = useWatch({ control, name: "password" });

  const onSubmit = (data: RegisterFormFields) => {
    mutate(data, {
      onSuccess: (response) => {
        localStorage.setItem("token", response.token);
        localStorage.setItem("userId", response.user._id);
        toast.success(t("auth.toast.registerSuccess"));
        navigate("/");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <AuthLayout>
      <PageHelmet title={t("auth.page.register.title")} description={t("auth.page.register.description")} />
      <AuthFormWrapper>
        <AuthHeader
          title={t("auth.header.register.title")}
          description={t("auth.header.register.description")}
        />

        <form className="space-y-6" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AuthInput
              label={t("auth.form.fullName")}
              type="text"
              placeholder={t("auth.form.fullNamePlaceholder")}
              autoComplete="name"
              error={errors.name?.message}
              {...register("name", {
                required: t("auth.validation.nameRequired"),
                minLength: {
                  value: 3,
                  message: t("auth.validation.nameMinLength"),
                },
              })}
            />
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
          </div>

          <AuthInput
            label={t("auth.form.phoneNumber")}
            type="tel"
            placeholder={t("auth.form.phonePlaceholder")}
            autoComplete="tel"
            error={errors.phone?.message}
            {...register("phone", {
              required: t("auth.validation.phoneRequired"),
              pattern: {
                value: /^01[0-9]{9}$/,
                message: t("auth.validation.phoneInvalid"),
              },
            })}
          />

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AuthInput
              label={t("auth.form.password")}
              type="password"
              placeholder={t("auth.form.passwordPlaceholder")}
              autoComplete="new-password"
              error={errors.password?.message}
              {...register("password", {
                required: t("auth.validation.passwordRequired"),
                minLength: {
                  value: 6,
                  message: t("auth.validation.passwordMinLength"),
                },
              })}
            />
            <AuthInput
              label={t("auth.form.confirmPassword")}
              type="password"
              placeholder={t("auth.form.confirmPasswordPlaceholder")}
              autoComplete="new-password"
              error={errors.confirmPassword?.message}
              {...register("confirmPassword", {
                required: t("auth.validation.confirmPasswordRequired"),
                validate: (value) =>
                  value === password || t("auth.validation.passwordsDoNotMatch"),
              })}
            />
          </div>

          {error && (
            <p className="text-xs font-bold text-destructive" role="alert">
              {error.message}
            </p>
          )}

          <AuthSubmitButton
            label={t("auth.submit.register")}
            loadingLabel={t("auth.submit.registerLoading")}
            isLoading={isPending}
          />

          <SocialLoginButtons />
        </form>

        <p className="mt-8 text-center text-sm font-medium text-muted-foreground">
          {t("auth.links.hasAccount")}{" "}
          <Link
            to="/login"
            className="font-black uppercase tracking-wider text-foreground transition-colors hover:underline underline-offset-4"
          >
            {t("auth.links.signIn")}
          </Link>
        </p>
      </AuthFormWrapper>
    </AuthLayout>
  );
}