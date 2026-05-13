import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <AuthFormWrapper>
        <AuthHeader
          title="Forgot password?"
          description="Enter your email and we'll send you a reset code"
        />

        <form className="space-y-4" noValidate>
          <AuthInput
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
          />

          <AuthSubmitButton label="Send Reset Code" loadingLabel="Sending..." />
        </form>

        <div className="mt-6 text-center">
          <Link
            to="/login"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to sign in
          </Link>
        </div>
      </AuthFormWrapper>
    </AuthLayout>
  );
}
