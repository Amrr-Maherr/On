import { memo } from "react";

interface PageHeroProps {
  title: string;
  description?: string;
}

const PageHero = memo(function PageHero({ title, description }: PageHeroProps) {
  return (
    <div className="mb-10">
      <span className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground/60">
        Information
      </span>
      <h1 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
        {title}
      </h1>
      {description && (
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
      <hr className="mt-8 border-border/40" />
    </div>
  );
});

export default PageHero;
