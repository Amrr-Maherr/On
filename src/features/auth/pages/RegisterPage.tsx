import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm, useWatch } from "react-hook-form";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { useRegister } from "@/features/auth/hooks/useRegister";
import RegisterView from "@/features/auth/components/RegisterView";
import type { RegisterFormFields } from "@/features/auth/types/auth";

export default function RegisterPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
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
        navigate(buildLocalizedPath("/", lang));
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <RegisterView
      lang={lang}
      isPending={isPending}
      error={error}
      password={password}
      register={register}
      handleSubmit={handleSubmit}
      errors={errors}
      onSubmit={onSubmit}
    />
  );
}
