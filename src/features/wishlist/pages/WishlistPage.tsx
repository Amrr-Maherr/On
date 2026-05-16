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

function CampaignHeader() {
  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
      <div
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
      <div className="container-layout relative z-10">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">Saved</p>
        <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">Wishlist.</h1>
        <p className="mt-4 max-w-lg text-lg text-white/70">
          Your most-wanted gear, ready when you are.
        </p>
      </div>
    </section>
  );
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

  if (isLoading) {
    return (
      <>
        <CampaignHeader />
        <WishlistLoader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <CampaignHeader />
        <WishlistError message={getErrorMessage(error)} onRetry={() => refetch()} />
      </>
    );
  }

  const items = data?.data ?? [];
  const count = data?.count ?? 0;

  if (items.length === 0) {
    return (
      <>
        <CampaignHeader />
        <WishlistEmpty />
      </>
    );
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
    <>
      <CampaignHeader />
      <PageHelmet title="My Wishlist" description="View your saved items." />
      <div className="container-layout py-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Wishlist" }]} className="mb-6" />
        <div className="mb-10">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground/60">
            Saved Items
          </span>
          <h2 className="mt-2 text-3xl font-black tracking-tight text-foreground md:text-4xl">Total Items.</h2>
          <p className="mt-1 text-sm font-medium text-muted-foreground/60">
            {count} {count === 1 ? "item" : "items"} currently in your wishlist
          </p>
        </div>
        <div className="space-y-4" data-tour="wishlist-items">
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
    </>
  );
}
