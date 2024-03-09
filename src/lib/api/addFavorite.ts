import { apiClient } from '@lib/apiclient';

export const addFavorite = async (mls: string) => {
  const payload = {
    mls,
  };
  try {
    const res = await apiClient.post('/api/v1/favorite', payload);
    return res;
  } catch (error: any) {
    return error;
  }
};
