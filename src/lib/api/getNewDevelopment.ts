import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { httpClient } from '@lib/httpclient';

export async function getNewDevelopment(
  type: string,
  status: string,
  occupancy: string,
  search: string,
  page: number
) {
  const queryBuilder = RequestQueryBuilder.create();

  const propType = Array.isArray(type) ? type : [type];
  const propStatus = Array.isArray(status) ? status : [status];
  const propOccupancy = Array.isArray(occupancy) ? occupancy : [occupancy];

  const typeQuery: any =
    (type && {
      type: {
        $in: propType,
      },
    }) ||
    {};

  const statusQuery: any =
    (status && {
      status: {
        $in: propStatus,
      },
    }) ||
    {};

  const occupancyQuery: any =
    (occupancy && {
      estimatedCompletionDate: {
        $in: propOccupancy,
      },
    }) ||
    {};

  queryBuilder
    .search({
      $or: [
        {
          name: {
            $contL: search,
          },
        },
        {
          $and: [
            {
              ...typeQuery,
              ...statusQuery,
              ...occupancyQuery,
            },
          ],
        },
      ],
    })
    .setJoin({
      field: 'gallery',
    })
    .setFilter({
      field: 'publish',
      operator: '$eq',
      value: true,
    })
    .sortBy({
      field: 'createdAt',
      order: 'DESC',
    })
    .setLimit(9)
    .setPage(page ?? 1);

  try {
    return await httpClient.get(
      `/api/v1/development/project?${queryBuilder.query()}`,
      {
        next: {
          tags: ['projects'],
        },
      }
    );
  } catch (error: any) {
    return error;
  }
}
