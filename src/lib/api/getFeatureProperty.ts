import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { getFavourite } from './favourite';
import selectItems from './properties/selectItems';

const getFeatureProperty = async (page: number) => {
  const queryBuilder = RequestQueryBuilder.create();
  const favourite = await getFavourite();
  if (!favourite.length) {
    return {
      data: [],
      pageCount: 1,
      page: 1,
    };
  }
  queryBuilder.search({
    $and: [
      {
        Status: {
          $eq: 'A',
        },
      },
      {
        Ml_num: {
          $in: favourite,
        },
      },
    ],
  });

  queryBuilder.select(selectItems);

  queryBuilder.setPage(page ?? 1);

  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: ['property'],
      },
      cache: 'no-cache',
    }
  );
  return res.json();
};

export default getFeatureProperty;
