import { RequestQueryBuilder } from '@nestjsx/crud-request';

import selectItems from '@lib/api/properties/selectItems';

export async function popupDetail(slug: string) {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.setFilter({
    field: 'Slug',
    operator: '$eq',
    value: slug,
  });

  queryBuilder.select(selectItems);
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

  return property.data[0];
}
