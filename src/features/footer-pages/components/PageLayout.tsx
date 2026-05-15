import { memo, type ReactNode } from "react";

interface PageLayoutProps {
  children: ReactNode;
}

const PageLayout = memo(function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="container-layout py-8">
      <div className="mx-auto max-w-6xl">
        {children}
      </div>
    </div>
  );
});

export default PageLayout;
