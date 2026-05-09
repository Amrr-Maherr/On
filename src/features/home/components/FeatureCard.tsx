import type { FeatureItem } from "../types";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";

export default function FeatureCard({ title, description, icon }: FeatureItem) {
  const Icon = icon;

  return (
    <Card className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {Icon && (
        <div className="mx-auto mt-6 flex h-12 w-12 items-center justify-center rounded-full bg-muted">
          <Icon className="h-6 w-6 text-foreground/60" aria-hidden="true" />
        </div>
      )}
      <CardHeader className="text-center">
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
    </Card>
  );
}
