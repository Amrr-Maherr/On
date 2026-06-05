import type { Testimonial } from "../types";
import training from "../../../assets/imgi_1_em-emc-TRAINING-hp-tc-d.jpg";
import football from "../../../assets/imgi_1_em-emc-FOOTBALL-hp-tc-d.jpg";
import walking from "../../../assets/imgi_1_em-walking-sportswear-ss26-launch-tc.jpg";
import padel from "../../../assets/imgi_1_em-emc-PADEL-hp-tc-d-n.jpg";
import padelLaunch from "../../../assets/imgi_1_emc-padel_-padel-fw25-launch-mglp-navigation_card_tc.jpg";
import terrace from "../../../assets/imgi_1_eg-mr-em-TERRACE_LOWPROFILE-hp-tc-d.jpg";

export const testimonialsData: Testimonial[] = [
  {
    name: "Olivia Martinez",
    role: "Professional Runner",
    avatar: training,
    quote:
      "The quality exceeded my expectations. Every piece feels thoughtfully designed and built to last. This is what performance gear should be.",
    rating: 5,
  },
  {
    name: "James Thompson",
    role: "Fitness Coach",
    avatar: football,
    quote:
      "Shopping here changed the way I think about my gear. The curation is impeccable and the fabric technology is unmatched.",
    rating: 5,
  },
  {
    name: "Amara Okafor",
    role: "Yoga Instructor",
    avatar: walking,
    quote:
      "I appreciate the attention to detail from the stitching to the breathability. It's rare to find a brand that cares this much about athletes.",
    rating: 5,
  },
  {
    name: "Liam Chen",
    role: "Marathon Athlete",
    avatar: padel,
    quote:
      "The aerodynamic fit I was looking for, without compromising on comfort. My go-to for essentials that actually improve performance.",
    rating: 4,
  },
  {
    name: "Sarah Jenkins",
    role: "Crossfit Athlete",
    avatar: padelLaunch,
    quote:
      "Durability is key for my training, and this brand delivers. I've put these clothes through hell and they still look brand new.",
    rating: 5,
  },
  {
    name: "Marcus Velez",
    role: "Street Explorer",
    avatar: terrace,
    quote:
      "Style meets substance. I can go from a morning run to a casual meeting without changing. The versatility is incredible.",
    rating: 5,
  },
];
