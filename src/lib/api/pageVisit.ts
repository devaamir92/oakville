import { apiClient } from '@lib/apiclient';

export const pageVisit = async (slug: string) => {
  const payload = {
    page: slug,
  };
  try {
    await apiClient.post('/api/v1/page', payload);
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
  }
};
