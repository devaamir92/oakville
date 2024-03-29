import { RequestQueryBuilder } from '@nestjsx/crud-request';

import { BedroomsParser } from '@utils/parsers/bedrooms-parser';

import { BathroomsParser } from '@utils/parsers/bathrooms-parser';

import sortlisting from '@utils/sort';

import { httpClient } from '@lib/httpclient';

import selectItems from './selectItems';

export const getPropertiesForSale = async (
  page: number,
  max: number,
  min: number,
  type: string | string[],
  bedrooms: any,
  bathrooms: any,
  basement: string | string[],
  sort: string,
  S_r: string,
  neighborhood: string = '',
  classType?: string
) => {
  const queryBuilder = RequestQueryBuilder.create();

  let search = {};

  if (bedrooms) {
    search = {
      ...search,
      ...BedroomsParser.create(bedrooms).parse(),
    };
  }
  if (bathrooms) {
    search = {
      ...search,
      ...BathroomsParser.create(bathrooms).parse(),
    };
  }

  const propsBsmt = Array.isArray(basement) ? basement : [basement];

  const bsmtQuery: any =
    (basement && {
      Bsmt1_out: {
        $in: propsBsmt,
      },
    }) ||
    {};

  const neighborhoodQuery: any =
    (neighborhood && {
      Community: {
        $eqL: neighborhood,
      },
    }) ||
    {};

  const classTypeQuery: any =
    (classType && {
      Class_type: {
        $eq: classType,
      },
    }) ||
    {};

  queryBuilder
    .search({
      $and: [
        {
          Status: {
            $eq: 'A',
          },

          S_r: {
            $eq: S_r,
          },
          Lp_dol: {
            $gte: min,
            $lte: max,
          },
          Type_own_srch: {
            $eq: type,
          },
          ...classTypeQuery,
          ...neighborhoodQuery,
          ...bsmtQuery,
          ...search,
        },
      ],
    })
    .sortBy(sortlisting(sort));

  queryBuilder.select(selectItems);

  queryBuilder.setPage(page ?? 1);

  try {
    return await httpClient.get(`/api/v1/property?${queryBuilder.query()}`, {
      next: {
        tags: ['properties'],
      },
    });
  } catch (error: any) {
    return error;
  }
};
