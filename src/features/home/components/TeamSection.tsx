import { memo } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { teamData } from "../utils/team";

const LinkedinIcon = ({ size = 16 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip-linkedin-team)">
      <path
        d="M13.633 13.633h-2.37V9.92c0-.885-.017-2.025-1.234-2.025-1.235 0-1.424.965-1.424 1.96v3.778h-2.37V5.998H8.51v1.043h.031a2.5 2.5 0 0 1 2.246-1.233c2.403 0 2.846 1.58 2.846 3.637zM3.56 4.954a1.376 1.376 0 1 1 0-2.751 1.376 1.376 0 0 1 0 2.751m1.185 8.679H2.372V5.998h2.373zM14.815.001H1.18A1.17 1.17 0 0 0 0 1.154v13.691A1.17 1.17 0 0 0 1.18 16h13.635A1.17 1.17 0 0 0 16 14.845V1.153A1.17 1.17 0 0 0 14.815 0"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip-linkedin-team">
        <rect width="16" height="16" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

const TeamSection = memo(function TeamSection() {
  return (
    <section className="section-py">
      <ScrollReveal>
        <div className="container-layout">
          <div className="mx-auto mb-12 max-w-2xl text-center md:mb-16">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-muted-foreground/70">
              Team
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-tight text-foreground md:text-5xl lg:text-6xl">
              Meet the people behind your store
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group flex flex-col items-center gap-6"
              >
                <div className="w-full overflow-hidden rounded-2xl bg-muted/30">
                  <img
                    className="w-full transition-all duration-500 group-hover:scale-[1.02]"
                    src={member.image}
                    alt={member.name}
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-col items-center gap-3">
                  <div className="text-center">
                    <h3 className="text-lg font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="mt-0.5 text-sm text-muted-foreground/70">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={member.socials.website}
                      className="rounded-full p-1.5 text-muted-foreground/50 transition-colors duration-200 hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} website`}
                    >
                      <Globe size={15} />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="rounded-full p-1.5 text-muted-foreground/50 transition-colors duration-200 hover:text-foreground"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                    >
                      <LinkedinIcon size={15} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
});

export default TeamSection;
