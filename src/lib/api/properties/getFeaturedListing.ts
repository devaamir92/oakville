import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { httpClient } from '@lib/httpclient';

import selectItems from './selectItems';

export const getFeaturedListing = async () => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setJoin({
      field: 'property',
      select: selectItems,
    })
    .setLimit(4);

  try {
    return await httpClient.get(`/api/v1/featured?${queryBuilder.query()}`, {
      next: {
        tags: ['featured'],
      },
    });
  } catch (error: any) {
    return error;
  }
};
