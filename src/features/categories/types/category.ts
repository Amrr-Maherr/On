import type { MongoDoc } from "@/shared/types/api";

export interface Category extends MongoDoc {
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
}
