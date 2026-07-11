export type WishlistProduct = {
  _id: string;
  title: string;
  imageCover: string;
  price: number;
  priceAfterDiscount?: number;
  ratingsAverage?: number;
  ratingsQuantity?: number;
};

export type WishlistResponse = {
  status: string;
  count?: number;
  data: WishlistProduct[];
};
