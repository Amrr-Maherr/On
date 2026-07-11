import { memo, type ReactNode } from "react";

type PageLayoutProps = {
  children: ReactNode;
};

const PageLayout = memo(function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="container-layout py-8">
      {children}
    </div>
  );
});

export default PageLayout;
