import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { httpClient } from '@lib/httpclient';

import selectItems from './selectItems';

export const getRecentlySold = async () => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setFilter({
      field: 'Status',
      operator: '$eq',
      value: 'U',
    })
    .setFilter({
      field: 'Lsc',
      operator: '$eq',
      value: 'Sld',
    })
    .setLimit(4);

  queryBuilder.select(selectItems);

  try {
    return await httpClient.get(`/api/v1/property?${queryBuilder.query()}`, {
      next: {
        tags: ['property'],
      },
    });
  } catch (error: any) {
    return error;
  }
};
