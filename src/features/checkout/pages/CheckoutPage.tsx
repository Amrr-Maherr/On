import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ShoppingBag, CreditCard, MapPin, Wallet } from "lucide-react";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";
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
    <>
      <PageHelmet title="Checkout" description="Complete your order." />

      <section className="relative overflow-hidden bg-neutral-950 py-16 md:py-20">
        <div
          className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1553729459-afe8f2e2e065?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/95 to-neutral-950/80" />
        <div className="container-layout relative z-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/60">
            Secure Checkout
          </p>
          <h1 className="mt-3 text-5xl font-black text-white md:text-7xl">
            Checkout.
          </h1>
          <p className="mt-4 max-w-lg text-lg text-white/70">
            Fast and secure. Your order is just a few steps away.
          </p>
        </div>
      </section>

      <div className="container-layout py-8">
        <div className="mx-auto max-w-5xl">
          <Breadcrumb items={[{ label: "Home", href: "/" }, { label: "Checkout" }]} className="mb-6" />
          <div className="mb-8">
            <span className="text-xs font-medium uppercase tracking-[0.15em] text-muted-foreground/60">
              Checkout
            </span>
            <h1 className="mt-2 text-4xl font-black tracking-tight text-foreground md:text-5xl">Checkout</h1>
          <p className="mt-1.5 text-sm text-muted-foreground/60">
            Review your order and enter shipping details
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
            <div className="space-y-6">
              <div className="rounded-2xl border border-border/30 bg-card">
                <div className="border-b border-border/30 px-6 py-4">
                  <h3 className="flex items-center gap-2 text-base font-bold tracking-tight">
                    <MapPin className="h-4 w-4 text-muted-foreground/50" />
                    Shipping Address
                  </h3>
                </div>
                <div className="space-y-4 p-6">
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
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="sticky top-24 rounded-2xl border border-border/30 bg-card">
                <div className="border-b border-border/30 px-6 py-4">
                  <h3 className="flex items-center gap-2 text-base font-bold tracking-tight">
                    <ShoppingBag className="h-4 w-4 text-muted-foreground/50" />
                    Order Summary
                  </h3>
                </div>
                <div className="space-y-4 p-6">
                  <p className="text-sm font-semibold text-muted-foreground">
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

                  <hr className="border-border/40" />

                  <div className="space-y-3 text-sm">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-semibold tabular-nums">
                        {totalPrice.toLocaleString()} EGP
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Shipping</span>
                      <span className="text-xs font-medium text-muted-foreground/70">Calculated at delivery</span>
                    </div>
                    <hr className="border-border/40" />
                    <div className="flex items-center justify-between">
                      <span className="text-base font-bold">Total</span>
                      <span className="text-2xl font-black tracking-tight tabular-nums">
                        {totalPrice.toLocaleString()} EGP
                      </span>
                    </div>
                  </div>
                </div>
                <div className="space-y-3 px-6 pb-6">
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
                  <Button type="submit" size="lg" className="w-full gap-2 rounded-full bg-foreground py-6 text-sm font-bold uppercase tracking-wider text-background hover:opacity-90 active:scale-[0.98]" disabled={isPending}>
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
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    </>
  );
}
