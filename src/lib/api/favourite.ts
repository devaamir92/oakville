import action from '@lib/actions';
import { apiClient } from '@lib/apiclient';

import { getSession } from '../getsession';

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
  const token = await getSession();

  try {
    const res = await fetch(`${process.env.API_HOST}/api/v1/favorite/mls`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token.user.token}`,
      },
      next: {
        tags: ['favorite'],
      },
      cache: 'no-cache',
    });
    return await res.json();
  } catch (error: any) {
    return error;
  }
};
