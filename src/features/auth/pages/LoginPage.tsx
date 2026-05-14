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
        toast.success("Logged in successfully!");
        navigate("/");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <AuthLayout>
      <PageHelmet title="Sign In" description="Sign in to your account." />
      <AuthFormWrapper>
        <AuthHeader
          title="Welcome back"
          description="Sign in to your account to continue"
        />

        <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            error={errors.email?.message}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
          />
          <div className="space-y-1.5">
            <AuthInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
              error={errors.password?.message}
              {...register("password", {
                required: "Password is required",
                minLength: {
                  value: 6,
                  message: "Password must be at least 6 characters",
                },
              })}
            />
            <div className="flex justify-end">
              <Link
                to="/forgot-password"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                Forgot password?
              </Link>
            </div>
          </div>

          {error && (
            <p className="text-xs text-destructive" role="alert">
              {error.message}
            </p>
          )}

          <AuthSubmitButton
            label="Sign In"
            loadingLabel="Signing in..."
            isLoading={isPending}
          />

          <SocialLoginButtons />
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            Create one
          </Link>
        </p>
      </AuthFormWrapper>
    </AuthLayout>
  );
}
