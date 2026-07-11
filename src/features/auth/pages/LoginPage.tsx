import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useLogin } from "@/features/auth/hooks/useLogin";
import LoginView from "@/features/auth/components/LoginView";
import type { LoginFormFields } from "@/features/auth/types/auth";

export default function LoginPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
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
        navigate(buildLocalizedPath("/", lang));
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <LoginView
      lang={lang}
      isPending={isPending}
      error={error}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}
