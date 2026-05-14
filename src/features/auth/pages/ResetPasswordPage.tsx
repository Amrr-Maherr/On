import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <PageHelmet title="Reset Password" />
      <AuthFormWrapper>
        <AuthHeader
          title="Reset password"
          description="Enter the code sent to your email and your new password"
        />

        <form className="space-y-4" noValidate>
          <AuthInput
            label="Reset Code"
            type="text"
            placeholder="Enter the code"
            autoComplete="off"
          />
          <AuthInput
            label="New Password"
            type="password"
            placeholder="Enter new password"
            autoComplete="new-password"
          />
          <AuthInput
            label="Confirm Password"
            type="password"
            placeholder="Re-enter new password"
            autoComplete="new-password"
          />

          <AuthSubmitButton
            label="Reset Password"
            loadingLabel="Resetting..."
          />
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
