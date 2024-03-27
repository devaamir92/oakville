import { RequestQueryBuilder } from '@nestjsx/crud-request';

const getSimilarProperties = async (
  sr: string,
  min: number,
  max: number,
  slug: string
) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder
    .search({
      $and: [
        {
          Status: {
            $eq: 'A',
          },
          S_r: {
            $eq: sr,
          },
          Lp_dol: {
            $gte: min,
            $lte: max,
          },
          Slug: {
            $ne: slug,
          },
        },
      ],
    })
    .setLimit(3);

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
    'Dom',
  ]);

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

export default getSimilarProperties;
