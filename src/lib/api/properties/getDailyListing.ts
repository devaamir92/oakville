import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { httpClient } from '@lib/httpclient';

import selectItems from './selectItems';

export const getDailyListing = async () => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .setFilter({
      field: 'Status',
      operator: '$eq',
      value: 'A',
    })
    .setFilter({
      field: 'S_r',
      operator: '$eq',
      value: 'Sale',
    })
    .sortBy({
      field: 'Dom',
      order: 'ASC',
    })
    .setLimit(8);

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
