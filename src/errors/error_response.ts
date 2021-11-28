export interface ErrorResponseBody {
  error: string;
}

export interface ErrorResponse extends Error {
  statusCode: number;
}
