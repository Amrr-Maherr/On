import { LazyLoadImage } from "react-lazy-load-image-component";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import type { Product } from "@/features/products/types";
import "react-lazy-load-image-component/src/effects/blur.css";
import AddToCart from "./actions/AddToCart";
import AddToFav from "./actions/AddToFav";
import { Star } from "lucide-react";
export default function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="group transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <LazyLoadImage
        src={product.imageCover}
        alt={product.title}
        className="h-60 w-full object-cover relative"
        effect="blur"
      />
      <div className="absolute top-[20px] flex items-center justify-between w-full px-[10px]">
        <AddToCart />
        <AddToFav />
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
          <span className="flex items-center justify-center gap-[5px]">
            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            {product.ratingsAverage}
          </span>
          <span>({product.ratingsQuantity})</span>
          <span className="ml-auto">{product.sold} sold</span>
        </div>
      </CardContent>
    </Card>
  );
}
