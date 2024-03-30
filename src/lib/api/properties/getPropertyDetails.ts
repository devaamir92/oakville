import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { httpClient } from '@lib/httpclient';

import getSimilarProperties from './getSimilarProperties';

const getSoldHistory = async (addr: string, unit: string, Apt_num: string) => {
  const queryBuilder = RequestQueryBuilder.create();

  queryBuilder.select([
    'Lsc',
    'Pr_Lsc',
    'Cndsold_xd',
    'Cd',
    'Xdtd',
    'Xd',
    'Unavail_dt',
    'Td',
    'Dt_sus',
    'Dt_ter',
    'id',
    'Ml_num',
    'Sp_dol',
    'Unit_num',
    'Apt_num',
    'Slug',
    'Status',
    'Lp_dol',
    'Dom',
  ]);

  queryBuilder.search({
    $and: [
      {
        Status: {
          $eq: 'U',
        },
        Addr: {
          $eq: addr,
        },
        Unit_num: {
          $eq: unit,
        },
        Apt_num: {
          $eq: Apt_num,
        },
      },
    ],
  });

  const res = await httpClient.get(`/api/v1/property?${queryBuilder.query()}`, {
    next: {
      tags: ['soldHistory'],
    },
  });
  return res;
};

const getPropertyDetails = async (slug: string) => {
  const res = await httpClient.get(`/api/v1/property/slug/${slug}`, {
    next: {
      tags: ['propertydetails'],
    },
  });

  const property: any = await res;

  const soldHistory = await getSoldHistory(
    property.Addr,
    property.Unit_num,
    property.Apt_num
  );
  const similarProperties = await getSimilarProperties(
    property.S_r,
    Number(property.Lp_dol) - 100000,
    Number(property.Lp_dol) + 100000,
    property.Slug
  );
  return { property, soldHistory, similarProperties };
};

export default getPropertyDetails;
