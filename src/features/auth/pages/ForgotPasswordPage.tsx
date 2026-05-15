import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHelmet from "@/shared/components/PageHelmet";
import AuthLayout from "@/features/auth/components/auth-layout";
import AuthFormWrapper from "@/features/auth/components/auth-form-wrapper";
import AuthHeader from "@/features/auth/components/auth-header";
import AuthInput from "@/features/auth/components/auth-input";
import AuthSubmitButton from "@/features/auth/components/auth-submit-button";

export default function ForgotPasswordPage() {
  return (
    <AuthLayout>
      <PageHelmet title="Forgot Password" />
      <AuthFormWrapper>
        <AuthHeader
          title="Recover Access"
          description="Enter your email and we'll send you a reset code"
        />

        <form className="space-y-6" noValidate>
          <AuthInput
            label="Email Address"
            type="email"
            placeholder="example@mail.com"
            autoComplete="email"
          />

          <AuthSubmitButton label="Send Reset Code" loadingLabel="Sending..." />
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
