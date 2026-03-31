export interface IApiError {
  message: string;
  code?: string;
  statusCode?: number;
}

export interface IPaginationParams {
  page: number;
  limit: number;
}

export interface IPaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  totalPages: number;
}
