import { notFound } from 'next/navigation';
import { RequestQueryBuilder } from '@nestjsx/crud-request';

import moment from 'moment';

import { BedroomsParser } from '@utils/parsers/bedrooms-parser';
import { BathroomsParser } from '@utils/parsers/bathrooms-parser';

import inPolygon from '@utils/inPolygon';
import sortlisting from '@utils/sort';

import { httpClient } from '@lib/httpclient';

import selectItems from './selectItems';

interface IProperties {
  limit: number;
  sort?: string;
  neighborhood?: string;
  page?: number;
  max?: number;
  min?: number;
  type?: string | string[];
  bedrooms?: any;
  bathrooms?: any;
  basement?: string | string[];
  S_r?: string;
  classType?: string;
  usePolygon?: boolean;
  days?: number;
  status?: string;
  Lsc?: string;
}

const validateBedrooms = (value: any) => {
  const regex = /^\d+$/;

  if (typeof value === 'string') {
    if (!regex.test(value)) {
      return notFound();
    }
  } else if (Array.isArray(value)) {
    if (!value.every(bedroom => regex.test(bedroom))) {
      return notFound();
    }
  }
  return true;
};

export const getProperties = async ({
  page,
  max,
  min,
  type,
  bedrooms,
  bathrooms,
  basement,
  sort = '',
  S_r,
  neighborhood = '',
  classType,
  usePolygon,
  limit,
  days = 0,
  status = 'A',
  Lsc,
}: IProperties) => {
  if (Number.isNaN(min) || Number.isNaN(max)) {
    return notFound();
  }
  const queryBuilder = RequestQueryBuilder.create();
  const date = new Date();
  date.setDate(date.getDate() - days);

  let search = {};

  if (bedrooms) {
    validateBedrooms(bedrooms);
    search = {
      ...search,
      ...BedroomsParser.create(bedrooms).parse(),
    };
  }
  if (bathrooms) {
    validateBedrooms(bathrooms);
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

  const daysfilter: any =
    (days > 0 && {
      Cd: {
        $gte: moment(date).utc().format('YYYY-MM-DDT HH:mm:ss:SSS[Z]'),
      },
    }) ||
    {};

  const LscQuery: any =
    (Lsc && {
      Lsc: {
        $eq: Lsc,
      },
    }) ||
    {};

  queryBuilder
    .search({
      $and: [
        {
          Status: {
            $eq: status,
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
          ...daysfilter,
          ...LscQuery,
          ...search,
        },
      ],
    })
    .sortBy(sortlisting(sort))
    .setLimit(limit);

  queryBuilder.select(selectItems);

  queryBuilder.setPage(page ?? 1);

  try {
    const res: any = await httpClient.get(
      `/api/v1/property?${queryBuilder.query()}`,
      {
        next: {
          tags: ['properties'],
        },
      }
    );
    const data = await res;
    if (usePolygon) {
      const responce = inPolygon(data.data);
      const rows = {
        data: responce,
      };
      return rows;
    }
    return data;
  } catch (error: any) {
    return error;
  }
};
