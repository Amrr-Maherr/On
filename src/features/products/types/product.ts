import type { MongoDoc } from "@/shared/types/api";

export interface Subcategory extends MongoDoc {
  name: string;
  slug: string;
  category: string;
}

export interface Category extends MongoDoc {
  name: string;
  slug: string;
  image: string;
}

export interface Brand extends MongoDoc {
  name: string;
  slug: string;
  image: string;
}

export interface Review {
  _id: string;
  review?: string;
  rating: number;
  user: {
    _id: string;
    name: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface Product extends MongoDoc {
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
}
