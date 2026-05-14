import type { MongoDoc } from "@/shared/types/api";

export interface User extends MongoDoc {
  name: string;
  email: string;
  phone?: string;
  role: string;
  active: boolean;
}

export interface ProfileResponse {
  data: User;
}
