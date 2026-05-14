import type { ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="container-layout py-8">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
}
