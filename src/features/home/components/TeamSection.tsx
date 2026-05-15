import { memo } from "react";
import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { Badge } from "@/components/ui/badge";
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
    <ScrollReveal>
      <section className="container-layout md:py-22">
        <div className="mx-auto flex w-full flex-col items-center justify-center gap-8 md:gap-16">
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              ease: [0.21, 0.47, 0.32, 0.98] as const,
            }}
            className="mx-auto flex max-w-xl flex-col items-center justify-center gap-4 text-center"
          >
            <Badge variant="outline" className="h-auto px-3 py-1 text-sm">
              Team
            </Badge>
            <h2 className="text-3xl font-semibold text-foreground md:text-5xl">
              Meet the people behind your store
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {teamData.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: [0.21, 0.47, 0.32, 0.98] as const,
                }}
                className="group flex flex-col items-center justify-center gap-6"
              >
                <img
                  className="h-full w-full transition-all duration-300 group-hover:grayscale"
                  src={member.image}
                  alt={member.name}
                />
                <div className="flex w-full flex-col items-center justify-center gap-4">
                  <div className="flex flex-col items-center justify-center gap-2">
                    <h3 className="text-2xl font-medium text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-sm font-normal text-muted-foreground">
                      {member.role}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={member.socials.website}
                      className="rounded-full p-2 hover:bg-accent/80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} />
                    </a>
                    <a
                      href={member.socials.linkedin}
                      className="rounded-full p-2 hover:bg-accent/80"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LinkedinIcon size={16} />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
});

export default TeamSection;
