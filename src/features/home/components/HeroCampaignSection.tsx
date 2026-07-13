import { type ReactNode, memo } from "react";

type HeroCampaignSectionProps = {
  children: ReactNode;
  image?: string;
};

const HeroCampaignSection = memo(function HeroCampaignSection({
  children,
  image,
}: HeroCampaignSectionProps) {
  return (
    <section className="relative min-h-[60vh] overflow-hidden bg-neutral-950 md:min-h-[80vh] md:mt-[50px]">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent md:bg-gradient-to-r md:from-neutral-950/80 md:via-neutral-950/40 md:to-transparent" />
      </div>

      <div className="container-layout relative z-10 flex min-h-[60vh] items-center pt-16 pb-12 md:min-h-[80vh] md:pt-0 md:pb-0">
        {children}
      </div>
    </section>
  );
});

export default HeroCampaignSection;
