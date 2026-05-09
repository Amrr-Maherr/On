import { useState } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Product } from "@/features/products/types";
import ProductImages from "./ProductImages";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ProductQuantity from "./ProductQuantity";
import ProductActions from "./ProductActions";
import ProductReviews from "./ProductReviews";
import ProductQA from "./ProductQA";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState(product.imageCover);
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const allImages = [product.imageCover, ...product.images];

  return (
    <div className="container-layout py-8">
      <Breadcrumb
        className="mb-6"
        items={[
          { label: "Home", href: "/" },
          { label: "Products", href: "/products" },
          { label: product.category.name },
        ]}
      />

      <div className="grid gap-8 md:grid-cols-2">
        <ProductImages
          images={allImages}
          selectedImage={selectedImage}
          onSelectImage={setSelectedImage}
        />

        <div className="space-y-6">
          <ProductInfo
            title={product.title}
            brandName={product.brand?.name}
          />
          <ProductRating
            rating={product.ratingsAverage}
            ratingCount={product.ratingsQuantity}
            sold={product.sold}
          />
          <ProductPrice
            price={product.price}
            priceAfterDiscount={product.priceAfterDiscount}
          />
          {product.description && (
            <ProductDescription description={product.description} />
          )}
          <ProductQuantity
            quantity={quantity}
            available={product.quantity}
            onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
            onIncrease={() => setQuantity(Math.min(product.quantity, quantity + 1))}
          />
          <ProductActions />
        </div>
      </div>

      {product.reviews && product.reviews.length > 0 && (
        <ProductReviews
          reviews={product.reviews}
          showAll={showAllReviews}
          onToggleShowAll={() => setShowAllReviews(!showAllReviews)}
        />
      )}

      <ProductQA />
    </div>
  );
}
