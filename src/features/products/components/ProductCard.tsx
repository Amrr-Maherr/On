import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Product } from "@/features/products/types";
import AddToCart from "./actions/AddToCart";
import AddToFav from "./actions/AddToFav";
import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link to={`/products/${product.title}/${product.id}`}>
      <Card className="group relative transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="relative">
          <img
            src={product.imageCover}
            alt={product.title}
            loading="lazy"
            className="h-60 w-full rounded-t-xl object-cover"
          />
          <div className="absolute left-3 right-3 top-3 flex items-start justify-between">
            <AddToCart />
            <AddToFav />
          </div>
        </div>
        <CardHeader>
          <CardTitle className="line-clamp-1">{product.title}</CardTitle>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold">
              ${product.priceAfterDiscount ?? product.price}
            </span>
            {product.priceAfterDiscount && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.price}
              </span>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="flex items-center justify-center gap-1">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              {product.ratingsAverage}
            </span>
            <span>({product.ratingsQuantity})</span>
            <span className="ml-auto">{product.sold} sold</span>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
