import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useRemoveWishlistItem } from "@/features/wishlist/hooks/useRemoveWishlistItem";
import { useAddToCart } from "@/features/cart/hooks/useAddToCart";
import WishlistItemCard from "@/features/wishlist/components/WishlistItemCard";
import WishlistEmpty from "@/features/wishlist/components/WishlistEmpty";
import WishlistLoader from "@/features/wishlist/components/WishlistLoader";
import WishlistError from "@/features/wishlist/components/WishlistError";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function WishlistPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading, error, refetch } = useWishlist();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveWishlistItem();
  const { mutate: addToCart, isPending: isAddingToCart } = useAddToCart();
  const [removingId, setRemovingId] = useState<string | null>(null);
  const [addingToCartId, setAddingToCartId] = useState<string | null>(null);

  if (isLoading) return <WishlistLoader />;

  if (error) {
    return (
      <WishlistError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const items = data?.data ?? [];
  const count = data?.count ?? 0;

  if (items.length === 0) {
    return <WishlistEmpty />;
  }

  const handleRemove = useCallback((productId: string) => {
    setRemovingId(productId);
    removeItem(productId, {
      onSettled: () => setRemovingId(null),
      onSuccess: () => toast.success("Removed from wishlist"),
      onError: (err) => toast.error(err.message),
    });
  }, [removeItem]);

  const handleAddToCart = useCallback((productId: string) => {
    setAddingToCartId(productId);
    addToCart(
      { productId },
      {
        onSettled: () => setAddingToCartId(null),
        onSuccess: () => toast.success("Added to cart!"),
        onError: (err) => toast.error(err.message),
      },
    );
  }, [addToCart]);

  return (
    <div className="container-layout py-8">
      <PageHelmet title="My Wishlist" description="View your saved items." />

      <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} className="mb-6" />

      <div className="mb-8">
        <h1 className="text-4xl font-light tracking-tight text-foreground md:text-5xl">My Wishlist</h1>
        <p className="mt-1 text-sm text-muted-foreground/70">
          {count} {count === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="space-y-4">
        {items.map((product) => (
          <WishlistItemCard
            key={product._id}
            product={product}
            onRemove={handleRemove}
            onAddToCart={handleAddToCart}
            isRemoving={isRemoving && removingId === product._id}
            isAddingToCart={isAddingToCart && addingToCartId === product._id}
          />
        ))}
      </div>
    </div>
  );
}
