import { memo, type ReactNode } from "react";
import AuthImageSection from "./auth-image-section";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = memo(function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-[calc(100vh-4rem)] md:grid-cols-2">
      <div className="flex items-center justify-center px-4 py-12 sm:px-8 lg:px-16">
        {children}
      </div>
      <AuthImageSection />
    </div>
  );
});

export default AuthLayout;
