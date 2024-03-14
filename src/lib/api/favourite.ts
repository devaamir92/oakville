import { apiClient } from '@lib/apiclient';

export const addFavourite = async (mls: string) => {
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

export const addFavouriteAdmin = async (mls: string) => {
  const payload = {
    mls,
  };
  try {
    const res = await apiClient.post('/api/v1/featured', payload);
    return res;
  } catch (error: any) {
    return error;
  }
};

export const getFavourite = async () => {
  try {
    const res = await apiClient.get('/api/v1/favorite/mls');
    return res;
  } catch (error: any) {
    return error;
  }
};
