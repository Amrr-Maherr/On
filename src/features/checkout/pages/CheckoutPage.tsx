import { useEffect, useState, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CreditCard, Wallet, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import PageHelmet from "@/shared/components/PageHelmet";
import { Breadcrumb } from "@/components/ui/breadcrumb";

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
  const totalPrice = cart?.totalCartPrice ?? 0;

  const onSubmit = useCallback((formData: CheckoutFormFields) => {
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
  }, [cartData?.data._id, paymentMethod, createSession, placeOrder, navigate]);

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
        <div className="mb-12 border-l-4 border-foreground pl-6">
          <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
            Secure Process
          </span>
          <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
            CHECKOUT.
          </h1>
          <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
            Complete your order and join the movement
          </p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
            <div className="space-y-12">
              <div>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-foreground text-background font-black text-sm">1</div>
                  <h3 className="text-xl font-black uppercase tracking-tight">Shipping Details</h3>
                </div>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div className="space-y-2 sm:col-span-2">
                    <label
                      htmlFor="address"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60"
                    >
                      Street Address
                    </label>
                    <input
                      id="address"
                      placeholder="Street name, building number"
                      className="flex h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none"
                      {...register("address", { required: "Address is required" })}
                    />
                    {errors.address && (
                      <p className="text-[10px] font-black uppercase tracking-widest text-destructive" role="alert">
                        {errors.address.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="city"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60"
                    >
                      City
                    </label>
                    <input
                      id="city"
                      placeholder="Your City"
                      className="flex h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none"
                      {...register("city", { required: "City is required" })}
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="phone"
                      className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60"
                    >
                      Phone Number
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="01000000000"
                      className="flex h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none"
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: {
                          value: /^01[0-9]{9}$/,
                          message: "Enter a valid phone number",
                        },
                      })}
                    />
                    {errors.phone && (
                      <p className="text-[10px] font-black uppercase tracking-widest text-destructive" role="alert">
                        {errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>

              <div>
                <div className="mb-8 flex items-center gap-4">
                  <div className="flex h-10 w-10 items-center justify-center bg-foreground text-background font-black text-sm">2</div>
                  <h3 className="text-xl font-black uppercase tracking-tight">Payment Method</h3>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {PAYMENT_METHODS.map((method) => {
                    const Icon = method.icon;
                    const isSelected = paymentMethod === method.value;
                    return (
                      <button
                        key={method.value}
                        type="button"
                        onClick={() => setPaymentMethod(method.value)}
                        className={cn(
                          "group relative flex flex-col items-center justify-center gap-4 border-2 p-8 transition-all duration-300",
                          isSelected
                            ? "border-foreground bg-foreground text-background"
                            : "border-border/60 bg-transparent text-foreground hover:border-foreground/40",
                        )}
                      >
                        <Icon className={cn("h-8 w-8 transition-transform duration-300 group-hover:scale-110", isSelected ? "text-background" : "text-foreground/40")} strokeWidth={1.5} />
                        <span className="text-xs font-black uppercase tracking-widest">{method.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="sticky top-24 border border-border/60 bg-card p-8">
                <h3 className="text-xl font-black uppercase tracking-tight">Your Order</h3>
                
                <div className="mt-8 space-y-6">
                  <div className="max-h-60 overflow-y-auto pr-2 space-y-4">
                    {items.map((item) => (
                      <div key={item._id} className="flex gap-4">
                        <div className="h-16 w-16 shrink-0 overflow-hidden bg-muted/30">
                          <img src={item.product.imageCover} alt={item.product.title} className="h-full w-full object-cover" />
                        </div>
                        <div className="flex flex-1 flex-col justify-center min-w-0">
                          <p className="text-xs font-black uppercase tracking-tight truncate">{item.product.title}</p>
                          <div className="mt-1 flex justify-between">
                            <span className="text-[10px] font-bold text-muted-foreground/60">QTY: {item.count}</span>
                            <span className="text-xs font-black">{item.price.toLocaleString()} EGP</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="border-t border-dashed border-border/60 pt-6 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Subtotal</span>
                      <span className="text-xs font-black uppercase tracking-widest">{totalPrice.toLocaleString()} EGP</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">Shipping</span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">Free</span>
                    </div>
                    <div className="flex justify-between pt-4">
                      <span className="text-lg font-black uppercase tracking-tight">Total</span>
                      <div className="text-right">
                        <span className="text-3xl font-black tracking-tighter tabular-nums">{totalPrice.toLocaleString()} EGP</span>
                        <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">Including VAT</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-10">
                    <button
                      type="submit"
                      disabled={isPending}
                      className="flex h-16 w-full items-center justify-center gap-3 bg-foreground px-8 text-sm font-black uppercase tracking-[0.2em] text-background transition-all duration-300 hover:bg-foreground/90 active:scale-[0.98] disabled:opacity-50"
                    >
                      {isPending ? (
                        <Loader2 className="h-5 w-5 animate-spin" strokeWidth={3} />
                      ) : null}
                      {isPending ? "PROCESSING..." : "PLACE ORDER"}
                    </button>
                  <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                    By placing an order you agree to our Terms
                  </p>
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
