import type { MongoDoc } from "@/shared/types/api";

export type User = MongoDoc & {
  name: string;
  email: string;
  phone?: string;
  picture?: string;
  role: string;
  active: boolean;
  createdAt?: string;
};

export type ProfileResponse = {
  data: User;
};
