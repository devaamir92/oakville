import type { AxiosError } from 'axios';
import axios from 'axios';

import type { ErrorResponse } from '@interfaces';

import { getSession } from './getsession';

export const capiClient = axios.create({
  baseURL: process.env.CRM_API_HOST,
});

class ApiError extends Error {
  status: number;

  errors: any;

  constructor(status: number, errors: any, message?: string) {
    super(message);
    this.status = status;
    this.errors = errors;
  }
}

capiClient.interceptors.request.use(async (config: any) => {
  const token = await getSession();
  const configCopy = { ...config };
  if (token && token.user.token) {
    configCopy.headers.Authorization = `Bearer ${token.user.token}`;
  }
  return configCopy;
});

capiClient.interceptors.response.use(
  res => {
    return res;
  },
  (errr: AxiosError<ErrorResponse>) => {
    if (errr.response?.status === 400) {
      return Promise.reject(new ApiError(400, errr.response.data.errors));
    }

    if (errr.response?.status === 401) {
      return Promise.reject(new ApiError(401, null, 'Invalid credentials'));
    }
    return Promise.reject(new ApiError(500, null, 'Internal Server Error'));
  }
);
