export type CartProduct = {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  price: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
};

export type CartItem = {
  _id: string;
  count: number;
  product: CartProduct;
  price: number;
};

export type CartData = {
  _id: string;
  cartOwner?: string;
  products: CartItem[];
  totalCartPrice: number;
  createdAt?: string;
  updatedAt?: string;
};

export type CartResponse = {
  status: string;
  numOfCartItems: number;
  data: CartData;
};

export type UpdateCartPayload = {
  itemId: string;
  count: number;
};
