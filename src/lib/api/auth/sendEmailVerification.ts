import { apiClient } from '@lib/apiclient';

export const sendEmailVerification = async () => {
  try {
    const res = await apiClient.get(`/api/v1/auth/verify-email`);
    return res;
  } catch (error: any) {
    throw new Error(error);
  }
};
