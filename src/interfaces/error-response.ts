export interface ErrorResponse {
  status: number;

  message?: string;

  email?: string;

  errors?: any;
}
