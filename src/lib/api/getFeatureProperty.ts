import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { getFavourite } from './favourite';

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

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Apt_num',
    'Lp_dol',
    'Br',
    'Br_plus',
    'Bath_tot',
    'Park_spcs',
    'Status',
    'Is_locked',
    'Slug',
    'Community',
    'Bsmt1_out',
    'Lat',
    'Lng',
    'S_r',
  ]);

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
