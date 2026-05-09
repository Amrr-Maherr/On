import { ShoppingCart, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ProductActions() {
  return (
    <div className="flex gap-3">
      <Button size="lg" className="gap-2 rounded-full px-8">
        <ShoppingCart className="h-5 w-5" />
        Add to Cart
      </Button>
      <Button variant="outline" size="lg" className="rounded-full px-4">
        <Heart className="h-5 w-5" />
      </Button>
    </div>
  );
}
