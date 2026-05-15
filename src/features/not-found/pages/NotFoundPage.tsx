import { memo } from "react";
import { Link } from "react-router-dom";
import { FileQuestion } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import PageHelmet from "@/shared/components/PageHelmet";

const NotFoundPage = memo(function NotFoundPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-24 text-center">
      <PageHelmet title="404 - Page Not Found" />
      <FileQuestion className="h-24 w-24 text-muted-foreground" />
      <div>
        <h1 className="text-6xl font-bold tracking-tight">404</h1>
        <p className="mt-2 text-xl text-muted-foreground">Page not found</p>
        <p className="mt-1 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
      </div>
      <Link to="/" className={buttonVariants()}>Go Home</Link>
    </div>
  );
});

export default NotFoundPage;
