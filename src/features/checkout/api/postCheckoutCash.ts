import { api } from "@/lib";

export interface ShippingAddress {
  details: string;
  phone: string;
  city: string;
}

export interface CheckoutCashPayload {
  cartId: string;
  shippingAddress: ShippingAddress;
}

export interface CheckoutCashResponse {
  status: string;
  data: {
    _id: string;
  };
}

export async function postCheckoutCash({
  cartId,
  shippingAddress,
}: CheckoutCashPayload): Promise<CheckoutCashResponse> {
  const response = await api.post<CheckoutCashResponse>(
    `/api/v1/orders/${cartId}`,
    { shippingAddress },
  );
  return response.data;
}
