import { RequestQueryBuilder } from '@nestjsx/crud-request';

export async function popupDetail(slug: string) {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.setFilter({
    field: 'Slug',
    operator: '$eq',
    value: slug,
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
  const res = await fetch(
    `${process.env.API_HOST}/api/v1/property?${queryBuilder.query()}`,
    {
      method: 'GET',
      next: {
        tags: [slug],
      },
      cache: 'no-cache',
    }
  );
  const property = await res.json();
  console.log(property.data[0]);

  return property.data[0];
}
