import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { useWishlist } from "@/features/wishlist/hooks/useWishlist";
import { useRemoveWishlistItem } from "@/features/wishlist/hooks/useRemoveWishlistItem";
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
  const { data, isLoading, error, refetch } = useWishlist();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveWishlistItem();
  const [removingId, setRemovingId] = useState<string | null>(null);

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

  const handleRemove = (productId: string) => {
    setRemovingId(productId);
    removeItem(productId, { onSettled: () => setRemovingId(null) });
  };

  const handleAddToCart = () => {
    navigate("/products");
  };

  return (
    <div className="container-layout py-8">
      <PageHelmet title="My Wishlist" description="View your saved items." />

      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">My Wishlist</h1>
        <p className="mt-1 text-sm text-muted-foreground">
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
          />
        ))}
      </div>
    </div>
  );
}
