import { memo } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";

const NotFoundPage = memo(function NotFoundPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  return (
    <div className="relative min-h-[70vh] overflow-hidden bg-neutral-950 flex flex-col items-center justify-center gap-8 px-6 text-center">
      <PageHelmet title={t("notFound.title")} />
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-[0.04]" />
      <div className="relative z-10">
        <p className="text-xs font-bold uppercase tracking-[0.3em] text-white/40">{t("notFound.badge")}</p>
        <h1 className="mt-4 text-8xl font-black text-white md:text-9xl">{t("notFound.heading")}</h1>
        <p className="mt-4 text-xl text-white/60">{t("notFound.message")}</p>
        <p className="mt-2 text-sm text-white/40 max-w-sm">
          {t("notFound.description")}
        </p>
      </div>
      <Link
        to={buildLocalizedPath("/", lang)}
        className="relative z-10 inline-flex h-14 items-center gap-3 rounded-none bg-white px-10 text-[10px] font-black uppercase tracking-[0.2em] text-neutral-950 transition-all duration-300 hover:bg-neutral-200 active:scale-[0.98]"
      >
        <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
        {t("notFound.backHome")}
      </Link>
    </div>
  );
});

export default NotFoundPage;
