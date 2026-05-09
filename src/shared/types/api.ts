export interface MongoDoc {
  _id: string;
  id: string;
}

export interface PaginationMetadata {
  currentPage: number;
  numberOfPages: number;
  limit: number;
  nextPage: number | null;
}

export interface ApiResponse<T> {
  results: number;
  metadata: PaginationMetadata;
  data: T[];
}
