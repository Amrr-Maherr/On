import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { Trash2 } from "lucide-react";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { useCart } from "@/features/cart/hooks/useCart";
import { useUpdateCartItem } from "@/features/cart/hooks/useUpdateCartItem";
import { useRemoveCartItem } from "@/features/cart/hooks/useRemoveCartItem";
import { useClearCart } from "@/features/cart/hooks/useClearCart";
import CartItemCard from "@/features/cart/components/CartItemCard";
import CartSummary from "@/features/cart/components/CartSummary";
import CartLoader from "@/features/cart/components/CartLoader";
import CartEmpty from "@/features/cart/components/CartEmpty";
import CartError from "@/features/cart/components/CartError";

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  if (typeof error === "string") return error;
  return "An unexpected error occurred. Please try again.";
}

export default function CartPage() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { data, isLoading, error, refetch } = useCart();
  const { mutate: updateItem, isPending: isUpdating } = useUpdateCartItem();
  const { mutate: removeItem, isPending: isRemoving } = useRemoveCartItem();
  const { mutate: clearCartItems, isPending: isClearing } = useClearCart();
  const [updatingItemId, setUpdatingItemId] = useState<string | null>(null);

  if (isLoading) return <CartLoader />;

  if (error) {
    return (
      <CartError
        message={getErrorMessage(error)}
        onRetry={() => refetch()}
      />
    );
  }

  const cart = data?.data;
  const items = cart?.products ?? [];
  const numOfCartItems = data?.numOfCartItems ?? 0;

  if (!cart || items.length === 0) {
    return <CartEmpty />;
  }

  const handleUpdate = useCallback((itemId: string, count: number) => {
    if (count < 1) return;
    setUpdatingItemId(itemId);
    updateItem(
      { itemId, count },
      { onSettled: () => setUpdatingItemId(null) },
    );
  }, [updateItem]);

  const handleRemove = useCallback((itemId: string) => {
    setUpdatingItemId(itemId);
    removeItem(itemId, { onSettled: () => setUpdatingItemId(null) });
  }, [removeItem]);

  const handleClearCart = useCallback(() => {
    toast(
      (t) => (
        <div className="flex flex-col gap-3">
          <p className="text-sm">
            Are you sure you want to remove all items from your cart?
          </p>
          <div className="flex justify-end gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => toast.dismiss(t.id)}
            >
              Cancel
            </Button>
            <Button
              variant="destructive"
              size="sm"
              onClick={() => {
                clearCartItems();
                toast.dismiss(t.id);
              }}
            >
              Delete All
            </Button>
          </div>
        </div>
      ),
      { duration: Infinity },
    );
  }, [clearCartItems]);

  const handleCheckout = useCallback(() => {
    navigate("/checkout");
  }, [navigate]);

  const isMutating = isUpdating || isRemoving || isClearing;

  return (
    <>
      <PageHelmet title="Cart" description="Review your shopping cart." />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Review
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            Your Cart.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            Secure checkout. Fast delivery. Performance guaranteed.
          </p>
        </div>
      </section>

      <div className="container-layout section-py pt-8">
        <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Cart" }]} className="mb-6" />

        <div className="mb-8 flex items-start justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
              Cart
            </span>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground md:text-5xl">Shopping Cart</h1>
            <p className="mt-1 text-sm text-muted-foreground/60">
              {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"}
            </p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="gap-2 rounded-full text-destructive/60 hover:text-destructive"
          onClick={handleClearCart}
          disabled={isClearing}
        >
          <Trash2 className="h-4 w-4" />
          {isClearing ? "Clearing..." : "Delete All"}
        </Button>
      </div>

      <div className="grid gap-12 lg:grid-cols-[1fr_320px]">
        <div className="space-y-4">
          {items.map((item) => (
            <CartItemCard
              key={item._id}
              item={item}
              onUpdate={handleUpdate}
              onRemove={handleRemove}
              isUpdating={isMutating && updatingItemId === item.product.id}
            />
          ))}
        </div>

        <div>
          <CartSummary
            totalCartPrice={cart.totalCartPrice}
            numOfCartItems={numOfCartItems}
            onCheckout={handleCheckout}
          />
        </div>
      </div>
      </div>
    </>
  );
}
