import { memo, type ReactNode } from "react";
import AuthImageSection from "./auth-image-section";

interface AuthLayoutProps {
  children: ReactNode;
}

const AuthLayout = memo(function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <div className="grid min-h-[calc(100vh-5rem)] md:grid-cols-2">
      <div className="flex items-center justify-center px-6 py-16 sm:px-10 lg:px-20">
        {children}
      </div>
      <AuthImageSection />
    </div>
  );
});

export default AuthLayout;
