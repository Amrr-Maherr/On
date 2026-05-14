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
        toast.success("Account created successfully!");
        navigate("/");
      },
      onError: (err) => {
        toast.error(err.message);
      },
    });
  };

  return (
    <AuthLayout>
      <PageHelmet title="Create Account" description="Create your account." />
      <AuthFormWrapper>
        <AuthHeader
          title="Create an account"
          description="Fill in your details to get started"
        />

        <form className="space-y-4" noValidate onSubmit={handleSubmit(onSubmit)}>
          <AuthInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
            error={errors.name?.message}
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name must be at least 3 characters",
              },
            })}
          />
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
          <AuthInput
            label="Phone"
            type="tel"
            placeholder="01000000000"
            autoComplete="tel"
            error={errors.phone?.message}
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^01[0-9]{9}$/,
                message: "Enter a valid Egyptian phone number",
              },
            })}
          />
          <AuthInput
            label="Password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
            error={errors.password?.message}
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
          />
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
            error={errors.confirmPassword?.message}
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />

          {error && (
            <p className="text-xs text-destructive" role="alert">
              {error.message}
            </p>
          )}

          <AuthSubmitButton
            label="Create Account"
            loadingLabel="Creating..."
            isLoading={isPending}
          />

          <SocialLoginButtons />
        </form>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Already have an account?{" "}
          <Link
            to="/login"
            className="font-medium text-foreground transition-colors hover:text-primary"
          >
            Sign in
          </Link>
        </p>
      </AuthFormWrapper>
    </AuthLayout>
  );
}
