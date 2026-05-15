import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
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
import ProductSubcategories from "./ProductSubcategories";
import ProductCategory from "./ProductCategory";
import ProductBrand from "./ProductBrand";
import ProductStockStatus from "./ProductStockStatus";

interface ProductDetailsProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductDetailsProps) {
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const allImages = [product.imageCover, ...product.images];

  return (
    <div className="container-layout pb-16 md:pb-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-center gap-4">
          <Link
            to="/products"
            className="flex h-8 w-8 items-center justify-center rounded-full text-muted-foreground/50 transition-colors hover:bg-muted/50 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Products", href: "/products" },
              { label: product.category.name },
            ]}
          />
        </div>

        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="lg:sticky lg:top-24 lg:self-start">
            <ProductGallery images={allImages} />
          </div>

          <div className="space-y-8">
            <ProductInfo
              title={product.title}
              brandName={product.brand?.name}
              brandSlug={product.brand?.slug}
              brandId={product.brand?._id || product.brand?.id}
            />

            <div className="rounded-2xl border border-border/40 bg-card p-6 md:p-8">
              <ProductRating
                rating={product.ratingsAverage}
                ratingCount={product.ratingsQuantity}
                sold={product.sold}
              />
              <div className="mt-5">
                <ProductPrice
                  price={product.price}
                  priceAfterDiscount={product.priceAfterDiscount}
                />
              </div>
            </div>

            {product.description && (
              <div className="rounded-2xl border border-border/40 bg-card p-6 md:p-8">
                <ProductDescription description={product.description} />
              </div>
            )}

            <div className="rounded-2xl border border-border/40 bg-card p-6 md:p-8">
              <ProductQuantity
                quantity={quantity}
                available={product.quantity}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                onIncrease={() => setQuantity(Math.min(product.quantity, quantity + 1))}
              />
              <div className="mt-6">
                <ProductActions productId={product.id} />
              </div>
            </div>

            <div className="rounded-2xl border border-border/40 bg-card p-6 md:p-8 space-y-6">
              <ProductStockStatus
                quantity={product.quantity}
                sold={product.sold}
              />
            </div>

            <div className="rounded-2xl border border-border/40 bg-card p-6 md:p-8 space-y-6">
              {product.subcategory && product.subcategory.length > 0 && (
                <ProductSubcategories subcategories={product.subcategory} />
              )}
              <ProductCategory category={product.category} />
              <ProductBrand brand={product.brand} />
            </div>
          </div>
        </div>

        <div className="mt-16 space-y-16">
          <ProductReviews
            reviews={product.reviews ?? []}
            showAll={showAllReviews}
            onToggleShowAll={() => setShowAllReviews(!showAllReviews)}
          />
          <ProductQA />
        </div>
      </div>
    </div>
  );
}
