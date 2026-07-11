export type MongoDoc = {
  _id: string;
  id: string;
};

export type PaginationMetadata = {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number | null;
};

export type ApiResponse<T> = {
  results: number;
  metadata: PaginationMetadata;
  data: T[];
};
