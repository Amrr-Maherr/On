import { useEffect, useState, useCallback } from "react";
import { useTranslation } from "react-i18next";
import ScrollReveal from "@/components/shared/ScrollReveal";
import { useNavigate, useLocation } from "react-router-dom";
import { useForm } from "react-hook-form";
import { CreditCard, Wallet, Loader2 } from "lucide-react";
import toast from "react-hot-toast";
import { getLangFromPath, buildLocalizedPath } from "@/lib/localized-path";
import PageHelmet from "@/shared/components/PageHelmet";
import CampaignHeader from "@/components/shared/components/CampaignHeader";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import CardImage from "@/components/shared/CardImage";

import { cn } from "@/lib/utils";
import { CheckoutPageSkeleton } from "@/features/checkout/components/CheckoutSkeleton";
import { useCart } from "@/features/cart/hooks/useCart";
import { useCheckoutCash } from "@/features/checkout/hooks/useCheckoutCash";
import { useCheckoutSession } from "@/features/checkout/hooks/useCheckoutSession";

type CheckoutFormFields = {
  phone: string;
  address: string;
  city: string;
};

export default function CheckoutPage() {
  const { t } = useTranslation();
  const location = useLocation();
  const lang = getLangFromPath(location.pathname);
  const navigate = useNavigate();
  const [paymentMethod, setPaymentMethod] = useState<string>("cash");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate(buildLocalizedPath("/login", lang));
    }
  }, [navigate, lang]);

  const { data: cartData, isLoading } = useCart();
  const { mutate: placeOrder, isPending: isCashing } = useCheckoutCash();
  const { mutate: createSession, isPending: isSessionLoading } =
    useCheckoutSession();
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

  const onSubmit = useCallback(
    (formData: CheckoutFormFields) => {
      const cartId = cartData?.data._id;
      if (!cartId) {
        toast.error(t("checkout.toast.cartNotFound"));
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
            toast.success(t("checkout.toast.orderPlaced"));
            navigate(buildLocalizedPath("/orders", lang));
          },
          onError: (err) => {
            toast.error(err.message);
          },
        },
      );
    },
    [cartData?.data._id, paymentMethod, createSession, placeOrder, navigate],
  );

  if (isLoading) {
    return <CheckoutPageSkeleton />;
  }

  return (
    <>
      <PageHelmet
        title={t("checkout.page.title")}
        description={t("checkout.page.description")}
      />

      <CampaignHeader
        subtitle={t("checkout.page.hero.subtitle")}
        title={t("checkout.page.hero.title")}
        description={t("checkout.page.hero.description")}
        backgroundImage="https://images.unsplash.com/photo-1553729459-afe8f2e2e065?auto=format&fit=crop&w=1920&q=80"
      />

      <div className="container-layout py-8">
        <div className="mx-auto">
          <Breadcrumb
            items={[
              {
                label: t("checkout.page.breadcrumb.home"),
                href: buildLocalizedPath("/", lang),
              },
              { label: t("checkout.page.breadcrumb.checkout") },
            ]}
            className="mb-6"
          />
          <ScrollReveal>
            <div className="mb-12 border-l-4 border-foreground pl-6">
              <span className="text-xs font-black uppercase tracking-[0.3em] text-muted-foreground/40">
                {t("checkout.page.catalog.label")}
              </span>
              <h1 className="mt-3 text-5xl font-black uppercase tracking-tighter text-foreground md:text-7xl">
                {t("checkout.page.catalog.title")}
              </h1>
              <p className="mt-2 text-sm font-bold text-muted-foreground/60 uppercase tracking-widest">
                {t("checkout.page.catalog.description")}
              </p>
            </div>
          </ScrollReveal>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
              <div className="space-y-12">
                <div data-tour="shipping-form">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-foreground text-background font-black text-sm">
                      1
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight">
                      {t("checkout.shipping.title")}
                    </h3>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2 sm:col-span-2">
                      <label
                        htmlFor="address"
                        className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60"
                      >
                        {t("checkout.shipping.streetAddress")}
                      </label>
                      <input
                        id="address"
                        placeholder={t("checkout.shipping.addressPlaceholder")}
                        className="flex h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none"
                        {...register("address", {
                          required: t(
                            "checkout.shipping.validation.addressRequired",
                          ),
                        })}
                      />
                      {errors.address && (
                        <p
                          className="text-[10px] font-black uppercase tracking-widest text-destructive"
                          role="alert"
                        >
                          {errors.address.message}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="city"
                        className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60"
                      >
                        {t("checkout.shipping.city")}
                      </label>
                      <input
                        id="city"
                        placeholder={t("checkout.shipping.cityPlaceholder")}
                        className="flex h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none"
                        {...register("city", {
                          required: t(
                            "checkout.shipping.validation.cityRequired",
                          ),
                        })}
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="phone"
                        className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60"
                      >
                        {t("checkout.shipping.phone")}
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        placeholder={t("checkout.shipping.phonePlaceholder")}
                        className="flex h-14 w-full rounded-none border-2 border-border/40 bg-transparent px-4 text-sm font-bold text-foreground transition-all duration-300 placeholder:text-muted-foreground/30 focus:border-foreground focus:outline-none"
                        {...register("phone", {
                          required: t(
                            "checkout.shipping.validation.phoneRequired",
                          ),
                          pattern: {
                            value: /^01[0-9]{9}$/,
                            message: t(
                              "checkout.shipping.validation.phoneInvalid",
                            ),
                          },
                        })}
                      />
                      {errors.phone && (
                        <p
                          className="text-[10px] font-black uppercase tracking-widest text-destructive"
                          role="alert"
                        >
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>
                </div>

                <div data-tour="payment-method">
                  <div className="mb-8 flex items-center gap-4">
                    <div className="flex h-10 w-10 items-center justify-center bg-foreground text-background font-black text-sm">
                      2
                    </div>
                    <h3 className="text-xl font-black uppercase tracking-tight">
                      {t("checkout.payment.title")}
                    </h3>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {[
                      {
                        value: "cash",
                        key: "checkout.payment.cashOnDelivery",
                        icon: Wallet,
                      },
                      {
                        value: "card",
                        key: "checkout.payment.payOnline",
                        icon: CreditCard,
                      },
                    ].map((method) => {
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
                          <Icon
                            className={cn(
                              "h-8 w-8 transition-transform duration-300 group-hover:scale-110",
                              isSelected
                                ? "text-background"
                                : "text-foreground/40",
                            )}
                            strokeWidth={1.5}
                          />
                          <span className="text-xs font-black uppercase tracking-widest">
                            {t(method.key)}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              <div className="relative" data-tour="order-summary">
                <div className="sticky top-24 border border-border/60 bg-card p-8">
                  <h3 className="text-xl font-black uppercase tracking-tight">
                    {t("checkout.summary.title")}
                  </h3>

                  <div className="mt-8 space-y-6">
                    <div className="max-h-60 overflow-y-auto pr-2 space-y-4">
                      {items.map((item) => (
                        <div key={item._id} className="flex gap-4">
                          <div className="h-16 w-16 shrink-0 overflow-hidden bg-muted/30">
                            <CardImage
                              src={item.product.imageCover}
                              alt={item.product.title}
                              width={400}
                              height={400}
                              className="h-full w-full"
                            />
                          </div>
                          <div className="flex flex-1 flex-col justify-center min-w-0">
                            <p className="text-xs font-black uppercase tracking-tight truncate">
                              {item.product.title}
                            </p>
                            <div className="mt-1 flex justify-between">
                              <span className="text-[10px] font-bold text-muted-foreground/60">
                                {t("checkout.summary.qty")}: {item.count}
                              </span>
                              <span className="text-xs font-black">
                                {item.price.toLocaleString()} EGP
                              </span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="border-t border-dashed border-border/60 pt-6 space-y-3">
                      <div className="flex justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                          {t("checkout.summary.subtotal")}
                        </span>
                        <span className="text-xs font-black uppercase tracking-widest">
                          {totalPrice.toLocaleString()} EGP
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/60">
                          {t("checkout.summary.shipping")}
                        </span>
                        <span className="text-[10px] font-black uppercase tracking-widest text-muted-foreground/40">
                          {t("checkout.summary.free")}
                        </span>
                      </div>
                      <div className="flex justify-between pt-4">
                        <span className="text-lg font-black uppercase tracking-tight">
                          {t("checkout.summary.total")}
                        </span>
                        <div className="text-right">
                          <span className="text-3xl font-black tracking-tighter tabular-nums">
                            {totalPrice.toLocaleString()} EGP
                          </span>
                          <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                            {t("checkout.summary.includingVat")}
                          </p>
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
                        <Loader2
                          className="h-5 w-5 animate-spin"
                          strokeWidth={3}
                        />
                      ) : null}
                      {isPending
                        ? t("checkout.summary.processing")
                        : t("checkout.summary.placeOrder")}
                    </button>
                    <p className="mt-4 text-center text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40">
                      {t("checkout.summary.terms")}
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
