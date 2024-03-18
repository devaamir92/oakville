import { RequestQueryBuilder } from '@nestjsx/crud-request';

export const validateHash = async (key: string) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.queryObject = {
    key,
  };

  try {
    const res = await fetch(
      `${
        process.env.API_HOST
      }/api/v1/auth/validate-hash?${queryBuilder.query()}`,
      {
        method: 'GET',
        next: {
          tags: ['auth'],
        },
        cache: 'no-cache',
      }
    );
    return await res.json();
  } catch (error: any) {
    throw new Error(error);
  }
};
