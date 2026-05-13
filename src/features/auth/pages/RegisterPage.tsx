import { Link } from "react-router-dom";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";
import SocialLoginButtons from "@/features/auth/components/social-login-buttons";

export default function RegisterPage() {
  return (
    <AuthLayout>
      <AuthFormWrapper>
        <AuthHeader
          title="Create an account"
          description="Fill in your details to get started"
        />

        <form className="space-y-4" noValidate>
          <AuthInput
            label="Full Name"
            type="text"
            placeholder="John Doe"
            autoComplete="name"
          />
          <AuthInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />
          <AuthInput
            label="Password"
            type="password"
            placeholder="Create a password"
            autoComplete="new-password"
          />
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="Re-enter your password"
            autoComplete="new-password"
          />

          <AuthSubmitButton label="Create Account" loadingLabel="Creating..." />

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
