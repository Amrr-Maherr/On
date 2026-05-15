import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ShoppingBag, CreditCard, MapPin, Wallet } from "lucide-react";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { useCart } from "@/features/cart/hooks/useCart";
import { useCheckoutCash } from "@/features/checkout/hooks/useCheckoutCash";
import { useCheckoutSession } from "@/features/checkout/hooks/useCheckoutSession";

interface CheckoutFormFields {
  phone: string;
  address: string;
  city: string;
}

const PAYMENT_METHODS = [
  { value: "cash", label: "Cash on Delivery", icon: Wallet },
  { value: "card", label: "Pay Online", icon: CreditCard },
] as const;

export default function CheckoutPage() {
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  const { data: cartData, isLoading } = useCart();
  const { mutate: placeOrder, isPending: isCashing } = useCheckoutCash();
  const { mutate: createSession, isPending: isSessionLoading } = useCheckoutSession();
  const isPending = isCashing || isSessionLoading;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutFormFields>({
    defaultValues: {
      phone: "",
      address: "",
      city: "",
    },
  });

  const cart = cartData?.data;
  const items = cart?.products ?? [];
  const numOfCartItems = cartData?.numOfCartItems ?? 0;
  const totalPrice = cart?.totalCartPrice ?? 0;

  const onSubmit = (formData: CheckoutFormFields) => {
    const cartId = cartData?.data._id;
    if (!cartId) {
      toast.error("Cart not found");
      return;
    }

    if (paymentMethod === "card") {
      createSession(cartId, {
        onSuccess: (res) => {
          window.location.href = res.session.url;
        },
        onError: (err) => {
          toast.error(err.message);
        },
      });
      return;
    }

    placeOrder(
      {
        cartId,
        shippingAddress: {
          details: formData.address,
          phone: formData.phone,
          city: formData.city,
        },
      },
      {
        onSuccess: () => {
          toast.success("Order placed successfully!");
          navigate("/orders");
        },
        onError: (err) => {
          toast.error(err.message);
        },
      },
    );
  };

  if (isLoading) {
    return (
      <div className="container-layout py-8">
        <div className="mx-auto max-w-5xl">
          <div className="mb-8 h-8 w-48 animate-pulse rounded bg-muted" />
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-4">
              {Array.from({ length: 6 }).map((_, i) => (
                <div
                  key={i}
                  className="h-16 animate-pulse rounded-lg bg-muted"
                />
              ))}
            </div>
            <div className="h-64 animate-pulse rounded-xl bg-muted" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container-layout py-8">
      <PageHelmet title="Checkout" description="Complete your order." />

      <div className="mx-auto max-w-5xl">
        <div className="mb-8">
          <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
            Checkout
          </span>
          <h1 className="mt-2 text-4xl font-light tracking-tight text-foreground md:text-5xl">Checkout</h1>
          <p className="mt-1.5 text-sm text-muted-foreground/60">
            Review your order and enter shipping details
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-light tracking-tight">
                    <MapPin className="h-4 w-4 text-muted-foreground/70" />
                    Shipping Address
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-1.5">
                    <label
                      htmlFor="phone"
                      className="text-sm text-muted-foreground/70"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="01000000000"
                      className="h-12 rounded-2xl border-border/60 bg-transparent px-4 text-sm placeholder:text-muted-foreground/40 focus:border-foreground/40"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^01[0-9]{9}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                      aria-invalid={!!errors.phone}
                    />
                    {errors.phone && (
                      <p className="text-xs text-destructive" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="address"
                      className="text-sm text-muted-foreground/70"
                    >
                      Address
                    </label>
                    <Input
                      id="address"
                      placeholder="123 Main St"
                      className="h-12 rounded-2xl border-border/60 bg-transparent px-4 text-sm placeholder:text-muted-foreground/40 focus:border-foreground/40"
                      {...register("address", {
                        required: "Address is required",
                      })}
                      aria-invalid={!!errors.address}
                    />
                    {errors.address && (
                      <p className="text-xs text-destructive" role="alert">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-1.5">
                    <label
                      htmlFor="city"
                      className="text-sm text-muted-foreground/70"
                    >
                      City
                    </label>
                    <Input
                      id="city"
                      placeholder="Cairo"
                      className="h-12 rounded-2xl border-border/60 bg-transparent px-4 text-sm placeholder:text-muted-foreground/40 focus:border-foreground/40"
                      {...register("city", { required: "City is required" })}
                      aria-invalid={!!errors.city}
                    />
                    {errors.city && (
                      <p className="text-xs text-destructive" role="alert">
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card className="sticky top-24">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg font-light tracking-tight">
                    <ShoppingBag className="h-4 w-4 text-muted-foreground/70" />
                    Order Summary
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-sm text-muted-foreground">
                    {numOfCartItems} {numOfCartItems === 1 ? "item" : "items"}
                  </p>

                  {items.length > 0 && (
                    <div className="space-y-3">
                      {items.slice(0, 3).map((item) => (
                        <div key={item._id} className="flex items-center gap-3">
                          <div className="h-12 w-12 shrink-0 overflow-hidden rounded-md bg-muted">
                            <img
                              src={item.product.imageCover}
                              alt={item.product.title}
                              className="h-full w-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-sm font-medium">
                              {item.product.title}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              Qty: {item?.count} x{" "}
                              {item?.product?.price?.toLocaleString()} EGP
                            </p>
                          </div>
                          <p className="text-sm font-medium tabular-nums">
                            {item.price.toLocaleString()} EGP
                          </p>
                        </div>
                      ))}
                      {items.length > 3 && (
                        <p className="text-xs text-muted-foreground">
                          +{items.length - 3} more{" "}
                          {items.length - 3 === 1 ? "item" : "items"}
                        </p>
                      )}
                    </div>
                  )}

                  <hr className="border-foreground/10" />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="tabular-nums">
                        {totalPrice.toLocaleString()} EGP
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span>Calculated at delivery</span>
                    </div>
                    <hr className="border-foreground/10" />
                    <div className="flex items-center justify-between text-base">
                      <span className="font-semibold">Total</span>
                      <span className="font-bold tabular-nums">
                        {totalPrice.toLocaleString()} EGP
                      </span>
                    </div>
                  </div>
                </CardContent>
                <div className="space-y-3 px-4 pb-4">
                  <div className="grid grid-cols-2 gap-2">
                    {PAYMENT_METHODS.map((method) => {
                      const Icon = method.icon;
                      return (
                        <button
                          key={method.value}
                          type="button"
                          onClick={() => setPaymentMethod(method.value)}
                          className={cn(
                            "flex items-center justify-center gap-2 rounded-2xl border px-3 py-3 text-sm font-medium transition-all duration-200 active:scale-[0.98]",
                            paymentMethod === method.value
                              ? "border-foreground bg-foreground text-background"
                              : "border-border/60 text-muted-foreground/70 hover:border-foreground/40 hover:text-foreground",
                          )}
                        >
                          <Icon className="h-4 w-4" />
                          {method.label}
                        </button>
                      );
                    })}
                  </div>
                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full" disabled={isPending}>
                    {isPending ? (
                      <>Processing...</>
                    ) : (
                      <>
                        {paymentMethod === "card" ? (
                          <CreditCard className="h-4 w-4" />
                        ) : (
                          <Wallet className="h-4 w-4" />
                        )}
                        {paymentMethod === "card"
                          ? "Pay with Stripe"
                          : "Place Order"}
                      </>
                    )}
                  </Button>
                </div>
              </Card>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
