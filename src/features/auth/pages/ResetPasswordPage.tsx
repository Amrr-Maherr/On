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
          title="New Password"
          description="Enter the code sent to your email and your new password"
        />

        <form className="space-y-6" noValidate>
          <AuthInput
            label="Recovery Code"
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
            placeholder="Confirm your password"
            autoComplete="new-password"
          />

          <AuthSubmitButton
            label="Update Password"
            loadingLabel="Updating..."
          />
        </form>

        <div className="mt-8 text-center">
          <Link
            to="/login"
            className="group inline-flex items-center gap-2 text-sm font-black uppercase tracking-widest text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
            Back to sign in
          </Link>
        </div>
      </AuthFormWrapper>
    </AuthLayout>
  );
}
