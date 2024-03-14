import { RequestQueryBuilder } from '@nestjsx/crud-request';

export async function searchProperty(search: string, page: number) {
  const queryBuilder = RequestQueryBuilder.create();

  if (search) {
    queryBuilder.search({
      $and: [
        {
          Status: {
            $eq: 'A',
          },
        },
        {
          $or: [
            {
              Addr: {
                $contL: search,
              },
            },
            {
              Ml_num: {
                $contL: search,
              },
            },
            {
              Community: {
                $contL: search,
              },
            },
          ],
        },
      ],
    });
  }

  queryBuilder.select([
    'Ml_num',
    'Addr',
    'Unit_num',
    'Apt_num',
    'Lp_dol',
    'Br',
    'Bath_tot',
    'Park_spcs',
    'Br_plus',
    'Status',
    'Is_locked',
    'Slug',
    'Dom',
    'Community',
    'Lsc',
    'Sqft',
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

  const response = await res.json();

  return response;
}
