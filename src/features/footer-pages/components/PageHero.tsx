import { memo } from "react";
import { useTranslation } from "react-i18next";

interface PageHeroProps {
  title: string;
  description?: string;
  "data-tour"?: string;
}

const PageHero = memo(function PageHero({ title, description, ...props }: PageHeroProps) {
  const { t } = useTranslation();
  return (
    <div className="mb-12 border-l-4 border-foreground pl-6" {...props}>
      <span className="text-xs font-black uppercase tracking-[0.4em] text-muted-foreground/40">
        {t("footerPages.pageHero.label")}
      </span>
      <h1 className="mt-4 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
        {title}.
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-lg font-medium leading-relaxed text-muted-foreground/60">
          {description}
        </p>
      )}
    </div>
  );
});

export default PageHero;
