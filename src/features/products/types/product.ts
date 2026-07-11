import type { MongoDoc } from "@/shared/types/api";

export type Subcategory = MongoDoc & {
  name: string;
  slug: string;
  category: string;
};

export type Category = MongoDoc & {
  name: string;
  slug: string;
  image: string;
};

export type Brand = MongoDoc & {
  name: string;
  slug: string;
  image: string;
};

export type Review = {
  _id: string;
  review?: string;
  rating: number;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
};

export type Product = MongoDoc & {
  title: string;
  slug: string;
  description: string;
  quantity: number;
  price: number;
  priceAfterDiscount?: number;
  imageCover: string;
  images: readonly string[];
  category: Category;
  brand: Brand;
  subcategory: Subcategory[];
  ratingsAverage: number;
  ratingsQuantity: number;
  sold: number;
  createdAt: string;
  updatedAt: string;
  reviews?: Review[];
};
