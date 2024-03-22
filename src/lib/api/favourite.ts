import action from '@lib/actions';
import { apiClient } from '@lib/apiclient';
import { httpClient } from '@lib/httpclient';

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
    action('featured');
    return res;
  } catch (error: any) {
    return error;
  }
};

export const getFavourite = async () => {
  try {
    return await httpClient.get('/api/v1/favorite/mls', {
      next: {
        tags: ['favorite'],
      },
    });
  } catch (error: any) {
    return error;
  }
};
