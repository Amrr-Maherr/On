import type { LucideIcon } from "lucide-react";

export interface FeatureItem {
  title: string;
  description: string;
  icon?: LucideIcon;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
}
