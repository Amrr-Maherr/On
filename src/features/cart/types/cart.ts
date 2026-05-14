export interface CartProduct {
  _id: string;
  id: string;
  title: string;
  imageCover: string;
  price: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
}

export interface CartItem {
  _id: string;
  count: number;
  product: CartProduct;
  price: number;
}

export interface CartData {
  _id: string;
  cartOwner?: string;
  products: CartItem[];
  totalCartPrice: number;
  createdAt?: string;
  updatedAt?: string;
}

export interface CartResponse {
  status: string;
  numOfCartItems: number;
  data: CartData;
}

export interface UpdateCartPayload {
  itemId: string;
  count: number;
}
