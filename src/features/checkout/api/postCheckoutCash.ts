import { api } from "@/lib";

export type ShippingAddress = {
  details: string;
  phone: string;
  city: string;
};

export type CheckoutCashPayload = {
  cartId: string;
  shippingAddress: ShippingAddress;
};

export type CheckoutCashResponse = {
  status: string;
  data: {
    _id: string;
  };
};

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
