import type { MongoDoc } from "@/shared/types/api";

export type Category = MongoDoc & {
  name: string;
  slug: string;
  image: string;
  createdAt: string;
  updatedAt: string;
};
