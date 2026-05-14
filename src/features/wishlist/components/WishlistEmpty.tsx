import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function WishlistEmpty() {
  return (
    <div className="container-layout flex flex-col items-center justify-center gap-4 py-24 text-center">
      <Heart className="h-16 w-16 text-muted-foreground/50" />
      <div>
        <h3 className="text-lg font-semibold">Your wishlist is empty</h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Save your favorite items here and come back to them later.
        </p>
      </div>
      <Link to="/products">
        <Button variant="default" className="gap-2">
          <Heart className="h-4 w-4" />
          Browse Products
        </Button>
      </Link>
    </div>
  );
}
