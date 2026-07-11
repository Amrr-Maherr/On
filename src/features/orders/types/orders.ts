export type OrderProduct = {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  price: number;
};

export type OrderCartItem = {
  _id: string;
  product: OrderProduct;
  price: number;
  count: number;
};

export type ShippingAddress = {
  details?: string;
  phone: string;
  city: string;
};

export type Order = {
  _id: string;
  id: number;
  user: {
    _id: string;
    name: string;
    email: string;
    phone: string;
  };
  cartItems: OrderCartItem[];
  totalOrderPrice: number;
  taxPrice: number;
  shippingPrice: number;
  shippingAddress: ShippingAddress;
  paymentMethodType: string;
  isPaid: boolean;
  isDelivered: boolean;
  paidAt: string | null;
  deliveredAt: string | null;
  createdAt: string;
  updatedAt: string;
};

export type OrdersResponse = Order[];
