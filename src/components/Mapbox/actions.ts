import { RequestQueryBuilder } from '@nestjsx/crud-request';

import selectItems from '@lib/api/properties/selectItems';
import { httpClient } from '@lib/httpclient';

export async function popupDetail(mls: any) {
  const queryBuilder = RequestQueryBuilder.create();

  const mlsQuery: any =
    (mls && {
      Ml_num: {
        $in: mls,
      },
    }) ||
    {};

  queryBuilder.search({
    ...mlsQuery,
  });

  queryBuilder.select(selectItems);

  const res = await httpClient.get(`/api/v1/property?${queryBuilder.query()}`, {
    next: {
      tags: [mls],
    },
  });

  const data: any = await res;
  return data.data;
}
