import { Link } from "react-router-dom";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";
import SocialLoginButtons from "@/features/auth/components/social-login-buttons";

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthFormWrapper>
        <AuthHeader
          title="Welcome back"
          description="Sign in to your account to continue"
        />

        <form className="space-y-4" noValidate>
          <AuthInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <div className="space-y-1.5">
            <AuthInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              autoComplete="current-password"
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

          <AuthSubmitButton label="Sign In" />

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
