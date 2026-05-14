import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import PageHelmet from "@/shared/components/PageHelmet";
import { useCart } from "@/features/cart/hooks/useCart";
import { useUpdateCartItem } from "@/features/cart/hooks/useUpdateCartItem";
import { useRemoveCartItem } from "@/features/cart/hooks/useRemoveCartItem";
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

  const handleUpdate = (itemId: string, count: number) => {
    if (count < 1) return;
    setUpdatingItemId(itemId);
    updateItem(
      { itemId, count },
      { onSettled: () => setUpdatingItemId(null) },
    );
  };

  const handleRemove = (itemId: string) => {
    setUpdatingItemId(itemId);
    removeItem(itemId, { onSettled: () => setUpdatingItemId(null) });
  };

  const isMutating = isUpdating || isRemoving;

  return (
    <div className="container-layout py-8">
      <PageHelmet title="Cart" description="Review your shopping cart." />

      <div className="mb-8">
        <h1 className="text-2xl font-bold md:text-3xl">Shopping Cart</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
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
            onCheckout={() => navigate("/checkout")}
          />
        </div>
      </div>
    </div>
  );
}
