import { api } from "@/lib";

export interface CheckoutSessionResponse {
  status: string;
  session: {
    url: string;
  };
}

export async function getCheckoutSession(
  cartId: string,
): Promise<CheckoutSessionResponse> {
  const response = await api.get<CheckoutSessionResponse>(
    `/api/v1/orders/checkout-session/${cartId}`,
    { params: { url: window.location.origin } },
  );
  return response.data;
}
