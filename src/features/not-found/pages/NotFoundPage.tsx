import { memo } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import PageHelmet from "@/shared/components/PageHelmet";

const NotFoundPage = memo(function NotFoundPage() {
  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-neutral-950 flex flex-col items-center justify-center gap-8 px-6 text-center">
      <PageHelmet title="404 - Page Not Found" />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-[0.04]" />
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">Error 404</p>
        <h1 className="mt-4 text-8xl font-black text-white md:text-9xl">404</h1>
        <p className="mt-4 text-xl text-white/60">Page not found</p>
        <p className="mt-2 text-sm text-white/40 max-w-sm">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
      </div>
      <Link
        to="/"
        className="relative z-10 inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-sm font-bold uppercase tracking-wider text-neutral-950 transition-all duration-200 hover:bg-white/90 active:scale-[0.98]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back Home
      </Link>
    </div>
  );
});

export default NotFoundPage;
