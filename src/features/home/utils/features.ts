import { Truck, RotateCcw, Globe, Shield } from "lucide-react";
import type { FeatureItem } from "../types";

export const featuresData: FeatureItem[] = [
  {
    title: "Free shipping",
    description: "On orders over $50.00",
    icon: Truck,
  },
  {
    title: "Very easy to return",
    description: "Just phone number",
    icon: RotateCcw,
  },
  {
    title: "Worldwide delivery",
    description: "Fast delivery worldwide",
    icon: Globe,
  },
  {
    title: "Refunds policy",
    description: "60 days return for any reason",
    icon: Shield,
  },
];
