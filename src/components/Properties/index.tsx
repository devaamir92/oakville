import { RequestQueryBuilder } from '@nestjsx/crud-request';

import Pagination from '@components/ui/Pagination';
import Card from '@components/ListingCard';
import cn from '@utils/cn';
import { BedroomsParser } from '@utils/parsers/bedrooms-parser';
import { BathroomsParser } from '@utils/parsers/bathrooms-parser';
import Sorting from '@components/Sorting';
import sortlisting from '@utils/sort';
import { getSession } from '@lib/getsession';
import getBedroomString from '@utils/getbedroomString';
import getSlug from '@utils/getSlug';

interface PropertyProps {
  view?: 'list' | 'map';
  page: number;
  min: number;
  max: number;
  type: any;
  bathrooms: any;
  bedrooms: any;
  basement: any;
  sort: any;
  title?: string;
  S_r: string;
  neighborhood?: string;
  location: string;
  classType?: string;
}

const getProperties = async (
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

const Property: React.FC<PropertyProps> = async ({
  page,
  view,
  max,
  min,
  type,
  bedrooms,
  bathrooms,
  basement,
  sort,
  title,
  S_r,
  neighborhood,
  location,
  classType,
}) => {
  const rows = await getProperties(
    page,
    max,
    min,
    type,
    bedrooms,
    bathrooms,
    basement,
    sort,
    S_r,
    neighborhood,
    classType
  );

  const session = await getSession();

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between gap-2">
        <h1
          className={cn(
            'flex-1 text-start text-xl font-semibold capitalize text-gray-800 lg:text-left'
          )}
        >
          {rows?.total.toLocaleString()} {title ?? 'Properties'}
        </h1>
        <div className="flex size-fit items-center justify-end gap-2">
          <span className="w-full">Sort by:</span>
          <Sorting />
        </div>
      </div>
      <div
        className={cn('grid grid-cols-1 gap-4 md:grid-cols-2', {
          'xl:grid-cols-4': view === 'list',
        })}
      >
        {rows?.data?.map((item: any) => (
          <Card
            session={session}
            mls={item.Ml_num}
            key={item.id}
            bathrooms={item.Bath_tot ?? 0}
            bedrooms={getBedroomString(Number(item.Br), Number(item.Br_plus))}
            imageUrl={`https://api.preserveoakville.ca/api/v1/stream/${item.Ml_num}/photo_1.webp`}
            location={item.Addr}
            price={Number(item.Lp_dol).toLocaleString() ?? '0'}
            parking={item.Park_spcs ?? '0'}
            slug={getSlug(item.S_r, item.Status, item.Community, item.Slug)}
            isLocked={item.Is_locked}
          />
        ))}
      </div>

      {rows?.pageCount > 1 && (
        <Pagination
          totalPages={rows.pageCount}
          currentPage={rows.page}
          location={location}
        />
      )}
    </div>
  );
};

export default Property;
