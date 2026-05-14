import type { ApiResponse } from "@/shared/types/api";

export interface OrderProduct {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
}

export interface OrderCartItem {
  _id: string;
  product: OrderProduct;
  price: number;
  count: number;
}

export interface ShippingAddress {
  details?: string;
  phone: string;
  city: string;
}

export interface Order {
  _id: string;
  user: string;
  cartItems: OrderCartItem[];
  totalOrderPrice: number;
  shippingAddress: ShippingAddress;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt: string | null;
  deliveredAt: string | null;
  createdAt: string;
  updatedAt: string;
}

export type OrdersResponse = ApiResponse<Order>;
