import { useState } from "react";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Product } from "@/features/products/types";
import { ProductGallery } from "@/features/product-details/components/product-gallery";
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
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const allImages = [product.imageCover, ...product.images];

  return (
    <div className="container-layout py-8">
      <div className="mx-auto max-w-7xl">
        <Breadcrumb
          className="mb-6"
          items={[
            { label: "Home", href: "/" },
            { label: "Products", href: "/products" },
            { label: product.category.name },
          ]}
        />

        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={allImages} />
          </div>

          <div className="space-y-6">
            <ProductInfo
              title={product.title}
              brandName={product.brand?.name}
              brandSlug={product.brand?.slug}
              brandId={product.brand?._id || product.brand?.id}
            />

            <div className="rounded-xl border bg-card p-5 md:p-6">
              <ProductRating
                rating={product.ratingsAverage}
                ratingCount={product.ratingsQuantity}
                sold={product.sold}
              />
              <div className="mt-4">
                <ProductPrice
                  price={product.price}
                  priceAfterDiscount={product.priceAfterDiscount}
                />
              </div>
            </div>

            {product.description && (
              <div className="rounded-xl border bg-card p-5 md:p-6">
                <ProductDescription description={product.description} />
              </div>
            )}

            <div className="rounded-xl border bg-card p-5 md:p-6">
              <ProductQuantity
                quantity={quantity}
                available={product.quantity}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                onIncrease={() => setQuantity(Math.min(product.quantity, quantity + 1))}
              />
              <div className="mt-5">
                <ProductActions />
              </div>
            </div>
          </div>
        </div>

        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-12">
            <ProductReviews
              reviews={product.reviews}
              showAll={showAllReviews}
              onToggleShowAll={() => setShowAllReviews(!showAllReviews)}
            />
          </div>
        )}

        <div className="mt-12">
          <ProductQA />
        </div>
      </div>
    </div>
  );
}
