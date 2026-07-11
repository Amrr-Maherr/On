import type { LucideIcon } from "lucide-react";

export type FeatureItem = {
  title: string;
  description: string;
  icon?: LucideIcon;
};

export type TeamMember = {
  name: string;
  role: string;
  image: string;
  socials: {
    website: string;
    linkedin: string;
  };
};

export type BlogPost = {
  coverImage: string;
  title: string;
  date: string;
  description: string;
};

export type Testimonial = {
  name: string;
  role: string;
  avatar: string;
  quote: string;
  rating: number;
};

export type Value = {
  image: string;
  title: string;
  description: string;
};
