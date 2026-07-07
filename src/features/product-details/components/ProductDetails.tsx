import { useState, memo } from "react";
import { useTranslation } from "react-i18next";
import { ArrowLeft } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import type { Product } from "@/features/products/types";
import { ProductGallery } from "@/features/product-details/components/product-gallery";
import ProductDetailsBrands from "./ProductDetailsBrands";
import ProductDetailsProducts from "./ProductDetailsProducts";
import ProductInfo from "./ProductInfo";
import ProductRating from "./ProductRating";
import ProductPrice from "./ProductPrice";
import ProductDescription from "./ProductDescription";
import ProductQuantity from "./ProductQuantity";
import ProductActions from "./ProductActions";
import ProductReviews from "./ProductReviews";
import AddReview from "./AddReview";
import ProductQA from "./ProductQA";
import ProductSubcategories from "./ProductSubcategories";
import ProductCategory from "./ProductCategory";
import ProductBrand from "./ProductBrand";
import ProductStockStatus from "./ProductStockStatus";

interface ProductDetailsProps {
  product: Product;
}

const ProductDetails = memo(function ProductDetails({ product }: ProductDetailsProps) {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const [quantity, setQuantity] = useState(1);
  const [showAllReviews, setShowAllReviews] = useState(false);

  const allImages = [product.imageCover, ...product.images];

  return (
    <div className="pb-16 md:pb-24">
      <div className="container-layout">
        <div className="mb-6 flex items-center gap-3 md:mb-8 md:gap-4">
          <Link
            to={buildLocalizedPath("/products", lang)}
            className="flex h-8 w-8 items-center justify-center rounded-none text-muted-foreground/50 transition-colors hover:bg-muted/50 hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Breadcrumb
            items={[
              { label: t("products.details.breadcrumb.home"), href: buildLocalizedPath("/", lang) },
              { label: t("products.details.breadcrumb.products"), href: buildLocalizedPath("/products", lang) },
              { label: product.category.name },
            ]}
          />
        </div>

        <div className="grid gap-6 lg:grid-cols-2 lg:gap-20">
          <div className="min-w-0 lg:sticky lg:top-24 lg:self-start" data-tour="product-gallery">
            <ProductGallery images={allImages} />
          </div>

          <div className="space-y-6 md:space-y-10" data-tour="product-info">
            <ProductInfo
              title={product.title}
              brandName={product.brand?.name}
              brandSlug={product.brand?.slug}
              brandId={product.brand?._id || product.brand?.id}
            />

            <ProductPrice
              price={product.price}
              priceAfterDiscount={product.priceAfterDiscount}
            />

            <ProductRating
              rating={product.ratingsAverage}
              ratingCount={product.ratingsQuantity}
              sold={product.sold}
            />

            {product.description && (
              <ProductDescription description={product.description} />
            )}

            <div className="space-y-3 md:space-y-4">
              <ProductQuantity
                quantity={quantity}
                available={product.quantity}
                onDecrease={() => setQuantity(Math.max(1, quantity - 1))}
                onIncrease={() => setQuantity(Math.min(product.quantity, quantity + 1))}
              />
              <div data-tour="product-actions">
                <ProductActions productId={product.id} />
              </div>
            </div>

            <ProductStockStatus
              quantity={product.quantity}
              sold={product.sold}
            />

            {product.subcategory && product.subcategory.length > 0 && (
              <ProductSubcategories subcategories={product.subcategory} />
            )}
            <ProductCategory category={product.category} />
            <ProductBrand brand={product.brand} />
          </div>
        </div>

        <div className="mt-12 space-y-12 md:mt-20 md:space-y-20" data-tour="product-reviews">
          <ProductReviews
            reviews={product.reviews ?? []}
            showAll={showAllReviews}
            onToggleShowAll={() => setShowAllReviews(!showAllReviews)}
          />
          <AddReview />
          <ProductQA />
        </div>

        <div className="mt-12 space-y-12 md:mt-20 md:space-y-20">
          <ProductDetailsBrands />
          <ProductDetailsProducts />
        </div>
      </div>
    </div>
  );
});

export default ProductDetails;
